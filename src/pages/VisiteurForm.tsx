import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VisiteurFormData } from "@/types/questionnaire";
import { defaultVisiteurData } from "@/data/questionnaireData";
import { FormHeader, FormNavigation } from "@/components/form/FormNavigation";
import { VisiteurSectionA, VisiteurSectionB, VisiteurSectionC, VisiteurSectionD, VisiteurSectionE, VisiteurSectionF, VisiteurSectionG } from "@/components/visiteur/VisiteurSections";
import { toast } from "@/hooks/use-toast";

const VisiteurForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<VisiteurFormData>(defaultVisiteurData);

  const totalSteps = 7;

  const updateData = (updates: Partial<VisiteurFormData>) => {
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
      console.log("Visiteur data:", formData);
      toast({ title: "Succès", description: "Questionnaire envoyé avec succès!" });
      navigate("/confirmation/visiteur");
    } catch (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    const props = { data: formData, updateData };
    switch (currentStep) {
      case 0: return <VisiteurSectionA {...props} />;
      case 1: return <VisiteurSectionB {...props} />;
      case 2: return <VisiteurSectionC {...props} />;
      case 3: return <VisiteurSectionD {...props} />;
      case 4: return <VisiteurSectionE {...props} />;
      case 5: return <VisiteurSectionF {...props} />;
      case 6: return <VisiteurSectionG {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <FormHeader title="Questionnaire Visiteurs" onBack={() => navigate("/")} />
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

export default VisiteurForm;
