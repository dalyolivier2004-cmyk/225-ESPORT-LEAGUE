# 225 E-SPORTS LEAGUE - Version 2.0

## 🎮 À propos

Site web moderne pour la **225 E-SPORTS LEAGUE** avec système d'inscription synchronisé en temps réel. Les inscriptions sont maintenant visibles sur tous les navigateurs et appareils instantanément.

## ✨ Nouvelles fonctionnalités (v2.0)

- ✅ **Synchronisation en temps réel** : Les inscriptions s'affichent immédiatement sur tous les navigateurs
- ✅ **Base de données cloud** : Données sécurisées et persistantes
- ✅ **Pas de serveur à gérer** : Tout est hébergé dans le cloud
- ✅ **Gratuit** : Supabase offre un plan gratuit généreux
- ✅ **Domaine personnalisé** : Utilisez votre propre domaine
- ✅ **Discret** : Personne ne saura comment c'est fait

## 🚀 Démarrage rapide

### Prérequis

- Un compte Supabase (gratuit)
- Un compte Netlify ou Vercel (gratuit)

### Installation en 5 étapes

1. **Créer un compte Supabase** : [supabase.com](https://supabase.com/)

2. **Créer un projet et la base de données** :
   - Suivez le guide `DEPLOIEMENT_RAPIDE.md`

3. **Configurer les clés API** :
   - Remplacez les clés dans `inscription-supabase.html` et `admin-supabase.html`

4. **Renommer les fichiers** :
   ```bash
   mv inscription-supabase.html inscription.html
   mv admin-supabase.html admin.html
   ```

5. **Déployer en ligne** :
   - Uploadez sur Netlify ou Vercel

**Durée totale : 30 minutes**

## 📁 Structure du projet

```
225-ESPORT-LEAGUE/
├── index.html                 # Page d'accueil
├── inscription.html           # Formulaire d'inscription (NOUVEAU)
├── admin.html                 # Panneau d'administration (NOUVEAU)
├── actualites.html            # Page des actualités
├── equipes.html               # Page des équipes
├── galerie.html               # Galerie d'images
├── tournoi.html               # Page des tournois
├── modern-design.css          # Styles principaux
├── supabase-config.js         # Configuration Supabase
├── DEPLOIEMENT_RAPIDE.md      # Guide de déploiement (LIRE EN PREMIER)
├── GUIDE_SUPABASE.md          # Guide détaillé de configuration
├── MODIFICATIONS.md           # Résumé des changements
└── image/                     # Dossier des images
    └── logo-225-new.png
```

## 🔧 Configuration

### Fichiers modifiés

- `inscription-supabase.html` : Nouvelle version avec Supabase
- `admin-supabase.html` : Nouvelle version avec Supabase

### Fichiers originaux

- `inscription-old.html` : Sauvegarde de l'ancienne version
- `admin-old.html` : Sauvegarde de l'ancienne version

## 📖 Documentation

| Document | Description |
|----------|-------------|
| `DEPLOIEMENT_RAPIDE.md` | **À lire en premier** - Guide en 5 étapes |
| `GUIDE_SUPABASE.md` | Guide détaillé avec toutes les étapes |
| `MODIFICATIONS.md` | Résumé des changements techniques |

## 🌐 Déploiement

### Netlify (Recommandé)

1. Allez sur [netlify.com](https://netlify.com/)
2. Cliquez sur "Deploy manually"
3. Glissez-déposez vos fichiers
4. Votre site est en ligne ! 🎉

### Vercel

1. Allez sur [vercel.com](https://vercel.com/)
2. Importez votre projet
3. Cliquez sur "Deploy"
4. Votre site est en ligne ! 🎉

### Avec domaine personnalisé

Après le déploiement, vous pouvez ajouter votre domaine (ex: `225esport.ci`) en pointant les DNS vers votre hébergeur.

## 🔐 Sécurité

- ✓ Les clés API sont publiques (c'est normal, elles ne permettent que de lire/écrire)
- ✓ Les données sont chiffrées chez Supabase
- ✓ Vous avez le contrôle total de votre domaine
- ✓ Pas d'accès à vos données personnelles

## 🐛 Dépannage

### Les inscriptions ne s'affichent pas

1. Vérifiez vos clés Supabase dans les fichiers HTML
2. Ouvrez la console du navigateur (F12) et cherchez les erreurs
3. Vérifiez que la table `inscriptions` existe dans Supabase

### Erreur CORS

Allez dans Supabase → Settings → API → CORS et ajoutez votre domaine.

### Les données ne se synchronisent pas

1. Attendez 10 secondes (délai d'actualisation)
2. Actualisez la page (F5)
3. Vérifiez que vous utilisez le même projet Supabase

## 📞 Support

- Documentation Supabase : [supabase.com/docs](https://supabase.com/docs)
- Support Netlify : [netlify.com/support](https://netlify.com/support)
- Support Vercel : [vercel.com/support](https://vercel.com/support)

## 📝 Licence

MIT License - Vous êtes libre d'utiliser ce code comme vous le souhaitez.

## 🎯 Prochaines étapes

1. ✓ Lire `DEPLOIEMENT_RAPIDE.md`
2. ✓ Créer un compte Supabase
3. ✓ Configurer la base de données
4. ✓ Mettre à jour les clés API
5. ✓ Déployer en ligne
6. ✓ Ajouter votre domaine
7. ✓ Promouvoir auprès de votre communauté !

---

**Merci d'utiliser 225 E-SPORTS LEAGUE ! 🚀**

Version 2.0 - Juin 2026
