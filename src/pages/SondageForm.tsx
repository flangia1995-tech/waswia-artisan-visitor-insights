import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SondageDroitFormData } from "@/types/questionnaire";
import { defaultSondageData } from "@/data/questionnaireData";
import { FormHeader, FormNavigation } from "@/components/form/FormNavigation";
import { Thematique1, Thematique2, Thematique3, Thematique4, Thematique5 } from "@/components/sondage/SondageSections";
import { toast } from "@/hooks/use-toast";

const SondageForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SondageDroitFormData>(defaultSondageData);

  const totalSteps = 5;

  const updateData = (updates: Partial<SondageDroitFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Sondage data:", formData);
      toast({ title: "Succès", description: "Sondage envoyé avec succès!" });
      navigate("/confirmation");
    } catch (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    const props = { data: formData, updateData };
    switch (currentStep) {
      case 0: return <Thematique1 {...props} />;
      case 1: return <Thematique2 {...props} />;
      case 2: return <Thematique3 {...props} />;
      case 3: return <Thematique4 {...props} />;
      case 4: return <Thematique5 {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <FormHeader title="Sondage sur le Droit" onBack={() => navigate("/")} />
      <main className="max-w-lg mx-auto px-4 py-6">{renderSection()}</main>
      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default SondageForm;
