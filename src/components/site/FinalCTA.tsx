import { RequestAccessForm } from "./RequestAccessForm";

export const FinalCTA = () => {
  return (
    <section id="access" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Request Access</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
              Let's build your <span className="font-serif text-gradient">A4D</span> automation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Drop your details below. We'll get back to you with next steps — completely free, no strings attached.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Personal reply within 24h",
                "Custom roadmap of high-impact AI plays",
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

          <RequestAccessForm />
        </div>
      </div>
    </section>
  );
};
