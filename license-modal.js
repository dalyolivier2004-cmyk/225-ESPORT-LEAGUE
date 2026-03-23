// GESTION DE LA MODALE DE LICENCE
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur a déjà accepté la licence
    const licenseAccepted = localStorage.getItem('licenseAccepted');
    
    if (!licenseAccepted) {
        // Afficher la modale de licence
        showLicenseModal();
    }
});

function showLicenseModal() {
    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.className = 'license-modal-overlay';
    overlay.id = 'licenseModalOverlay';
    
    // Créer la modale
    const modal = document.createElement('div');
    modal.className = 'license-modal';
    
    // Contenu de la licence - PARTIE 1
    const licensePart1 = `
        <h3>1. Conditions de participation</h3>
        <ul>
            <li>Le tournoi est ouvert à toutes les équipes inscrites avant la date limite.</li>
            <li>Chaque équipe doit être composée de 5 joueurs titulaires.</li>
            <li>Un maximum de 2 remplaçants peut être autorisé par équipe.</li>
            <li>Les joueurs doivent respecter les horaires et les consignes des organisateurs.</li>
        </ul>
        
        <h3>2. Format du tournoi</h3>
        <ul>
            <li>Les matchs se jouent en équipes de 5 contre 5.</li>
            <li>Le format peut être BO1 (Best of 1), BO3 (Best of 3) selon l'étape du tournoi.</li>
            <li>Les organisateurs se réservent le droit de modifier le format en cas de besoin.</li>
        </ul>
        
        <h3>3. Comportement et fair-play</h3>
        <ul>
            <li>Tout comportement toxique, insultant ou agressif est strictement interdit.</li>
            <li>Les joueurs doivent respecter leurs adversaires, les arbitres et les organisateurs.</li>
            <li>Le non-respect des règles de fair-play peut entraîner une disqualification immédiate.</li>
        </ul>
    `;
    
    // Contenu de la licence - PARTIE 2
    const licensePart2 = `
        <h3>4. Retards et absences</h3>
        <ul>
            <li>Les équipes doivent être présentes au moins 15 minutes avant leur match.</li>
            <li>Un retard supérieur à 10 minutes peut entraîner une défaite automatique.</li>
            <li>Une équipe inexistante peut être éliminée du tournoi.</li>
        </ul>
        
        <h3>5. Triche et exploitation de bugs</h3>
        <ul>
            <li>L'utilisation de cheats, hacks ou logiciels des strictement interdite.</li>
            <li>L'exploitation volontaire d'un bug du jeu peut entraîner une sanction.</li>
            <li>Toute tentative de triche entraînera une disqualification immédiate.</li>
        </ul>
        
        <h3>6. Décisions des arbitres</h3>
        <ul>
            <li>Les arbitres et organisateurs ont l'autorité finale sur toutes les décisions.</li>
            <li>En cas de litige, la décision des organisateurs est définitive.</li>
        </ul>
        
        <h3>7. Diffusion et médias</h3>
        <ul>
            <li>Les matchs peuvent être diffusés sur les plateformes officielles (YouTube, TikTok, etc.)</li>
            <li>Les joueurs acceptent que leurs matchs soient filmés et diffusés.</li>
        </ul>
        
        <h3>8. Sanctions</h3>
        <ul>
            <li>Avertissement</li>
            <li>Perte du match</li>
            <li>Disqualification du tournoi</li>
            <li>Bannissement des futurs tournois organisés par les organisateurs.</li>
        </ul>
        
        <h3>9. Acceptation du règlement</h3>
        <ul>
            <li>Toute participation au tournoi implique l'acceptation complète de ce règlement.</li>
        </ul>
    `;
    
    // En-tête de la modale
    const header = document.createElement('div');
    header.className = 'license-modal-header';
    header.innerHTML = `
        <h2>⚖️ RÈGLEMENT INTÉRIEUR</h2>
        <p>Tournoi Honor of Kings - 225 E-SPORTS LEAGUE</p>
    `;
    
    // Contenu de la modale
    const content = document.createElement('div');
    content.className = 'license-modal-content';
    content.id = 'licenseContent';
    content.innerHTML = licensePart1;
    
    // Pied de page avec boutons
    const footer = document.createElement('div');
    footer.className = 'license-modal-footer';
    
    // Navigation
    const navDiv = document.createElement('div');
    navDiv.className = 'license-modal-nav';
    navDiv.innerHTML = `
        <button class="license-nav-btn" id="prevBtn" onclick="previousLicensePage()" disabled>← Précédent</button>
        <button class="license-nav-btn" id="nextBtn" onclick="nextLicensePage()">Suivant →</button>
    `;
    
    // Indicateur de page
    const pageIndicator = document.createElement('div');
    pageIndicator.className = 'license-page-indicator';
    pageIndicator.id = 'pageIndicator';
    pageIndicator.textContent = 'Page 1 / 2';
    
    // Boutons d'action
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'license-modal-buttons';
    buttonsDiv.innerHTML = `
        <button class="license-btn license-btn-accept" onclick="acceptLicense()">✓ Accepter</button>
        <button class="license-btn license-btn-reject" onclick="rejectLicense()">✗ Refuser</button>
    `;
    
    // Assembler la modale
    footer.appendChild(navDiv);
    footer.appendChild(pageIndicator);
    footer.appendChild(buttonsDiv);
    
    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(footer);
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Stocker les contenus pour la navigation
    window.licenseParts = [licensePart1, licensePart2];
    window.currentLicensePage = 0;
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

function nextLicensePage() {
    if (window.currentLicensePage < window.licenseParts.length - 1) {
        window.currentLicensePage++;
        updateLicenseContent();
    }
}

function previousLicensePage() {
    if (window.currentLicensePage > 0) {
        window.currentLicensePage--;
        updateLicenseContent();
    }
}

function updateLicenseContent() {
    const content = document.getElementById('licenseContent');
    const pageIndicator = document.getElementById('pageIndicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Mettre à jour le contenu
    content.innerHTML = window.licenseParts[window.currentLicensePage];
    
    // Mettre à jour l'indicateur de page
    pageIndicator.textContent = `Page ${window.currentLicensePage + 1} / ${window.licenseParts.length}`;
    
    // Mettre à jour l'état des boutons
    prevBtn.disabled = window.currentLicensePage === 0;
    nextBtn.disabled = window.currentLicensePage === window.licenseParts.length - 1;
    
    // Scroll vers le haut du contenu
    content.scrollTop = 0;
}

function acceptLicense() {
    // Enregistrer l'acceptation dans localStorage
    localStorage.setItem('licenseAccepted', 'true');
    localStorage.setItem('licenseAcceptedDate', new Date().toISOString());
    
    // Retirer la modale
    const overlay = document.getElementById('licenseModalOverlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Restaurer le scroll du body
    document.body.style.overflow = 'auto';
}

function rejectLicense() {
    // Rediriger vers la page d'accès refusé
    window.location.href = 'access-denied.html';
}
