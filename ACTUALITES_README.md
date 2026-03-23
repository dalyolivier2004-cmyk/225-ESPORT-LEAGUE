# Guide d'utilisation - Page Actualités

## 📰 Nouvelle page Actualités

Vous avez maintenant une **page d'actualités complète** intégrée à votre site 225 E-SPORTS LEAGUE !

### ✨ Fonctionnalités

#### 1. **Page Actualités Publique** (`actualites.html`)
- Affichage de toutes les actualités publiées
- **Filtrage par catégories** : Toutes, Tournois, Équipes, Événements, Annonces
- **Cartes d'actualités** avec :
  - Image de couverture
  - Catégorie avec emoji
  - Date de publication
  - Titre et résumé
  - Bouton "Lire la suite"
- **Modal détail** : Cliquez sur une actualité pour voir le contenu complet
- Design moderne et responsive

#### 2. **Gestion Admin** (dans `admin.html`)
- Nouvelle section **"Actualités"** dans le menu latéral
- Formulaire pour **ajouter une nouvelle actualité** avec :
  - Titre
  - Catégorie (Tournoi, Équipe, Événement, Annonce)
  - Résumé/Extrait
  - Contenu complet (texte détaillé)
  - Image optionnelle (upload)
- Liste de toutes les actualités publiées
- Possibilité de **supprimer** une actualité

### 🚀 Comment utiliser

#### Publier une Actualité

1. **Accédez à l'admin** : Appuyez sur `Y` puis `M` sur la page d'accueil
2. Entrez le mot de passe : `Relvio`
3. Cliquez sur **"Actualités"** dans le menu latéral
4. Remplissez le formulaire :
   - **Titre** : Le titre de votre actualité
   - **Catégorie** : Choisissez parmi 4 options
   - **Résumé** : Un court texte (affiché dans la grille)
   - **Contenu** : Le texte complet (affiché en détail)
   - **Image** : Optionnel (JPG, PNG, etc.)
5. Cliquez sur **"Publier l'Actualité"**

#### Consulter les Actualités

1. Cliquez sur **"Actualités"** dans la barre de navigation
2. Utilisez les **filtres** pour chercher par catégorie
3. Cliquez sur une actualité pour voir le **contenu complet**

### 📱 Intégration

La page est **entièrement intégrée** à votre site :
- ✅ Lien dans la barre de navigation de toutes les pages
- ✅ Même design et couleurs (orange #ff7700)
- ✅ Animations fluides et responsive
- ✅ Stockage en `localStorage` (pas de serveur nécessaire)

### 🎨 Catégories disponibles

| Catégorie | Emoji | Utilisation |
|-----------|-------|-------------|
| Tournoi | 🏆 | Annonces de tournois, résultats |
| Équipe | 👥 | Infos sur les équipes, recrutement |
| Événement | 🎮 | Événements spéciaux, LAN parties |
| Annonce | 📢 | Annonces générales, mises à jour |

### 💾 Données

- Les actualités sont stockées dans le **localStorage** du navigateur
- Elles persisteront même après fermeture du navigateur
- Pour sauvegarder les données, exportez le localStorage ou utilisez une base de données

### 🔧 Personnalisation

Si vous voulez modifier les couleurs, catégories ou styles :
- Éditez `actualites.html` pour la page publique
- Éditez `admin.html` pour la gestion admin
- Modifiez `modern-design.css` pour les styles globaux

### 📝 Notes

- Les actualités les plus récentes apparaissent en premier
- Les images sont converties en base64 pour le stockage local
- Le filtrage se fait côté client (très rapide)
- Pas de limite de nombre d'actualités

### ❓ Besoin d'aide ?

Pour toute question ou amélioration, consultez les fichiers :
- `actualites.html` - Page publique
- `admin.html` - Gestion administrative
- `modern-design.css` - Styles
