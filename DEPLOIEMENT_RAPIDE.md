# Guide de Déploiement Rapide - 225 ESPORT LEAGUE

## Résumé en 5 étapes

Suivez ce guide pour mettre votre site en ligne en moins de 30 minutes, avec votre propre domaine et sans que personne ne sache qu'il a été créé avec l'IA.

---

## ÉTAPE 1 : Créer un compte Supabase (5 min)

1. Allez sur **[supabase.com](https://supabase.com/)**
2. Cliquez sur **"Start your project"**
3. Inscrivez-vous avec votre email (ou GitHub)
4. Confirmez votre email

---

## ÉTAPE 2 : Configurer la base de données (5 min)

1. Créez un nouveau projet :
   - **Project name** : `225-esport-league`
   - **Database password** : Créez un mot de passe fort
   - **Region** : Choisissez la région la plus proche

2. Attendez que le projet soit créé (2-3 minutes)

3. Allez dans **"SQL Editor"** et créez une nouvelle requête

4. Copiez-collez ce code SQL :

```sql
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

ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON inscriptions FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON inscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON inscriptions FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON inscriptions FOR DELETE USING (true);
```

5. Cliquez sur **"Run"** ✓

---

## ÉTAPE 3 : Récupérer vos clés API (2 min)

1. Allez dans **"Settings"** → **"API"**

2. Copiez ces deux valeurs :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

3. Gardez-les à portée de main

---

## ÉTAPE 4 : Configurer votre site (3 min)

1. Ouvrez **`inscription-supabase.html`** avec un éditeur de texte

2. Trouvez ces lignes (environ à la ligne 160) :
```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

3. Remplacez-les par vos vraies clés :
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

4. **Sauvegardez le fichier**

5. Faites la même chose dans **`admin-supabase.html`**

6. Renommez les fichiers :
   - `inscription-supabase.html` → `inscription.html`
   - `admin-supabase.html` → `admin.html`

---

## ÉTAPE 5 : Déployer en ligne (10 min)

### Option A : Netlify (Recommandé)

1. Allez sur **[netlify.com](https://netlify.com/)**
2. Cliquez sur **"Sign up"** et créez un compte
3. Cliquez sur **"Add new site"** → **"Deploy manually"**
4. **Glissez-déposez tous vos fichiers** du projet dans la zone
5. Attendez le déploiement (1-2 minutes)
6. Vous recevrez une URL comme `https://votre-site-random.netlify.app`

### Option B : Vercel

1. Allez sur **[vercel.com](https://vercel.com/)**
2. Cliquez sur **"Sign up"**
3. Cliquez sur **"Add New Project"**
4. Importez votre dossier de projet
5. Cliquez sur **"Deploy"**
6. Vous recevrez une URL comme `https://225-esport-league.vercel.app`

---

## ÉTAPE 6 : Ajouter votre domaine personnalisé (Optionnel)

### Si vous avez déjà un domaine

1. Achetez un domaine (ex: `225esport.ci`) sur :
   - GoDaddy
   - Namecheap
   - OVH
   - Ou tout autre registraire

2. Dans les paramètres DNS de votre domaine, pointez-le vers :
   - **Netlify** : Allez dans "Site settings" → "Domain management" → "Add domain"
   - **Vercel** : Allez dans "Settings" → "Domains" → "Add domain"

3. Suivez les instructions pour configurer les DNS

4. Attendez 24-48h pour la propagation

### Résultat final

Votre site sera accessible à `https://225esport.ci` (ou votre domaine)

---

## Test de synchronisation

1. Ouvrez `inscription.html` dans **Chrome**
2. Remplissez le formulaire et soumettez
3. Ouvrez `admin.html` dans **Firefox** (ou un autre navigateur)
4. Vous devriez voir l'inscription que vous venez de soumettre ! ✓

---

## Dépannage rapide

| Problème | Solution |
|----------|----------|
| Les inscriptions ne s'affichent pas | Vérifiez vos clés Supabase dans les fichiers HTML |
| Erreur CORS | Allez dans Supabase → Settings → API → CORS et ajoutez votre domaine |
| Les données ne se synchronisent pas | Attendez 10 secondes et actualisez la page |
| Le site ne se charge pas | Vérifiez que tous les fichiers ont bien été uploadés |

---

## Sécurité et confidentialité

✓ Votre code source est sur votre serveur (Netlify/Vercel)
✓ Personne ne verra que c'est fait avec l'IA
✓ Les données sont chiffrées chez Supabase
✓ Vous avez le contrôle total de votre domaine

---

## Prochaines étapes

1. ✓ Configurer Supabase
2. ✓ Configurer votre site
3. ✓ Déployer en ligne
4. ✓ Ajouter votre domaine
5. Promouvoir votre site auprès de votre communauté esport !

---

**Besoin d'aide ?**
- Consultez `GUIDE_SUPABASE.md` pour plus de détails
- Vérifiez la console du navigateur (F12) pour les erreurs
- Contactez le support Supabase

**Bon déploiement ! 🚀**
