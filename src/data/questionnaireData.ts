import { SondageDroitFormData } from "@/types/questionnaire";

export const defaultSondageData: SondageDroitFormData = {
  droitsDebut: "",
  loiSociete: "",
  protectionEgale: "",
  importanceConnaissance: "",
  protectionTorture: "",
  congeMaladie: "",
  licenciementSansMotif: "",
  responsabiliteEmployeur: "",
  conservationDonnees: "",
  bailleurExpulsion: "",
  refusContrat: "",
  augmentationLoyer: "",
  saisiBiens: "",
  ageResponsabilite: "",
  droitsContreEtat: "",
  differendContact: "",
  justiceGratuite: "",
  delaiAction: "",
  aideJuridictionnelle: "",
  cyberharcelement: "",
  resolutionAmiable: "",
  methodesResolution: [],
  langageComplique: "",
  contactJuriste: "",
  simplifierDroits: "",
  prioriteApprentissage: "",
  matiereObligatoire: "",
};

export const importanceConnaissanceOptions = [
  "Uniquement quand j'ai un problème",
  "C'est utile tous les jours",
  "Je ne sais pas",
];

export const conservationDonneesOptions = ["1 an", "5 ans", "10 ans", "Je ne sais pas"];

export const differendContactOptions = ["Avocat", "Huissier", "Notaire", "Police", "Je ne sais pas"];

export const methodesResolutionOptions = ["Médiation", "Conciliation", "Arbitrage"];
