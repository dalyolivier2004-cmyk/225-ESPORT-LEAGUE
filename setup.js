#!/usr/bin/env node

/**
 * Script de configuration automatique pour 225 ESPORT LEAGUE
 * Ce script aide à configurer les clés Supabase automatiquement
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n🚀 Configuration de 225 ESPORT LEAGUE\n');
  console.log('Ce script va vous aider à configurer vos clés Supabase.\n');

  const supabaseUrl = await question('Entrez votre Project URL Supabase (https://xxxxx.supabase.co): ');
  const supabaseKey = await question('Entrez votre anon public key: ');

  if (!supabaseUrl || !supabaseKey) {
    console.log('\n❌ Erreur: Les clés ne peuvent pas être vides.');
    rl.close();
    process.exit(1);
  }

  // Mettre à jour inscription-supabase.html
  let inscriptionContent = fs.readFileSync(path.join(__dirname, 'inscription-supabase.html'), 'utf8');
  inscriptionContent = inscriptionContent.replace(
    "const SUPABASE_URL = 'https://your-project.supabase.co';",
    `const SUPABASE_URL = '${supabaseUrl}';`
  );
  inscriptionContent = inscriptionContent.replace(
    "const SUPABASE_ANON_KEY = 'your-anon-key';",
    `const SUPABASE_ANON_KEY = '${supabaseKey}';`
  );
  fs.writeFileSync(path.join(__dirname, 'inscription-supabase.html'), inscriptionContent);

  // Mettre à jour admin-supabase.html
  let adminContent = fs.readFileSync(path.join(__dirname, 'admin-supabase.html'), 'utf8');
  adminContent = adminContent.replace(
    "const SUPABASE_URL = 'https://your-project.supabase.co';",
    `const SUPABASE_URL = '${supabaseUrl}';`
  );
  adminContent = adminContent.replace(
    "const SUPABASE_ANON_KEY = 'your-anon-key';",
    `const SUPABASE_ANON_KEY = '${supabaseKey}';`
  );
  fs.writeFileSync(path.join(__dirname, 'admin-supabase.html'), adminContent);

  console.log('\n✓ Configuration mise à jour avec succès!\n');
  console.log('Prochaines étapes:');
  console.log('1. Renommez inscription-supabase.html en inscription.html');
  console.log('2. Renommez admin-supabase.html en admin.html');
  console.log('3. Testez votre site localement');
  console.log('4. Déployez en ligne sur Netlify ou Vercel\n');

  rl.close();
}

main().catch(err => {
  console.error('Erreur:', err);
  rl.close();
  process.exit(1);
});
