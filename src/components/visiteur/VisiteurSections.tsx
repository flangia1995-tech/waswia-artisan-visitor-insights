import { VisiteurFormData } from "@/types/questionnaire";
import { visiteurOptions } from "@/data/questionnaireData";
import {
  QuestionGroup,
  RadioOption,
  CheckboxOption,
  TextInput,
  RatingInput,
} from "@/components/form/FormInputs";
import { SectionHeader } from "@/components/form/FormNavigation";

interface SectionProps {
  data: VisiteurFormData;
  updateData: (updates: Partial<VisiteurFormData>) => void;
}

// Section A: Profil visiteur
export const VisiteurSectionA = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="A"
        title="Profil visiteur"
        description="Présentez-vous"
      />

      <QuestionGroup label="Vous êtes" required>
        {visiteurOptions.type_visiteur.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.type_visiteur === option}
            onSelect={(v) => updateData({ type_visiteur: v })}
          />
        ))}
        {data.type_visiteur === "Autre" && (
          <TextInput
            label="Précisez"
            value={data.type_visiteur_autre || ""}
            onChange={(v) => updateData({ type_visiteur_autre: v })}
            placeholder="Votre profil..."
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Sexe" required>
        <div className="grid grid-cols-3 gap-2">
          {visiteurOptions.sexe.map((option) => (
            <RadioOption
              key={option}
              value={option}
              label={option}
              selected={data.sexe === option}
              onSelect={(v) => updateData({ sexe: v })}
            />
          ))}
        </div>
      </QuestionGroup>

      <QuestionGroup label="Âge" required>
        <div className="grid grid-cols-3 gap-2">
          {visiteurOptions.age.map((option) => (
            <RadioOption
              key={option}
              value={option}
              label={option}
              selected={data.age === option}
              onSelect={(v) => updateData({ age: v })}
            />
          ))}
        </div>
      </QuestionGroup>

      <TextInput
        label="Ville / Île"
        value={data.ville_ile}
        onChange={(v) => updateData({ ville_ile: v })}
        placeholder="Votre ville ou île..."
        required
      />

      <QuestionGroup label="Motif de visite au salon" required>
        {visiteurOptions.motif_visite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.motif_visite.includes(option)}
            onToggle={(v) => {
              const newMotifs = data.motif_visite.includes(v)
                ? data.motif_visite.filter((m) => m !== v)
                : [...data.motif_visite, v];
              updateData({ motif_visite: newMotifs });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section B: Habitudes d'achat
export const VisiteurSectionB = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="B"
        title="Habitudes d'achat d'artisanat"
        description="Vos habitudes de consommation"
      />

      <QuestionGroup label="Achetez-vous de l'artisanat local habituellement ?" required>
        {visiteurOptions.frequence_achat.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.frequence_achat === option}
            onSelect={(v) => updateData({ frequence_achat: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup
        label="Qu'achetez-vous le plus ? (max 3)"
        required
        maxSelections={3}
        currentSelections={data.produits_achetes.length}
      >
        {visiteurOptions.produits_achetes.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.produits_achetes.includes(option)}
            maxReached={data.produits_achetes.length >= 3}
            onToggle={(v) => {
              const newProduits = data.produits_achetes.includes(v)
                ? data.produits_achetes.filter((p) => p !== v)
                : [...data.produits_achetes, v];
              updateData({ produits_achetes: newProduits });
            }}
          />
        ))}
        {data.produits_achetes.includes("Autre") && (
          <TextInput
            label="Précisez"
            value={data.produits_achetes_autre || ""}
            onChange={(v) => updateData({ produits_achetes_autre: v })}
            placeholder="Autres produits..."
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Occasions d'achat" required>
        {visiteurOptions.occasions_achat.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.occasions_achat.includes(option)}
            onToggle={(v) => {
              const newOccasions = data.occasions_achat.includes(v)
                ? data.occasions_achat.filter((o) => o !== v)
                : [...data.occasions_achat, v];
              updateData({ occasions_achat: newOccasions });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Votre budget moyen par achat" required>
        {visiteurOptions.budget_moyen.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.budget_moyen === option}
            onSelect={(v) => updateData({ budget_moyen: v })}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section C: Critères d'achat
export const VisiteurSectionC = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="C"
        title="Ce qui vous fait acheter (ou pas)"
        description="Vos critères de choix"
      />

      <QuestionGroup
        label="Critères les plus importants (choisir 5 max)"
        required
        maxSelections={5}
        currentSelections={data.criteres_importants.length}
      >
        {visiteurOptions.criteres_importants.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.criteres_importants.includes(option)}
            maxReached={data.criteres_importants.length >= 5}
            onToggle={(v) => {
              const newCriteres = data.criteres_importants.includes(v)
                ? data.criteres_importants.filter((c) => c !== v)
                : [...data.criteres_importants, v];
              updateData({ criteres_importants: newCriteres });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup
        label="Qu'est-ce qui vous freine le plus ? (max 3)"
        required
        maxSelections={3}
        currentSelections={data.freins_achat.length}
      >
        {visiteurOptions.freins_achat.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.freins_achat.includes(option)}
            maxReached={data.freins_achat.length >= 3}
            onToggle={(v) => {
              const newFreins = data.freins_achat.includes(v)
                ? data.freins_achat.filter((f) => f !== v)
                : [...data.freins_achat, v];
              updateData({ freins_achat: newFreins });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Sur le prix, vous préférez" required>
        {visiteurOptions.preference_prix.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.preference_prix === option}
            onSelect={(v) => updateData({ preference_prix: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vous payez volontiers plus cher si">
        {visiteurOptions.paye_plus_cher_si.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.paye_plus_cher_si.includes(option)}
            onToggle={(v) => {
              const newPaye = data.paye_plus_cher_si.includes(v)
                ? data.paye_plus_cher_si.filter((p) => p !== v)
                : [...data.paye_plus_cher_si, v];
              updateData({ paye_plus_cher_si: newPaye });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section D: Produits recherchés
export const VisiteurSectionD = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="D"
        title="Produits recherchés et attentes"
        description="Ce que vous cherchez"
      />

      <QuestionGroup label="Aujourd'hui, vous cherchez plutôt" required>
        {visiteurOptions.recherche_aujourdhui.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.recherche_aujourdhui.includes(option)}
            onToggle={(v) => {
              const newRecherche = data.recherche_aujourdhui.includes(v)
                ? data.recherche_aujourdhui.filter((r) => r !== v)
                : [...data.recherche_aujourdhui, v];
              updateData({ recherche_aujourdhui: newRecherche });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vous aimeriez voir plus de" required>
        {visiteurOptions.voir_plus_de.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.voir_plus_de.includes(option)}
            onToggle={(v) => {
              const newVoir = data.voir_plus_de.includes(v)
                ? data.voir_plus_de.filter((p) => p !== v)
                : [...data.voir_plus_de, v];
              updateData({ voir_plus_de: newVoir });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Intérêt pour personnalisation (nom, couleurs, tailles, motifs)" required>
        {visiteurOptions.interet_personnalisation.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.interet_personnalisation === option}
            onSelect={(v) => updateData({ interet_personnalisation: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Délai acceptable pour une commande personnalisée" required>
        {visiteurOptions.delai_acceptable.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.delai_acceptable === option}
            onSelect={(v) => updateData({ delai_acceptable: v })}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section E: Achat en ligne
export const VisiteurSectionE = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="E"
        title="Achat en ligne et service"
        description="Vos préférences digitales"
      />

      <QuestionGroup label="Seriez-vous prêt à commander après le salon via" required>
        {visiteurOptions.canaux_commande.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.canaux_commande.includes(option)}
            onToggle={(v) => {
              const newCanaux = data.canaux_commande.includes(v)
                ? data.canaux_commande.filter((c) => c !== v)
                : [...data.canaux_commande, v];
              updateData({ canaux_commande: newCanaux });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Paiement que vous préférez" required>
        {visiteurOptions.paiement_prefere.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.paiement_prefere.includes(option)}
            onToggle={(v) => {
              const newPaiement = data.paiement_prefere.includes(v)
                ? data.paiement_prefere.filter((p) => p !== v)
                : [...data.paiement_prefere, v];
              updateData({ paiement_prefere: newPaiement });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Ce qui vous rassure pour acheter en ligne" required>
        {visiteurOptions.rassurance_achat_ligne.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.rassurance_achat_ligne.includes(option)}
            onToggle={(v) => {
              const newRassurance = data.rassurance_achat_ligne.includes(v)
                ? data.rassurance_achat_ligne.filter((r) => r !== v)
                : [...data.rassurance_achat_ligne, v];
              updateData({ rassurance_achat_ligne: newRassurance });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section F: Image de l'artisanat
export const VisiteurSectionF = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="F"
        title="Image de l'artisanat comorien"
        description="Votre perception"
      />

      <TextInput
        label="En 1 mot, l'artisanat comorien vous évoque"
        value={data.mot_evocateur}
        onChange={(v) => updateData({ mot_evocateur: v })}
        placeholder="Un seul mot..."
        required
      />

      <RatingInput
        label="Note globale - Qualité (1 à 5)"
        value={data.note_qualite}
        onChange={(v) => updateData({ note_qualite: v })}
        required
      />

      <RatingInput
        label="Note globale - Design / modernité (1 à 5)"
        value={data.note_design}
        onChange={(v) => updateData({ note_design: v })}
        required
      />

      <RatingInput
        label="Note globale - Rapport qualité / prix (1 à 5)"
        value={data.note_rapport_qualite_prix}
        onChange={(v) => updateData({ note_rapport_qualite_prix: v })}
        required
      />

      <TextInput
        label="Qu'est-ce qui manque le plus aujourd'hui ?"
        value={data.manque_aujourdhui || ""}
        onChange={(v) => updateData({ manque_aujourdhui: v })}
        placeholder="Votre avis..."
        multiline
      />

      <TextInput
        label="Votre suggestion n°1 pour améliorer l'offre"
        value={data.suggestion_amelioration || ""}
        onChange={(v) => updateData({ suggestion_amelioration: v })}
        placeholder="Votre suggestion..."
        multiline
      />
    </div>
  );
};

// Section G: Contact
export const VisiteurSectionG = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="G"
        title="Contact (optionnel)"
        description="Restez informé"
      />

      <QuestionGroup label="Voulez-vous recevoir un catalogue / actus artisans ?" required>
        {visiteurOptions.recevoir_catalogue.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.recevoir_catalogue === option}
            onSelect={(v) => updateData({ recevoir_catalogue: v })}
          />
        ))}
      </QuestionGroup>

      {data.recevoir_catalogue === "Oui" && (
        <TextInput
          label="Tel / WhatsApp ou email"
          value={data.contact_info || ""}
          onChange={(v) => updateData({ contact_info: v })}
          placeholder="Vos coordonnées..."
        />
      )}
    </div>
  );
};
