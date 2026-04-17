import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 shadow-card">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Free AI Audit Now Available
            <Star className="h-3 w-3 fill-primary text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-ink">
            Scale your brand with{" "}
            <span className="font-serif text-gradient">AI-driven</span>
            <br />
            workflows, images & video.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design and ship custom AI automations — workflows, image generation,
            ad copy and video — so your brand grows on autopilot while you focus on the big bets.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 shadow-glow border-0 h-14 px-8 text-base">
              <a href="#audit">
                Get free AI audit <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-border/80">
              <a href="#process">View services</a>
            </Button>
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            Identify high-impact automation · Roadmap delivered in 48h
          </p>
        </div>

        {/* Floating preview card */}
        <div className="mt-20 mx-auto max-w-5xl relative animate-float">
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur shadow-elevated overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-3 border-b border-border bg-secondary/40">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-primary/40" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
              </div>
              <span className="text-xs text-muted-foreground ml-3">rankup.ai / dashboard</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 p-6 md:p-8">
              {[
                { label: "Hours saved / week", value: "47h", trend: "+12%" },
                { label: "Leads auto-qualified", value: "1,284", trend: "+38%" },
                { label: "Revenue lift (Q)", value: "$84.2k", trend: "+22%" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background p-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-3xl font-bold text-ink">{s.value}</div>
                    <div className="text-xs font-semibold text-primary mb-1">{s.trend}</div>
                  </div>
                  <div className="mt-4 h-12 rounded-lg bg-gradient-brand/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-brand opacity-30" style={{ clipPath: 'polygon(0 80%, 20% 60%, 40% 70%, 60% 30%, 80% 45%, 100% 10%, 100% 100%, 0 100%)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
