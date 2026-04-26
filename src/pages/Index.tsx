import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";

// 1. PROBLEM — why you need this
import { CostOfInefficiency } from "@/components/site/CostOfInefficiency";

// 2. SOLUTION — what we do
import { AuditExperience } from "@/components/site/AuditExperience";
import { Blueprint } from "@/components/site/Blueprint";
import { AutomationInAction } from "@/components/site/AutomationInAction";

// 3. PROOF — what we've shipped
import { WorkflowShowcase } from "@/components/site/WorkflowShowcase";
import { AIImageGallery } from "@/components/site/AIImageGallery";
import { ClientWorkVideos } from "@/components/site/ClientWorkVideos";

// 4. PROCESS — how we work
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Comparison } from "@/components/site/Comparison";

// 5. TRUST — who says so & who we are
import { Testimonials } from "@/components/site/Testimonials";
import { FounderStory } from "@/components/site/FounderStory";

// 6. CONVERT — answer doubts & close
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactCard } from "@/components/site/ContactCard";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* HOOK */}
      <Hero />
      <Marquee />

      {/* STORY (moved up) */}
      <FounderStory />

      {/* PROBLEM */}
      <CostOfInefficiency />

      {/* SOLUTION */}
      <AuditExperience />
      <Blueprint />
      <AutomationInAction />

      {/* PROOF */}
      <WorkflowShowcase />
      <ClientWorkVideos />
      <AIImageGallery />

      {/* PROCESS */}
      <ProcessTimeline />
      <Comparison />

      {/* TRUST */}
      <Testimonials />

      {/* CONVERT */}
      <FAQ />
      <FinalCTA />
      <ContactCard />
      <Footer />
    </main>
  );
};

export default Index;
