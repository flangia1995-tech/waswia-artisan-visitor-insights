import { ArtisanFormData } from "@/types/questionnaire";
import { artisanOptions } from "@/data/questionnaireData";
import {
  QuestionGroup,
  RadioOption,
  CheckboxOption,
  TextInput,
  NumberInput,
} from "@/components/form/FormInputs";
import { SectionHeader } from "@/components/form/FormNavigation";

interface SectionProps {
  data: ArtisanFormData;
  updateData: (updates: Partial<ArtisanFormData>) => void;
}

// Section A: Identification
export const SectionA = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="A"
        title="Identification rapide"
        description="Quelques informations pour mieux vous connaître"
      />

      <QuestionGroup label="Île / Ville" required>
        {artisanOptions.ile_ville.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.ile_ville === option}
            onSelect={(v) => updateData({ ile_ville: v })}
          />
        ))}
        {data.ile_ville === "Autre" && (
          <TextInput
            label="Précisez"
            value={data.ile_ville_autre || ""}
            onChange={(v) => updateData({ ile_ville_autre: v })}
            placeholder="Votre île ou ville..."
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Sexe" required>
        <div className="grid grid-cols-3 gap-2">
          {artisanOptions.sexe.map((option) => (
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
          {artisanOptions.age.map((option) => (
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

      <QuestionGroup label="Statut" required>
        {artisanOptions.statut.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.statut === option}
            onSelect={(v) => updateData({ statut: v })}
          />
        ))}
        {data.statut === "Autre" && (
          <TextInput
            label="Précisez"
            value={data.statut_autre || ""}
            onChange={(v) => updateData({ statut_autre: v })}
            placeholder="Votre statut..."
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Années d'activité" required>
        <div className="grid grid-cols-3 gap-2">
          {artisanOptions.annees_activite.map((option) => (
            <RadioOption
              key={option}
              value={option}
              label={option}
              selected={data.annees_activite === option}
              onSelect={(v) => updateData({ annees_activite: v })}
            />
          ))}
        </div>
      </QuestionGroup>

      <QuestionGroup label="Vous travaillez" required>
        {artisanOptions.travail_mode.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.travail_mode.includes(option)}
            onToggle={(v) => {
              const newModes = data.travail_mode.includes(v)
                ? data.travail_mode.filter((m) => m !== v)
                : [...data.travail_mode, v];
              updateData({ travail_mode: newModes });
            }}
          />
        ))}
        {data.travail_mode.includes("Avec employés") && (
          <NumberInput
            label="Nombre d'employés"
            value={data.nb_employes}
            onChange={(v) => updateData({ nb_employes: v })}
            placeholder="0"
          />
        )}
        {data.travail_mode.includes("Avec apprentis") && (
          <NumberInput
            label="Nombre d'apprentis"
            value={data.nb_apprentis}
            onChange={(v) => updateData({ nb_apprentis: v })}
            placeholder="0"
          />
        )}
      </QuestionGroup>
    </div>
  );
};

// Section B: Secteur, produits et capacité
export const SectionB = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="B"
        title="Secteur, produits et capacité"
        description="Parlez-nous de votre activité"
      />

      <QuestionGroup label="Votre domaine principal" required>
        {artisanOptions.domaine_principal.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.domaine_principal === option}
            onSelect={(v) => updateData({ domaine_principal: v })}
          />
        ))}
        {data.domaine_principal === "Autre" && (
          <TextInput
            label="Précisez"
            value={data.domaine_principal_autre || ""}
            onChange={(v) => updateData({ domaine_principal_autre: v })}
            placeholder="Votre domaine..."
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Top 3 produits vendus" required>
        {[0, 1, 2].map((index) => (
          <TextInput
            key={index}
            label={`Produit ${index + 1}`}
            value={data.top_produits[index] || ""}
            onChange={(v) => {
              const newProducts = [...data.top_produits];
              newProducts[index] = v;
              updateData({ top_produits: newProducts });
            }}
            placeholder={`Nom du produit ${index + 1}`}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Capacité de production / mois" required>
        <div className="grid grid-cols-2 gap-2">
          {artisanOptions.capacite_production.map((option) => (
            <RadioOption
              key={option}
              value={option}
              label={option}
              selected={data.capacite_production === option}
              onSelect={(v) => updateData({ capacite_production: v })}
            />
          ))}
        </div>
        {data.capacite_production === "100+" && (
          <NumberInput
            label="Nombre de pièces précis"
            value={data.capacite_production_pieces}
            onChange={(v) => updateData({ capacite_production_pieces: v })}
            placeholder="100"
            max={10000}
            suffix="pièces"
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Temps moyen pour produire un article" required>
        <div className="grid grid-cols-2 gap-2">
          {artisanOptions.temps_production.map((option) => (
            <RadioOption
              key={option}
              value={option}
              label={option}
              selected={data.temps_production === option}
              onSelect={(v) => updateData({ temps_production: v })}
            />
          ))}
        </div>
      </QuestionGroup>

      <QuestionGroup label="Approvisionnement en matières premières" required>
        {artisanOptions.approvisionnement.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.approvisionnement === option}
            onSelect={(v) => updateData({ approvisionnement: v })}
          />
        ))}
        <TextInput
          label="Pourquoi ?"
          value={data.approvisionnement_pourquoi || ""}
          onChange={(v) => updateData({ approvisionnement_pourquoi: v })}
          placeholder="Expliquez..."
        />
      </QuestionGroup>

      <QuestionGroup label="Vos outils / équipements sont" required>
        {artisanOptions.equipements.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.equipements === option}
            onSelect={(v) => updateData({ equipements: v })}
          />
        ))}
        {data.equipements === "Insuffisants" && (
          <TextInput
            label="Vos besoins"
            value={data.equipements_besoins || ""}
            onChange={(v) => updateData({ equipements_besoins: v })}
            placeholder="De quoi avez-vous besoin ?"
          />
        )}
      </QuestionGroup>
    </div>
  );
};

