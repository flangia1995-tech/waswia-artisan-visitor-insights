import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import logoWaswia from "@/assets/logo-waswia.png";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center px-6 py-12">
      <div className="relative mb-8 animate-scale-in">
        <div className="w-24 h-24 rounded-full waswia-gradient-bg flex items-center justify-center shadow-glow">
          <CheckCircle className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute inset-0 rounded-full waswia-gradient-bg opacity-30 animate-ping" />
      </div>

      <img src={logoWaswia} alt="WASWIA" className="w-40 h-auto mb-6" />

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 waswia-gradient-text font-space">
        Merci pour votre participation !
      </h1>
      
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Vos réponses ont été enregistrées avec succès.
        <br />
        Votre contribution nous aide à mieux comprendre les besoins des citoyens en matière d'accès au droit.
      </p>

      <Button variant="hero" size="lg" className="gap-2" onClick={() => navigate("/")}>
        <Home className="h-5 w-5" />
        Retour à l'accueil
      </Button>

      <div className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-waswia-turquoise/10 blur-3xl pointer-events-none" />
      <div className="fixed -top-32 -right-32 w-64 h-64 rounded-full bg-waswia-violet/10 blur-3xl pointer-events-none" />
    </div>
  );
};

export default Confirmation;
