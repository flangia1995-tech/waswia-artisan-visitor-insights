import logoWaswia from "@/assets/logo-waswia.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Users, Wrench, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const Admin = () => {
  const navigate = useNavigate();

  // Mock data - will be replaced with Supabase data
  const artisansCount = 0;
  const visiteursCount = 0;

  const exportToExcel = (type: "artisans" | "visiteurs") => {
    const data = type === "artisans" ? [] : [];
    const ws = XLSX.utils.json_to_sheet(data.length ? data : [{ message: "Aucune donnée" }]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type === "artisans" ? "Artisans" : "Visiteurs");
    XLSX.writeFile(wb, `enquete_${type}_WASWIA.xlsx`);
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <img src={logoWaswia} alt="WASWIA" className="h-8" />
          <h1 className="font-semibold waswia-gradient-text">Tableau de bord Admin</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="waswia" className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl waswia-gradient-bg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Artisans</h2>
                <p className="text-3xl font-bold waswia-gradient-text">{artisansCount}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={() => exportToExcel("artisans")}>
              <Download className="h-4 w-4 mr-2" />
              Exporter Excel
            </Button>
          </Card>

          <Card variant="waswia" className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl waswia-gradient-bg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Visiteurs</h2>
                <p className="text-3xl font-bold waswia-gradient-text">{visiteursCount}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={() => exportToExcel("visiteurs")}>
              <Download className="h-4 w-4 mr-2" />
              Exporter Excel
            </Button>
          </Card>
        </div>

        <Card className="p-6 text-center">
          <p className="text-muted-foreground">
            Connectez Supabase pour enregistrer et afficher les réponses des questionnaires.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
