import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  canProceed?: boolean;
}

export const FormNavigation = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting,
  canProceed = true,
}: FormNavigationProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 safe-area-inset-bottom">
      <div className="max-w-lg mx-auto space-y-3">
        {/* Progress indicator */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground min-w-[60px]">
            Étape {currentStep + 1}/{totalSteps}
          </span>
          <Progress value={progress} variant="waswia" className="flex-1" />
          <span className="text-xs font-medium text-waswia-turquoise min-w-[40px] text-right">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={currentStep === 0 || isSubmitting}
            className="flex-1"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Précédent
          </Button>

          {isLastStep ? (
            <Button
              variant="waswia"
              onClick={onSubmit}
              disabled={isSubmitting || !canProceed}
              className="flex-1"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Envoi...</span>
              ) : (
                <>
                  Envoyer
                  <Send className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          ) : (
            <Button
              variant="waswia"
              onClick={onNext}
              disabled={!canProceed}
              className="flex-1"
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

interface SectionHeaderProps {
  sectionId: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ sectionId, title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-8 h-8 rounded-lg waswia-gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
          {sectionId}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground ml-11">{description}</p>
      )}
    </div>
  );
};

interface FormHeaderProps {
  title: string;
  onBack: () => void;
}

export const FormHeader = ({ title, onBack }: FormHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="shrink-0"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg truncate waswia-gradient-text">
          {title}
        </h1>
      </div>
    </header>
  );
};
