import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { AuditExperience } from "@/components/site/AuditExperience";
import { Blueprint } from "@/components/site/Blueprint";
import { CostOfInefficiency } from "@/components/site/CostOfInefficiency";
import { AutomationInAction } from "@/components/site/AutomationInAction";
import { WorkflowShowcase } from "@/components/site/WorkflowShowcase";
import { AIImageGallery } from "@/components/site/AIImageGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactCard } from "@/components/site/ContactCard";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <AuditExperience />
      <Blueprint />
      <CostOfInefficiency />
      <AutomationInAction />
      <WorkflowShowcase />
      <AIImageGallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactCard />
      <Footer />
    </main>
  );
};

export default Index;
