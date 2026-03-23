/**
 * Gestionnaire Audio Partagé v3 - Spécial Firefox & Synchronisation Totale
 * 225 E-SPORTS LEAGUE
 */

class SharedAudioManager {
    constructor() {
        this.playlist = [
            { title: "NEFFEX - Life", src: "audio/life.mp3" },
            { title: "NEFFEX - Fight Back", src: "audio/fight_back.mp3" },
            { title: "NEFFEX - Destiny", src: "audio/destiny.mp3" },
            { title: "NEFFEX - Best of Me", src: "audio/best_of_me.mp3" },
            { title: "NEFFEX - Failure", src: "audio/failure.mp3" },
            { title: "NEFFEX - Hope", src: "audio/hope.mp3" },
            { title: "NEFFEX - Cold", src: "audio/cold.mp3" },
            { title: "NEFFEX - Crown", src: "audio/crown.mp3" },
            { title: "NEFFEX - Unstoppable", src: "audio/unstoppable.mp3" },
            { title: "NEFFEX - Grateful", src: "audio/grateful.mp3" },
            { title: "NEFFEX - Rumors", src: "audio/rumors.mp3" }
        ];

        this.audio = new Audio();
        this.audio.preload = "auto"; // Préchargement pour Firefox
        this.audio.volume = 0.5;
        this.audioBtn = null;
        
        this.loadState();
        this.init();
    }

    loadState() {
        this.currentTrackIndex = parseInt(localStorage.getItem('audioTrackIndex')) || 0;
        this.savedTime = parseFloat(localStorage.getItem('audioCurrentTime')) || 0;
        
        // Par défaut, on veut que ça joue (autonome)
        const storedIsPlaying = localStorage.getItem('audioIsPlaying');
        this.isPlaying = storedIsPlaying === null ? true : storedIsPlaying === 'true';
    }

    init() {
        // Charger la source
        this.audio.src = this.playlist[this.currentTrackIndex].src;
        
        // CRUCIAL POUR FIREFOX : On attend que les métadonnées soient chargées avant de fixer le temps
        this.audio.addEventListener('loadedmetadata', () => {
            this.audio.currentTime = this.savedTime;
        }, { once: true });

        this.createAudioButton();
        this.setupEventListeners();
        
        // Tenter de démarrer
        if (this.isPlaying) {
            this.attemptPlay();
        }
    }

    createAudioButton() {
        if (document.getElementById('audio-control')) return;

        this.audioBtn = document.createElement('div');
        this.audioBtn.id = 'audio-control';
        this.audioBtn.innerHTML = `
            <div class="audio-icon">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="audio-info">
                <span class="audio-text">MUSIQUE GAMER</span>
                <span class="track-title">${this.playlist[this.currentTrackIndex].title}</span>
            </div>
        `;

        this.injectStyles();
        document.body.appendChild(this.audioBtn);
    }

    injectStyles() {
        if (document.getElementById('audio-control-styles')) return;
        const style = document.createElement('style');
        style.id = 'audio-control-styles';
        style.textContent = `
            #audio-control {
                position: fixed; bottom: 30px; right: 30px;
                background: #ff7700; color: white; padding: 10px 20px;
                border-radius: 50px; display: flex; align-items: center;
                gap: 12px; cursor: pointer; z-index: 9999;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                transition: all 0.3s ease; font-family: 'Arial Black', sans-serif;
                user-select: none;
            }
            #audio-control.playing .audio-icon .bar { animation: music-bar 0.6s infinite alternate; }
            .audio-icon { display: flex; align-items: flex-end; gap: 2px; height: 15px; }
            .bar { width: 3px; height: 100%; background: white; display: block; }
            .bar:nth-child(2) { height: 60%; animation-delay: 0.2s; }
            .bar:nth-child(3) { height: 80%; animation-delay: 0.4s; }
            @keyframes music-bar { 0% { height: 20%; } 100% { height: 100%; } }
            .audio-info { display: flex; flex-direction: column; line-height: 1.2; }
            .audio-text { font-size: 10px; text-transform: uppercase; opacity: 0.8; }
            .track-title { font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px; }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // Clic sur le bouton
        this.audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.audio.paused) {
                this.isPlaying = true;
                this.attemptPlay();
            } else {
                this.isPlaying = false;
                this.audio.pause();
                this.updateUI(false);
            }
            localStorage.setItem('audioIsPlaying', this.isPlaying);
        });

        // Fin de piste
        this.audio.addEventListener('ended', () => this.nextTrack());

        // Sauvegarde TRÈS régulière du temps (toutes les 200ms pour Firefox)
        setInterval(() => {
            if (!this.audio.paused) {
                localStorage.setItem('audioCurrentTime', this.audio.currentTime);
            }
        }, 200);

        // ÉCOUTEUR DE SYNCHRONISATION
        window.addEventListener('storage', (e) => {
            if (e.key === 'audioIsPlaying') {
                if (e.newValue === 'true') this.attemptPlay();
                else { this.audio.pause(); this.updateUI(false); }
            }
            if (e.key === 'audioTrackIndex') {
                const newIndex = parseInt(e.newValue);
                if (newIndex !== this.currentTrackIndex) {
                    this.currentTrackIndex = newIndex;
                    this.audio.src = this.playlist[this.currentTrackIndex].src;
                    this.audio.currentTime = 0;
                    if (this.isPlaying) this.attemptPlay();
                    this.updateTrackTitle();
                }
            }
        });

        // Débloquer l'audio au premier clic ou mouvement si nécessaire
        const unlock = () => {
            if (this.isPlaying && this.audio.paused) {
                this.attemptPlay();
            }
            document.removeEventListener('click', unlock);
            document.removeEventListener('keydown', unlock);
        };
        document.addEventListener('click', unlock);
        document.addEventListener('keydown', unlock);
    }

    attemptPlay() {
        // Sur Firefox, on s'assure que le temps est bien calé avant de jouer
        const playPromise = this.audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.updateUI(true);
            }).catch(error => {
                console.log("Firefox bloque l'autoplay. En attente d'interaction.");
                this.updateUI(false);
            });
        }
    }

    updateUI(playing) {
        if (playing) this.audioBtn.classList.add('playing');
        else this.audioBtn.classList.remove('playing');
    }

    updateTrackTitle() {
        const titleEl = this.audioBtn.querySelector('.track-title');
        if (titleEl) titleEl.textContent = this.playlist[this.currentTrackIndex].title;
    }

    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        localStorage.setItem('audioTrackIndex', this.currentTrackIndex);
        localStorage.setItem('audioCurrentTime', 0);
        this.audio.src = this.playlist[this.currentTrackIndex].src;
        this.updateTrackTitle();
        this.attemptPlay();
    }
}

// Initialisation immédiate
(function() {
    const init = () => { new SharedAudioManager(); };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
