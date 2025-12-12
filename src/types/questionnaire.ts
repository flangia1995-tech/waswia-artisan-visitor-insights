// Artisan Questionnaire Types
export interface ArtisanFormData {
  // A. Identification rapide
  ile_ville: string;
  ile_ville_autre?: string;
  sexe: string;
  age: string;
  statut: string;
  statut_autre?: string;
  annees_activite: string;
  travail_mode: string[];
  nb_employes?: number;
  nb_apprentis?: number;

  // B. Secteur, produits et capacité
  domaine_principal: string;
  domaine_principal_autre?: string;
  top_produits: string[];
  capacite_production: string;
  capacite_production_pieces?: number;
  temps_production: string;
  approvisionnement: string;
  approvisionnement_pourquoi?: string;
  equipements: string;
  equipements_besoins?: string;

  // C. Marché, clients et canaux de vente
  clients_principaux: string[];
  canaux_actuels: string[];
  part_ventes_salon?: number;
  part_ventes_whatsapp?: number;
  part_ventes_reseaux?: number;
  part_ventes_boutique?: number;
  part_ventes_autre?: number;
  saisonnalite: string[];
  zone_vente: string[];

  // D. Prix, marge et gestion
  fixation_prix: string;
  fixation_prix_autre?: string;
  connaissance_couts: string;
  marge: string;
  problemes_frequents: string[];
  comptabilite: string;
  comptabilite_pourquoi?: string;

  // E. Qualité, design et différenciation
  forces: string[];
  difficultes: string[];
  collaboration_designer: string;
  developpement_souhaite: string[];

  // F. Numérique, marketing et visibilité
  presence_en_ligne: string[];
  commandes_en_ligne: string;
  freins_digital: string[];
  apprentissage_souhaite: string[];

  // G. Logistique, paiement, formalisation
  livraison: string[];
  paiements_acceptes: string[];
  formalise: string;
  propriete_intellectuelle: string;
  probleme_copie: string;
  probleme_copie_detail?: string;

  // H. Financement et investissement
  financement_obtenu: string;
  besoin_actuel: string[];
  montant_utile: string;
  ouverture_crowdfunding: string;
  freins_financement: string[];
  freins_financement_autre?: string;

  // I. Besoins d'accompagnement
  priorites_accompagnement: string[];
  format_prefere: string[];
  disponibilite: string[];
  contribution_financiere: string;
  criteres_reussite: string[];

  // J. Contact
  contact_info?: string;
  accepte_recontact: string;
}

// Visitor Questionnaire Types
export interface VisiteurFormData {
  // A. Profil visiteur
  type_visiteur: string;
  type_visiteur_autre?: string;
  sexe: string;
  age: string;
  ville_ile: string;
  motif_visite: string[];

  // B. Habitudes d'achat
  frequence_achat: string;
  produits_achetes: string[];
  produits_achetes_autre?: string;
  occasions_achat: string[];
  budget_moyen: string;

  // C. Critères d'achat
  criteres_importants: string[];
  freins_achat: string[];
  preference_prix: string;
  paye_plus_cher_si: string[];

  // D. Produits recherchés
  recherche_aujourdhui: string[];
  voir_plus_de: string[];
  interet_personnalisation: string;
  delai_acceptable: string;

  // E. Achat en ligne
  canaux_commande: string[];
  paiement_prefere: string[];
  rassurance_achat_ligne: string[];

  // F. Image de l'artisanat
  mot_evocateur: string;
  note_qualite: number;
  note_design: number;
  note_rapport_qualite_prix: number;
  manque_aujourdhui?: string;
  suggestion_amelioration?: string;

  // G. Contact
  recevoir_catalogue: string;
  contact_info?: string;
}

// Form section configuration
export interface FormSection {
  id: string;
  title: string;
  icon: string;
}

export const artisanSections: FormSection[] = [
  { id: 'A', title: 'Identification', icon: 'User' },
  { id: 'B', title: 'Secteur & Produits', icon: 'Package' },
  { id: 'C', title: 'Marché & Clients', icon: 'Users' },
  { id: 'D', title: 'Prix & Gestion', icon: 'Calculator' },
  { id: 'E', title: 'Qualité & Design', icon: 'Palette' },
  { id: 'F', title: 'Numérique', icon: 'Smartphone' },
  { id: 'G', title: 'Logistique', icon: 'Truck' },
  { id: 'H', title: 'Financement', icon: 'Wallet' },
  { id: 'I', title: 'Accompagnement', icon: 'GraduationCap' },
  { id: 'J', title: 'Contact', icon: 'Phone' },
];

export const visiteurSections: FormSection[] = [
  { id: 'A', title: 'Profil', icon: 'User' },
  { id: 'B', title: 'Habitudes d\'achat', icon: 'ShoppingBag' },
  { id: 'C', title: 'Critères d\'achat', icon: 'CheckCircle' },
  { id: 'D', title: 'Produits recherchés', icon: 'Search' },
  { id: 'E', title: 'Achat en ligne', icon: 'Globe' },
  { id: 'F', title: 'Image artisanat', icon: 'Star' },
  { id: 'G', title: 'Contact', icon: 'Phone' },
];
