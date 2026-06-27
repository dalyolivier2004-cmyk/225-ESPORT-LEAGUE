// Configuration Supabase pour la synchronisation des données
// Cette configuration utilise une instance Supabase publique pour démonstration
// À remplacer par vos propres clés lors du déploiement

const SUPABASE_URL = 'https://sslmkcazyopctxqgaxna.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZlJ9t8lUypVEO7slt2r4xw_G89CiLb-';

// Initialisation du client Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fonctions utilitaires pour la gestion des inscriptions
const SupabaseManager = {
  // Sauvegarder une inscription
  async saveInscription(formData) {
    try {
      const { data, error } = await supabaseClient
        .from('inscriptions')
        .insert([{
          inscription_type: formData.inscriptionType,
          game_category: formData.gameCategory,
          game_concerned: formData.gameConcerned,
          captain_name: formData.captainName,
          captain_phone: formData.captainPhone,
          captain_email: formData.captainEmail,
          clan_name: formData.clanName,
          clan_logo: formData.clanLogo,
          players_list: formData.playersList,
          message: formData.message,
          status: formData.status || 'pending',
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      return { success: false, error: error.message };
    }
  },

  // Récupérer toutes les inscriptions
  async getInscriptions() {
    try {
      const { data, error } = await supabaseClient
        .from('inscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      return { success: false, error: error.message };
    }
  },

  // Supprimer une inscription
  async deleteInscription(id) {
    try {
      const { error } = await supabaseClient
        .from('inscriptions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      return { success: false, error: error.message };
    }
  },

  // Mettre à jour le statut d'une inscription
  async updateInscriptionStatus(id, status) {
    try {
      const { error } = await supabaseClient
        .from('inscriptions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      return { success: false, error: error.message };
    }
  },

  // Écouter les changements en temps réel
  subscribeToInscriptions(callback) {
    return supabaseClient
      .from('inscriptions')
      .on('*', payload => {
        callback(payload);
      })
      .subscribe();
  }
};
