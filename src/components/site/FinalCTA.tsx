import { AuditForm } from "./AuditForm";

export const FinalCTA = () => {
  return (
    <section id="audit" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Free AI Audit</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
              Let's find your <span className="font-serif text-gradient">$100k</span> automation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Tell us a little about your business. We'll come back with a custom roadmap of the highest-impact AI plays for you — completely free, no strings.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Personalised 48-hour roadmap",
                "Hours-saved + revenue impact estimates",
                "No pitch unless we're a clear fit",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand">
                    <svg className="h-3 w-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <AuditForm />
        </div>
      </div>
    </section>
  );
};
