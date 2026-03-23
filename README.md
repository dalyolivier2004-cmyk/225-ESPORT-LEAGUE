# 225 E-SPORTS LEAGUE - Application Web

## 🎮 Description
Application web complète pour la gestion d'une ligue d'e-sports avec interface administrateur sécurisée.

## 📋 Fichiers Inclus
- `index.html` - Page d'accueil avec authentification YM
- `admin.html` - Interface administrateur (Galerie, Tournois, Équipes, Inscriptions)
- `galerie.html` - Page galerie publique
- `tournoi.html` - Page tournois publique
- `equipes.html` - Page équipes publique
- `inscription.html` - Page inscriptions publique
- `modern-design.css` - Styles CSS
- `audio-player.js` - Lecteur audio
- `ux-improvements.js` - Améliorations UX
- `image/` - Dossier des images

## 🔐 Authentification

### Accès à l'Admin
1. Allez sur la page d'accueil (`index.html`)
2. Tapez **"YM"** au clavier
3. Une modal de mot de passe apparaîtra
4. Entrez le mot de passe : **"Relvio"**
5. Vous serez redirigé vers l'interface admin

**⚠️ Important :** Le code YM n'est actif que sur la page d'accueil uniquement !

## 🛠️ Fonctionnalités Admin

### 1. Galerie
- Ajouter des images avec titre et catégorie
- Ajouter des fonds dynamiques personnalisés
- Supprimer des images
- Les images s'affichent automatiquement sur la page galerie publique

### 2. Tournois
- Créer des tournois avec :
  - Titre et description
  - Type de jeu
  - Date de début
  - Cagnotte
  - Fond dynamique optionnel
- Supprimer des tournois
- Affichage automatique sur la page tournois publique

### 3. Équipes
- Ajouter des équipes avec :
  - Nom de l'équipe
  - Capitaine
  - Type de jeu
  - Membres
  - Fond dynamique optionnel
- Supprimer des équipes
- Affichage automatique sur la page équipes publique

### 4. Inscriptions
- Voir toutes les inscriptions
- Approuver les inscriptions (statut: approved)
- Rejeter les inscriptions (statut: rejected)
- Supprimer les inscriptions
- Les inscriptions sont enregistrées depuis la page inscription publique

## 💾 Stockage des Données
Toutes les données sont stockées dans **localStorage** du navigateur :
- `galleries` - Images de la galerie
- `tournaments` - Tournois
- `teams` - Équipes
- `registrations` - Inscriptions

## 🌐 Utilisation

### Pour les utilisateurs publics
1. Accédez à `index.html`
2. Naviguez entre les pages (Tournoi, Équipes, Galerie, Inscriptions)
3. Inscrivez votre équipe via le formulaire

### Pour les administrateurs
1. Allez sur `index.html`
2. Tapez "YM" puis entrez le mot de passe "Relvio"
3. Gérez le contenu depuis le dashboard

## 📱 Responsive Design
L'application est entièrement responsive et fonctionne sur :
- Desktop
- Tablette
- Mobile

## 🎨 Personnalisation

### Fonds Dynamiques
Vous pouvez ajouter des URL de fonds dynamiques pour :
- Les images de la galerie
- Les tournois
- Les équipes

Ces fonds s'afficheront en arrière-plan sur les pages publiques correspondantes.

## ⚙️ Configuration

### Modifier le mot de passe
Dans `index.html` et `admin.html`, cherchez :
```javascript
if (password === 'Relvio') {
```
Remplacez `'Relvio'` par votre mot de passe souhaité.

### Modifier le code d'accès
Dans `index.html`, cherchez :
```javascript
if (keySequence === 'YM') {
```
Remplacez `'YM'` par votre code souhaité.

## 📞 Support
Pour toute question ou modification, contactez l'équipe de développement.

---
**Créé pour 225 E-SPORTS LEAGUE**
