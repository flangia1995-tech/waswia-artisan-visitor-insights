import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArtisanFormData } from "@/types/questionnaire";
import { defaultArtisanData } from "@/data/questionnaireData";
import { FormHeader, FormNavigation } from "@/components/form/FormNavigation";
import { SectionA, SectionB, SectionC, SectionD } from "@/components/artisan/ArtisanSections1";
import { SectionE, SectionF, SectionG, SectionH, SectionI, SectionJ } from "@/components/artisan/ArtisanSections2";
import { toast } from "@/hooks/use-toast";

const ArtisanForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ArtisanFormData>(defaultArtisanData);

  const totalSteps = 10;

  const updateData = (updates: Partial<ArtisanFormData>) => {
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
      // Simulate API call - will be replaced with Supabase
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Artisan data:", formData);
      toast({ title: "Succès", description: "Questionnaire envoyé avec succès!" });
      navigate("/confirmation/artisan");
    } catch (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    const props = { data: formData, updateData };
    switch (currentStep) {
      case 0: return <SectionA {...props} />;
      case 1: return <SectionB {...props} />;
      case 2: return <SectionC {...props} />;
      case 3: return <SectionD {...props} />;
      case 4: return <SectionE {...props} />;
      case 5: return <SectionF {...props} />;
      case 6: return <SectionG {...props} />;
      case 7: return <SectionH {...props} />;
      case 8: return <SectionI {...props} />;
      case 9: return <SectionJ {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <FormHeader title="Questionnaire Artisans" onBack={() => navigate("/")} />
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

export default ArtisanForm;
