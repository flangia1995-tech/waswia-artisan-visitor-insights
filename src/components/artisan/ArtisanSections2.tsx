import { ArtisanFormData } from "@/types/questionnaire";
import { artisanOptions } from "@/data/questionnaireData";
import {
  QuestionGroup,
  RadioOption,
  CheckboxOption,
  TextInput,
} from "@/components/form/FormInputs";
import { SectionHeader } from "@/components/form/FormNavigation";

interface SectionProps {
  data: ArtisanFormData;
  updateData: (updates: Partial<ArtisanFormData>) => void;
}

// Section E: Qualité, design et différenciation
export const SectionE = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="E"
        title="Qualité, design et différenciation"
        description="Qu'est-ce qui vous distingue ?"
      />

      <QuestionGroup
        label="Vos forces (choisir 3 max)"
        required
        maxSelections={3}
        currentSelections={data.forces.length}
      >
        {artisanOptions.forces.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.forces.includes(option)}
            maxReached={data.forces.length >= 3}
            onToggle={(v) => {
              const newForces = data.forces.includes(v)
                ? data.forces.filter((f) => f !== v)
                : [...data.forces, v];
              updateData({ forces: newForces });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup
        label="Vos difficultés (choisir 3 max)"
        required
        maxSelections={3}
        currentSelections={data.difficultes.length}
      >
        {artisanOptions.difficultes.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.difficultes.includes(option)}
            maxReached={data.difficultes.length >= 3}
            onToggle={(v) => {
              const newDiff = data.difficultes.includes(v)
                ? data.difficultes.filter((d) => d !== v)
                : [...data.difficultes, v];
              updateData({ difficultes: newDiff });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Avez-vous déjà collaboré avec un designer / styliste / graphiste ?" required>
        {artisanOptions.collaboration_designer.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.collaboration_designer === option}
            onSelect={(v) => updateData({ collaboration_designer: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Souhaitez-vous développer">
        {artisanOptions.developpement_souhaite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.developpement_souhaite.includes(option)}
            onToggle={(v) => {
              const newDev = data.developpement_souhaite.includes(v)
                ? data.developpement_souhaite.filter((d) => d !== v)
                : [...data.developpement_souhaite, v];
              updateData({ developpement_souhaite: newDev });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section F: Numérique, marketing et visibilité
export const SectionF = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="F"
        title="Numérique, marketing et visibilité"
        description="Votre présence en ligne"
      />

      <QuestionGroup label="Présence en ligne" required>
        {artisanOptions.presence_en_ligne.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.presence_en_ligne.includes(option)}
            onToggle={(v) => {
              const newPresence = data.presence_en_ligne.includes(v)
                ? data.presence_en_ligne.filter((p) => p !== v)
                : [...data.presence_en_ligne, v];
              updateData({ presence_en_ligne: newPresence });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vous recevez des commandes en ligne ?" required>
        {artisanOptions.commandes_en_ligne.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.commandes_en_ligne === option}
            onSelect={(v) => updateData({ commandes_en_ligne: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vos principaux freins au digital">
        {artisanOptions.freins_digital.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.freins_digital.includes(option)}
            onToggle={(v) => {
              const newFreins = data.freins_digital.includes(v)
                ? data.freins_digital.filter((f) => f !== v)
                : [...data.freins_digital, v];
              updateData({ freins_digital: newFreins });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vous seriez prêt à apprendre">
        {artisanOptions.apprentissage_souhaite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.apprentissage_souhaite.includes(option)}
            onToggle={(v) => {
              const newApp = data.apprentissage_souhaite.includes(v)
                ? data.apprentissage_souhaite.filter((a) => a !== v)
                : [...data.apprentissage_souhaite, v];
              updateData({ apprentissage_souhaite: newApp });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section G: Logistique, paiement, formalisation
export const SectionG = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="G"
        title="Logistique, paiement, formalisation"
        description="Organisation de votre activité"
      />

      <QuestionGroup label="Livraison" required>
        {artisanOptions.livraison.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.livraison.includes(option)}
            onToggle={(v) => {
              const newLivraison = data.livraison.includes(v)
                ? data.livraison.filter((l) => l !== v)
                : [...data.livraison, v];
              updateData({ livraison: newLivraison });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Paiements acceptés" required>
        {artisanOptions.paiements_acceptes.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.paiements_acceptes.includes(option)}
            onToggle={(v) => {
              const newPaiements = data.paiements_acceptes.includes(v)
                ? data.paiements_acceptes.filter((p) => p !== v)
                : [...data.paiements_acceptes, v];
              updateData({ paiements_acceptes: newPaiements });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Vous êtes formalisé ?" required>
        {artisanOptions.formalise.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.formalise === option}
            onSelect={(v) => updateData({ formalise: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Propriété intellectuelle / marque" required>
        {artisanOptions.propriete_intellectuelle.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.propriete_intellectuelle === option}
            onSelect={(v) => updateData({ propriete_intellectuelle: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Avez-vous déjà eu un problème de copie / imitation ?" required>
        {artisanOptions.probleme_copie.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.probleme_copie === option}
            onSelect={(v) => updateData({ probleme_copie: v })}
          />
        ))}
        {data.probleme_copie === "Oui" && (
          <TextInput
            label="Si oui, précisez"
            value={data.probleme_copie_detail || ""}
            onChange={(v) => updateData({ probleme_copie_detail: v })}
            placeholder="Que s'est-il passé ?"
            multiline
          />
        )}
      </QuestionGroup>
    </div>
  );
};

// Section H: Financement et investissement
export const SectionH = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="H"
        title="Financement et investissement"
        description="Vos besoins financiers"
      />

      <QuestionGroup label="Avez-vous déjà obtenu un financement ?" required>
        {artisanOptions.financement_obtenu.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.financement_obtenu === option}
            onSelect={(v) => updateData({ financement_obtenu: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Besoin actuel">
        {artisanOptions.besoin_actuel.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.besoin_actuel.includes(option)}
            onToggle={(v) => {
              const newBesoins = data.besoin_actuel.includes(v)
                ? data.besoin_actuel.filter((b) => b !== v)
                : [...data.besoin_actuel, v];
              updateData({ besoin_actuel: newBesoins });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Montant utile (ordre de grandeur)" required>
        {artisanOptions.montant_utile.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.montant_utile === option}
            onSelect={(v) => updateData({ montant_utile: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Ouverture au crowdfunding / précommandes" required>
        {artisanOptions.ouverture_crowdfunding.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.ouverture_crowdfunding === option}
            onSelect={(v) => updateData({ ouverture_crowdfunding: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Freins au financement">
        {artisanOptions.freins_financement.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.freins_financement.includes(option)}
            onToggle={(v) => {
              const newFreins = data.freins_financement.includes(v)
                ? data.freins_financement.filter((f) => f !== v)
                : [...data.freins_financement, v];
              updateData({ freins_financement: newFreins });
            }}
          />
        ))}
        {data.freins_financement.includes("Autre") && (
          <TextInput
            label="Précisez"
            value={data.freins_financement_autre || ""}
            onChange={(v) => updateData({ freins_financement_autre: v })}
            placeholder="Autre frein..."
          />
        )}
      </QuestionGroup>
    </div>
  );
};

// Section I: Besoins d'accompagnement
export const SectionI = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="I"
        title="Besoins d'accompagnement (incubation)"
        description="Comment pouvons-nous vous aider ?"
      />

      <QuestionGroup
        label="Priorités d'accompagnement (choisir 5 max)"
        required
        maxSelections={5}
        currentSelections={data.priorites_accompagnement.length}
      >
        {artisanOptions.priorites_accompagnement.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.priorites_accompagnement.includes(option)}
            maxReached={data.priorites_accompagnement.length >= 5}
            onToggle={(v) => {
              const newPriorites = data.priorites_accompagnement.includes(v)
                ? data.priorites_accompagnement.filter((p) => p !== v)
                : [...data.priorites_accompagnement, v];
              updateData({ priorites_accompagnement: newPriorites });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Format préféré" required>
        {artisanOptions.format_prefere.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.format_prefere.includes(option)}
            onToggle={(v) => {
              const newFormats = data.format_prefere.includes(v)
                ? data.format_prefere.filter((f) => f !== v)
                : [...data.format_prefere, v];
              updateData({ format_prefere: newFormats });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Disponibilité" required>
        {artisanOptions.disponibilite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.disponibilite.includes(option)}
            onToggle={(v) => {
              const newDispo = data.disponibilite.includes(v)
                ? data.disponibilite.filter((d) => d !== v)
                : [...data.disponibilite, v];
              updateData({ disponibilite: newDispo });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Capacité à contribuer financièrement au programme" required>
        {artisanOptions.contribution_financiere.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.contribution_financiere === option}
            onSelect={(v) => updateData({ contribution_financiere: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup
        label="Critère de réussite pour vous (3 indicateurs)"
        required
        maxSelections={3}
        currentSelections={data.criteres_reussite.length}
      >
        {artisanOptions.criteres_reussite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.criteres_reussite.includes(option)}
            maxReached={data.criteres_reussite.length >= 3}
            onToggle={(v) => {
              const newCriteres = data.criteres_reussite.includes(v)
                ? data.criteres_reussite.filter((c) => c !== v)
                : [...data.criteres_reussite, v];
              updateData({ criteres_reussite: newCriteres });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section J: Contact
export const SectionJ = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="J"
        title="Contact (optionnel)"
        description="Restez en contact avec nous"
      />

      <TextInput
        label="Nom / Tel / WhatsApp / Instagram (facultatif)"
        value={data.contact_info || ""}
        onChange={(v) => updateData({ contact_info: v })}
        placeholder="Vos coordonnées..."
        multiline
      />

      <QuestionGroup label="Acceptez-vous d'être recontacté ?" required>
        {artisanOptions.accepte_recontact.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.accepte_recontact === option}
            onSelect={(v) => updateData({ accepte_recontact: v })}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};
