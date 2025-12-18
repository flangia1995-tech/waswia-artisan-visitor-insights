import logoWaswia from "@/assets/logo-waswia.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Scale, Settings } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin")} className="opacity-50 hover:opacity-100">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="animate-float mb-8">
          <img src={logoWaswia} alt="WASWIA" className="w-64 md:w-80 h-auto drop-shadow-lg" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 waswia-gradient-text font-space">
          Sondage sur la compréhension du droit
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-md">
          Le langage juridique est souvent perçu comme complexe. Ce sondage vise à évaluer 
          l'accès et la compréhension du droit par les citoyens dans leur vie quotidienne.
        </p>

        <div className="w-full max-w-sm">
          <Button variant="hero" size="xl" className="w-full gap-3" onClick={() => navigate("/sondage")}>
            <Scale className="h-6 w-6" />
            Participer au sondage
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">Enquête officielle WASWIA • 26 questions • ~10 min</p>
        </div>
      </main>

      <div className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-waswia-turquoise/10 blur-3xl pointer-events-none" />
      <div className="fixed -top-32 -right-32 w-64 h-64 rounded-full bg-waswia-violet/10 blur-3xl pointer-events-none" />
    </div>
  );
};

export default Index;
