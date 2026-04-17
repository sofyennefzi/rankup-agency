import { Compass, Hammer, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    week: "Week 0",
    title: "Free Audit",
    icon: Compass,
    description:
      "30-min discovery call + a 48h written roadmap of your top 3 automation wins, ranked by ROI.",
    deliverable: "Roadmap PDF + ROI estimate",
  },
  {
    week: "Week 1",
    title: "Design & Scope",
    icon: LineChart,
    description:
      "We map data flows, lock the success metric, and ship a clickable spec so there are zero surprises before code.",
    deliverable: "Architecture diagram + scope doc",
  },
  {
    week: "Week 2",
    title: "Build & Integrate",
    icon: Hammer,
    description:
      "Workflows wired up in n8n / Make, AI prompts tuned, integrations connected to your real stack — tested with your actual data.",
    deliverable: "Working system in staging",
  },
  {
    week: "Week 3",
    title: "Launch & Handover",
    icon: Rocket,
    description:
      "Go live in production, train your team in a 1h session, and start measuring hours saved from day one.",
    deliverable: "Live system + 30-day support",
  },
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            From kickoff to live in{" "}
            <span className="font-serif text-gradient">3 weeks</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A predictable, milestone-based process. You always know exactly what's shipping next.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Vertical connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-16">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={s.week}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Card */}
                  <div className={`${isEven ? "lg:text-right" : ""}`}>
                    <div className="inline-block rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elevated transition-shadow text-left max-w-md">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                          {s.week}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                      <div className="mt-5 pt-5 border-t border-border">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                          Deliverable
                        </p>
                        <p className="mt-1 text-sm font-semibold text-ink">{s.deliverable}</p>
                      </div>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-background border-2 border-primary shadow-glow">
                      <span className="text-2xl font-bold text-gradient">0{i + 1}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
