import { SondageDroitFormData } from "@/types/questionnaire";
import { RadioOption, TextInput, CheckboxOption } from "@/components/form/FormInputs";
import { SectionHeader } from "@/components/form/FormNavigation";
import {
  importanceConnaissanceOptions,
  conservationDonneesOptions,
  differendContactOptions,
  methodesResolutionOptions,
} from "@/data/questionnaireData";

interface SectionProps {
  data: SondageDroitFormData;
  updateData: (updates: Partial<SondageDroitFormData>) => void;
}

// Thématique 1 : Introduction au droit civil et aux droits fondamentaux
export const Thematique1 = ({ data, updateData }: SectionProps) => (
  <div className="space-y-6">
    <SectionHeader
      sectionId="1"
      title="Introduction au droit civil"
      description="Cette section aborde les droits fondamentaux et l'importance de connaître ses droits au quotidien."
    />

    <TextInput
      label="1. Selon vous, à partir de quel moment une personne commence-t-elle à avoir des droits ?"
      value={data.droitsDebut}
      onChange={(v) => updateData({ droitsDebut: v })}
      placeholder="Votre réponse..."
      multiline
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">2. Savez-vous à quoi sert la loi dans une société ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.loiSociete === opt}
          onSelect={(v) => updateData({ loiSociete: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">3. Pensez-vous que tout le monde est protégé par la loi de la même manière ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.protectionEgale === opt}
          onSelect={(v) => updateData({ protectionEgale: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">4. Pensez-vous que connaître vos droits est important uniquement quand vous avez un problème, ou est-ce utile tous les jours ?</p>
      {importanceConnaissanceOptions.map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.importanceConnaissance === opt}
          onSelect={(v) => updateData({ importanceConnaissance: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">5. Saviez-vous que vous êtes protégé contre la torture et les traitements inhumains ou dégradants, quelles que soient les circonstances ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.protectionTorture === opt}
          onSelect={(v) => updateData({ protectionTorture: v })}
        />
      ))}
    </div>
  </div>
);

// Thématique 2 : Droit du Travail
export const Thematique2 = ({ data, updateData }: SectionProps) => (
  <div className="space-y-6">
    <SectionHeader
      sectionId="2"
      title="Droit du Travail"
      description="Cette thématique se concentre sur les droits et obligations dans le cadre d'une relation employeur-salarié."
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">6. Savez-vous que vous avez droit à un congé maladie différent des congés payés annuels ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.congeMaladie === opt}
          onSelect={(v) => updateData({ congeMaladie: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">7. Selon vous, est-ce qu'un employeur peut licencier un salarié sans motif légitime ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.licenciementSansMotif === opt}
          onSelect={(v) => updateData({ licenciementSansMotif: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">8. Savez-vous que votre employeur est tenu responsable en cas d'accident de travail dû à sa négligence des mesures d'hygiène et de sécurité au travail ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.responsabiliteEmployeur === opt}
          onSelect={(v) => updateData({ responsabiliteEmployeur: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">9. Savez-vous combien de temps les employeurs ou les institutions ont le droit de conserver les informations personnelles vous concernant (CV, dossiers médicaux) ?</p>
      {conservationDonneesOptions.map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.conservationDonnees === opt}
          onSelect={(v) => updateData({ conservationDonnees: v })}
        />
      ))}
    </div>
  </div>
);

// Thématique 3 : Droit des obligations (droit des contrats)
export const Thematique3 = ({ data, updateData }: SectionProps) => (
  <div className="space-y-6">
    <SectionHeader
      sectionId="3"
      title="Droit des obligations"
      description="Cette section aborde les relations contractuelles et les règles qui les régissent."
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">10. Pensez-vous que votre bailleur a le droit de vous chasser du local qu'il vous a loué comme bon lui semble ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.bailleurExpulsion === opt}
          onSelect={(v) => updateData({ bailleurExpulsion: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">11. Pensez-vous que vous pouvez refuser de signer un contrat que vous ne comprenez pas ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.refusContrat === opt}
          onSelect={(v) => updateData({ refusContrat: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">12. Pensez-vous qu'un propriétaire peut augmenter le loyer sans suivre des règles précises et sans vous prévenir à l'avance ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.augmentationLoyer === opt}
          onSelect={(v) => updateData({ augmentationLoyer: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">13. Si vous avez des dettes, un créancier a-t-il le droit de saisir tous vos biens sans aucune décision de justice préalable ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.saisiBiens === opt}
          onSelect={(v) => updateData({ saisiBiens: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">14. Connaissez-vous l'âge légal à partir duquel une personne est pleinement responsable de ses actes ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.ageResponsabilite === opt}
          onSelect={(v) => updateData({ ageResponsabilite: v })}
        />
      ))}
    </div>
  </div>
);

// Thématique 4 : Accès à la Justice (procédure civile)
export const Thematique4 = ({ data, updateData }: SectionProps) => (
  <div className="space-y-6">
    <SectionHeader
      sectionId="4"
      title="Accès à la Justice"
      description="Ces questions évaluent la connaissance des mécanismes pour faire valoir ses droits."
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">15. Saviez-vous que vos droits peuvent être défendus même contre l'État, si celui-ci ne les respecte pas ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.droitsContreEtat === opt}
          onSelect={(v) => updateData({ droitsContreEtat: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">16. Lorsque vous avez un différend qui vous oppose avec quelqu'un, savez-vous vers qui vous tourner en premier ?</p>
      {differendContactOptions.map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.differendContact === opt}
          onSelect={(v) => updateData({ differendContact: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">17. Savez-vous que la justice est accessible à tous et que déposer une plainte c'est gratuit ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.justiceGratuite === opt}
          onSelect={(v) => updateData({ justiceGratuite: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">18. Saviez-vous que vous disposez d'un délai pour agir en justice, et qu'une fois ce délai dépassé, vous ne pouvez plus agir ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.delaiAction === opt}
          onSelect={(v) => updateData({ delaiAction: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">19. Saviez-vous que vous pouvez bénéficier de l'aide juridictionnelle si vous n'avez pas les moyens de payer un avocat ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.aideJuridictionnelle === opt}
          onSelect={(v) => updateData({ aideJuridictionnelle: v })}
        />
      ))}
    </div>

    <TextInput
      label="20. Si votre enfant est victime de cyber-harcèlement ou si ses photos sont partagées sans son accord en ligne, savez-vous quelle est la première démarche légale à effectuer ?"
      value={data.cyberharcelement}
      onChange={(v) => updateData({ cyberharcelement: v })}
      placeholder="Votre réponse..."
      multiline
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">21. Savez-vous qu'il existe des méthodes de résolution de conflits à l'amiable qui sont efficaces ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.resolutionAmiable === opt}
          onSelect={(v) => updateData({ resolutionAmiable: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">Lesquelles connaissez-vous ? (plusieurs réponses possibles)</p>
      {methodesResolutionOptions.map((opt) => (
        <CheckboxOption
          key={opt}
          value={opt}
          label={opt}
          checked={data.methodesResolution.includes(opt)}
          onToggle={(v) => {
            if (data.methodesResolution.includes(v)) {
              updateData({ methodesResolution: data.methodesResolution.filter((x) => x !== v) });
            } else {
              updateData({ methodesResolution: [...data.methodesResolution, v] });
            }
          }}
        />
      ))}
    </div>
  </div>
);

// Thématique 5 : Simplification et Éducation au Droit
export const Thematique5 = ({ data, updateData }: SectionProps) => (
  <div className="space-y-6">
    <SectionHeader
      sectionId="5"
      title="Simplification et Éducation"
      description="Cette section se concentre sur l'obstacle du langage juridique et les pistes pour améliorer l'accès à l'information."
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">22. Êtes-vous souvent découragé(e) par la lecture d'un texte légal parce que le langage utilisé est trop compliqué ou technique ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.langageComplique === opt}
          onSelect={(v) => updateData({ langageComplique: v })}
        />
      ))}
    </div>

    <div className="space-y-3">
      <p className="font-medium text-foreground">23. Avez-vous déjà eu besoin de contacter un juriste, un professionnel du droit juste pour qu'il vous traduise ou vous explique ce que dit un document officiel ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.contactJuriste === opt}
          onSelect={(v) => updateData({ contactJuriste: v })}
        />
      ))}
    </div>

    <TextInput
      label="24. Selon vous, comment rendre les droits plus faciles à comprendre pour tous ?"
      value={data.simplifierDroits}
      onChange={(v) => updateData({ simplifierDroits: v })}
      placeholder="Votre réponse..."
      multiline
    />

    <TextInput
      label="25. Qu'aimeriez-vous apprendre en priorité sur vos droits ?"
      value={data.prioriteApprentissage}
      onChange={(v) => updateData({ prioriteApprentissage: v })}
      placeholder="Votre réponse..."
      multiline
    />

    <div className="space-y-3">
      <p className="font-medium text-foreground">26. Pensez-vous qu'une matière sur les "Droits civiques et la Loi" devrait être obligatoire et enseignée dès l'école primaire/secondaire ?</p>
      {["Oui", "Non"].map((opt) => (
        <RadioOption
          key={opt}
          value={opt}
          label={opt}
          selected={data.matiereObligatoire === opt}
          onSelect={(v) => updateData({ matiereObligatoire: v })}
        />
      ))}
    </div>
  </div>
);