// Section C: Marché, clients et canaux
export const SectionC = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="C"
        title="Marché, clients et canaux de vente"
        description="Comment vendez-vous vos produits ?"
      />

      <QuestionGroup label="Vos clients principaux" required>
        {artisanOptions.clients_principaux.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.clients_principaux.includes(option)}
            onToggle={(v) => {
              const newClients = data.clients_principaux.includes(v)
                ? data.clients_principaux.filter((c) => c !== v)
                : [...data.clients_principaux, v];
              updateData({ clients_principaux: newClients });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Canaux actuels" required>
        {artisanOptions.canaux_actuels.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.canaux_actuels.includes(option)}
            onToggle={(v) => {
              const newCanaux = data.canaux_actuels.includes(v)
                ? data.canaux_actuels.filter((c) => c !== v)
                : [...data.canaux_actuels, v];
              updateData({ canaux_actuels: newCanaux });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Part des ventes par canal (approx. %)">
        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Salon"
            value={data.part_ventes_salon}
            onChange={(v) => updateData({ part_ventes_salon: v })}
            suffix="%"
          />
          <NumberInput
            label="WhatsApp"
            value={data.part_ventes_whatsapp}
            onChange={(v) => updateData({ part_ventes_whatsapp: v })}
            suffix="%"
          />
          <NumberInput
            label="Réseaux sociaux"
            value={data.part_ventes_reseaux}
            onChange={(v) => updateData({ part_ventes_reseaux: v })}
            suffix="%"
          />
          <NumberInput
            label="Boutique"
            value={data.part_ventes_boutique}
            onChange={(v) => updateData({ part_ventes_boutique: v })}
            suffix="%"
          />
          <NumberInput
            label="Autre"
            value={data.part_ventes_autre}
            onChange={(v) => updateData({ part_ventes_autre: v })}
            suffix="%"
          />
        </div>
      </QuestionGroup>

      <QuestionGroup label="Saisonnalité" required>
        {artisanOptions.saisonnalite.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.saisonnalite.includes(option)}
            onToggle={(v) => {
              const newSaisons = data.saisonnalite.includes(v)
                ? data.saisonnalite.filter((s) => s !== v)
                : [...data.saisonnalite, v];
              updateData({ saisonnalite: newSaisons });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Votre zone de vente" required>
        {artisanOptions.zone_vente.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.zone_vente.includes(option)}
            onToggle={(v) => {
              const newZones = data.zone_vente.includes(v)
                ? data.zone_vente.filter((z) => z !== v)
                : [...data.zone_vente, v];
              updateData({ zone_vente: newZones });
            }}
          />
        ))}
      </QuestionGroup>
    </div>
  );
};

// Section D: Prix, marge et gestion
export const SectionD = ({ data, updateData }: SectionProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        sectionId="D"
        title="Prix, marge et gestion"
        description="Comment gérez-vous votre activité ?"
      />

      <QuestionGroup label="Comment fixez-vous vos prix ?" required>
        {artisanOptions.fixation_prix.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.fixation_prix === option}
            onSelect={(v) => updateData({ fixation_prix: v })}
          />
        ))}
        {data.fixation_prix === "Autre" && (
          <TextInput
            label="Précisez"
            value={data.fixation_prix_autre || ""}
            onChange={(v) => updateData({ fixation_prix_autre: v })}
            placeholder="Comment ?"
          />
        )}
      </QuestionGroup>

      <QuestionGroup label="Vous connaissez vos coûts ?" required>
        {artisanOptions.connaissance_couts.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.connaissance_couts === option}
            onSelect={(v) => updateData({ connaissance_couts: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Votre marge est" required>
        {artisanOptions.marge.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.marge === option}
            onSelect={(v) => updateData({ marge: v })}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Problèmes fréquents">
        {artisanOptions.problemes_frequents.map((option) => (
          <CheckboxOption
            key={option}
            value={option}
            label={option}
            checked={data.problemes_frequents.includes(option)}
            onToggle={(v) => {
              const newProblemes = data.problemes_frequents.includes(v)
                ? data.problemes_frequents.filter((p) => p !== v)
                : [...data.problemes_frequents, v];
              updateData({ problemes_frequents: newProblemes });
            }}
          />
        ))}
      </QuestionGroup>

      <QuestionGroup label="Tenez-vous une comptabilité simple ?" required>
        {artisanOptions.comptabilite.map((option) => (
          <RadioOption
            key={option}
            value={option}
            label={option}
            selected={data.comptabilite === option}
            onSelect={(v) => updateData({ comptabilite: v })}
          />
        ))}
        {data.comptabilite === "Non" && (
          <TextInput
            label="Si non, pourquoi ?"
            value={data.comptabilite_pourquoi || ""}
            onChange={(v) => updateData({ comptabilite_pourquoi: v })}
            placeholder="Expliquez..."
          />
        )}
      </QuestionGroup>
    </div>
  );
};
