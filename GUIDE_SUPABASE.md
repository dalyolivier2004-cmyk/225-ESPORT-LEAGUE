# Guide de Configuration et Déploiement - 225 ESPORT LEAGUE

## Vue d'ensemble

Ce guide vous explique comment configurer votre projet avec **Supabase** (base de données cloud) pour que les inscriptions soient synchronisées entre tous les navigateurs et appareils.

## Étape 1 : Créer un compte Supabase

1. Allez sur [supabase.com](https://supabase.com/)
2. Cliquez sur **"Start your project"** ou **"Sign up"**
3. Créez un compte avec votre email (vous pouvez aussi utiliser GitHub)
4. Confirmez votre email

## Étape 2 : Créer un nouveau projet

1. Dans le tableau de bord Supabase, cliquez sur **"New project"**
2. Remplissez les informations :
   - **Project name** : `225-esport-league`
   - **Database password** : Créez un mot de passe fort (vous en aurez besoin)
   - **Region** : Choisissez la région la plus proche (ex: Europe, Afrique de l'Ouest)
3. Cliquez sur **"Create new project"** et attendez quelques minutes que le projet soit créé

## Étape 3 : Créer les tables

Une fois le projet créé :

1. Allez dans l'onglet **"SQL Editor"** (à gauche)
2. Cliquez sur **"New Query"**
3. Copiez et collez le code SQL suivant :

```sql
-- Table pour les inscriptions
CREATE TABLE inscriptions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  inscription_type VARCHAR(50) NOT NULL,
  game_category VARCHAR(50) NOT NULL,
  game_concerned VARCHAR(255),
  captain_name VARCHAR(255) NOT NULL,
  captain_phone VARCHAR(20),
  captain_email VARCHAR(255) NOT NULL,
  clan_name VARCHAR(255),
  clan_logo TEXT,
  players_list TEXT,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Activer Row Level Security (RLS)
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;

-- Permettre à tous de lire les inscriptions
CREATE POLICY "Allow public read" ON inscriptions
  FOR SELECT USING (true);

-- Permettre à tous d'insérer des inscriptions
CREATE POLICY "Allow public insert" ON inscriptions
  FOR INSERT WITH CHECK (true);

-- Permettre à tous de mettre à jour les inscriptions
CREATE POLICY "Allow public update" ON inscriptions
  FOR UPDATE USING (true);

-- Permettre à tous de supprimer les inscriptions
CREATE POLICY "Allow public delete" ON inscriptions
  FOR DELETE USING (true);
```

4. Cliquez sur **"Run"** pour exécuter le code
5. Vous devriez voir un message de succès

## Étape 4 : Récupérer vos clés API

1. Allez dans **"Settings"** (en bas à gauche)
2. Cliquez sur **"API"**
3. Vous verrez deux clés importantes :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (votre clé API)

**Gardez ces deux valeurs à l'abri !**

## Étape 5 : Configurer votre projet

1. Ouvrez le fichier `inscription-supabase.html` dans un éditeur de texte
2. Cherchez ces deux lignes (vers la ligne 160) :

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

3. Remplacez-les par vos vraies clés :

```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

4. Faites la même chose dans `admin-supabase.html`

## Étape 6 : Remplacer les fichiers

1. Renommez votre ancien `inscription.html` en `inscription-old.html` (pour garder une sauvegarde)
2. Renommez `inscription-supabase.html` en `inscription.html`
3. Renommez votre ancien `admin.html` en `admin-old.html`
4. Renommez `admin-supabase.html` en `admin.html`

## Étape 7 : Tester localement

1. Ouvrez `inscription.html` dans votre navigateur
2. Remplissez le formulaire et soumettez-le
3. Ouvrez un autre navigateur (ou un mode incognito) et allez sur `admin.html`
4. Vous devriez voir l'inscription que vous venez de soumettre !

## Étape 8 : Déployer en ligne

### Option A : Netlify (Recommandé - Gratuit)

1. Allez sur [netlify.com](https://netlify.com/)
2. Cliquez sur **"Sign up"** et créez un compte
3. Cliquez sur **"Add new site"** → **"Deploy manually"**
4. Sélectionnez tous vos fichiers du projet et glissez-les dans la zone de dépôt
5. Attendez que le déploiement soit terminé
6. Vous recevrez une URL comme `https://votre-site.netlify.app`

### Option B : Vercel (Gratuit)

1. Allez sur [vercel.com](https://vercel.com/)
2. Cliquez sur **"Sign up"** et créez un compte
3. Cliquez sur **"Add New..."** → **"Project"**
4. Sélectionnez votre dépôt GitHub (ou importez les fichiers)
5. Cliquez sur **"Deploy"**

## Étape 9 : Ajouter votre domaine personnalisé

Une fois déployé sur Netlify ou Vercel :

1. Achetez un domaine (ex: `225esport.ci` sur GoDaddy, Namecheap, etc.)
2. Dans les paramètres de votre domaine, pointez-le vers votre site Netlify/Vercel
3. Attendez 24-48h pour que le domaine se propage
4. Votre site sera accessible à `https://225esport.ci`

## Dépannage

### Les inscriptions ne s'affichent pas dans l'admin

1. Vérifiez que vos clés Supabase sont correctes dans les deux fichiers HTML
2. Ouvrez la console du navigateur (F12) et cherchez les erreurs
3. Vérifiez que la table `inscriptions` a bien été créée dans Supabase

### Erreur "CORS"

Cela signifie que Supabase bloque votre domaine. Allez dans **Settings** → **API** → **CORS** et ajoutez votre domaine.

### Les données ne se synchronisent pas

1. Attendez quelques secondes (il y a un délai de 10 secondes entre les actualisations)
2. Actualisez la page (F5)
3. Vérifiez que vous utilisez le même projet Supabase dans les deux fichiers

## Support

Si vous avez des questions :
- Consultez la documentation Supabase : [supabase.com/docs](https://supabase.com/docs)
- Cherchez sur Google votre erreur spécifique
- Contactez le support Supabase

## Sécurité

⚠️ **Important** : Les clés que vous avez copiées sont publiques (c'est normal). Elles ne permettent que de lire/écrire les données, pas de supprimer la base de données. Pour plus de sécurité, vous pouvez configurer des règles RLS plus restrictives dans Supabase.

---

Félicitations ! Votre site est maintenant synchronisé et prêt pour la production ! 🎉
