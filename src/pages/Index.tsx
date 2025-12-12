import logoWaswia from "@/assets/logo-waswia.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Wrench, Users, Settings } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">
      {/* Admin button - discrete in corner */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/admin")}
          className="opacity-50 hover:opacity-100"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="animate-float mb-8">
          <img
            src={logoWaswia}
            alt="WASWIA - Salon de l'Artisanat"
            className="w-64 md:w-80 h-auto drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 waswia-gradient-text font-space">
          Enquête Officielle
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-md">
          Salon de l'Artisanat – WASWIA
          <br />
          <span className="text-sm">
            Aidez-nous à mieux comprendre vos besoins et améliorer l'artisanat comorien
          </span>
        </p>

        {/* Survey buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button
            variant="hero"
            size="xl"
            className="w-full gap-3"
            onClick={() => navigate("/artisan")}
          >
            <Wrench className="h-6 w-6" />
            Artisans exposants
          </Button>

          <Button
            variant="hero"
            size="xl"
            className="w-full gap-3"
            onClick={() => navigate("/visiteur")}
          >
            <Users className="h-6 w-6" />
            Visiteurs / Particuliers
          </Button>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Enquête anonyme • Durée : 6-15 min
          </p>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-waswia-turquoise/10 blur-3xl pointer-events-none" />
      <div className="fixed -top-32 -right-32 w-64 h-64 rounded-full bg-waswia-violet/10 blur-3xl pointer-events-none" />
    </div>
  );
};

export default Index;
