import Navbar from "@/components/campaign/Navbar";
import HeroSection from "@/components/campaign/HeroSection";
import MythBusterSection from "@/components/campaign/MythBusterSection";
import SymptomsSection from "@/components/campaign/SymptomsSection";
import PsoriasisTypesSection from "@/components/campaign/PsoriasisTypesSection";
import ExacerbatingFactorsSection from "@/components/campaign/ExacerbatingFactorsSection";
import AudienceSection from "@/components/campaign/AudienceSection";
import FooterSection from "@/components/campaign/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MythBusterSection />
      <SymptomsSection />
      <PsoriasisTypesSection />
      <ExacerbatingFactorsSection />
      <AudienceSection />
      <FooterSection />
    </main>
  );
};

export default Index;
