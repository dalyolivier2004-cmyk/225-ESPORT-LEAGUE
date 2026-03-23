
// Gestion du lecteur audio 225 E-SPORTS LEAGUE avec Playlist Gamer et lecture continue
document.addEventListener('DOMContentLoaded', function() {
    // Liste des musiques disponibles - NEFFEX Collection
    const playlist = [
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

    // Récupérer l'état de lecture sauvegardé
    let currentTrackIndex = parseInt(localStorage.getItem('audioTrackIndex')) || 0;
    let currentTime = parseFloat(localStorage.getItem('audioCurrentTime')) || 0;
    let isPlaying = localStorage.getItem('audioIsPlaying') === 'true';

    const audio = new Audio();
    audio.src = playlist[currentTrackIndex].src;
    audio.volume = 0.5;
    audio.currentTime = currentTime;

    // Création du bouton de contrôle
    const audioBtn = document.createElement('div');
    audioBtn.id = 'audio-control';
    audioBtn.innerHTML = `
        <div class="audio-icon">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <div class="audio-info">
            <span class="audio-text">MUSIQUE GAMER</span>
            <span class="track-title">${playlist[currentTrackIndex].title}</span>
        </div>
    `;

    // Style du bouton
    const style = document.createElement('style');
    style.textContent = `
        #audio-control {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #ff7700;
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            font-family: 'Arial Black', sans-serif;
        }
        #audio-control:hover {
            transform: scale(1.05);
            background: #e66a00;
        }
        .audio-info {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }
        .audio-text {
            font-size: 10px;
            text-transform: uppercase;
            opacity: 0.8;
        }
        .track-title {
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 150px;
        }
        #audio-control.playing .audio-icon .bar {
            animation: music-bar 0.6s infinite alternate;
        }
        .audio-icon {
            display: flex;
            align-items: flex-end;
            gap: 2px;
            height: 15px;
        }
        .bar {
            width: 3px;
            height: 100%;
            background: white;
            display: block;
        }
        .bar:nth-child(2) { height: 60%; animation-delay: 0.2s; }
        .bar:nth-child(3) { height: 80%; animation-delay: 0.4s; }

        @keyframes music-bar {
            0% { height: 20%; }
            100% { height: 100%; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(audioBtn);

    // Tenter la lecture automatique
    if (isPlaying) {
        audio.play().then(() => {
            audioBtn.classList.add('playing');
        }).catch(e => {
            console.log("Lecture automatique bloquée. En attente d'interaction.");
            // On garde isPlaying à true pour que ça démarre au premier clic n'importe où
        });
    }

    // Démarrer au premier clic sur la page si bloqué
    document.addEventListener('click', function startOnFirstClick() {
        if (audio.paused && isPlaying) {
            audio.play().then(() => {
                audioBtn.classList.add('playing');
            });
        }
        document.removeEventListener('click', startOnFirstClick);
    }, { once: true });

    // Sauvegarder l'état régulièrement
    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem('audioCurrentTime', audio.currentTime);
            localStorage.setItem('audioTrackIndex', currentTrackIndex);
            localStorage.setItem('audioIsPlaying', 'true');
        }
    }, 1000);

    // Fonction pour changer de morceau
    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        audio.src = playlist[currentTrackIndex].src;
        document.querySelector('.track-title').textContent = playlist[currentTrackIndex].title;
        localStorage.setItem('audioTrackIndex', currentTrackIndex);
        localStorage.setItem('audioCurrentTime', 0);
        if (isPlaying) {
            audio.play();
        }
    }

    // Toggle Play/Pause
    audioBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Empêcher le clic de déclencher d'autres événements
        if (audio.paused) {
            audio.play().then(() => {
                audioBtn.classList.add('playing');
                localStorage.setItem('audioIsPlaying', 'true');
                isPlaying = true;
            }).catch(err => {
                alert("Veuillez interagir avec la page pour activer la musique.");
            });
        } else {
            audio.pause();
            audioBtn.classList.remove('playing');
            localStorage.setItem('audioIsPlaying', 'false');
            isPlaying = false;
        }
    });

    // Passer à la musique suivante à la fin
    audio.addEventListener('ended', nextTrack);
});
