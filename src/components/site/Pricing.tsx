import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Audit",
    price: "Free",
    suffix: "",
    description: "A 48h diagnostic of your highest-ROI automation plays.",
    features: [
      "1h discovery call",
      "Workflow & data audit",
      "Custom 48h roadmap",
      "ROI & hours-saved estimate",
    ],
    cta: "Book free audit",
    href: "#audit",
    highlighted: false,
  },
  {
    name: "Build",
    price: "From 4,500",
    suffix: "TND",
    description: "One focused automation, shipped to production in ~2 weeks.",
    features: [
      "1 production-grade workflow",
      "End-to-end build & test",
      "Stack integrations included",
      "30 days of post-launch support",
      "Team handover & docs",
    ],
    cta: "Start a build",
    href: "#audit",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "From 12,000",
    suffix: "TND / mo",
    description: "Embedded AI ops partner — multiple systems, monthly velocity.",
    features: [
      "Unlimited workflow requests",
      "Dedicated automation engineer",
      "Bi-weekly strategy sessions",
      "Monitoring & maintenance",
      "Priority Slack channel",
    ],
    cta: "Talk to us",
    href: "#audit",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            Honest pricing.{" "}
            <span className="font-serif text-gradient">No surprises.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every engagement starts free. You only pay once we both know exactly what we're shipping.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                t.highlighted
                  ? "bg-ink text-background shadow-elevated border border-ink"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-primary-foreground shadow-glow">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </div>
              )}
              <div>
                <h3
                  className={`text-sm uppercase tracking-[0.2em] font-bold ${
                    t.highlighted ? "text-primary" : "text-primary"
                  }`}
                >
                  {t.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold tracking-tighter ${
                      t.highlighted ? "text-background" : "text-ink"
                    }`}
                  >
                    {t.price}
                  </span>
                  {t.suffix && (
                    <span
                      className={`text-sm font-medium ${
                        t.highlighted ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {t.suffix}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    t.highlighted ? "text-background/80" : "text-muted-foreground"
                  }`}
                >
                  {t.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        t.highlighted ? "bg-gradient-brand" : "bg-accent"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          t.highlighted ? "text-primary-foreground" : "text-accent-foreground"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-sm ${
                        t.highlighted ? "text-background/95" : "text-foreground"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`mt-8 h-12 ${
                  t.highlighted
                    ? "bg-gradient-brand hover:opacity-90 shadow-glow border-0 text-primary-foreground"
                    : "bg-ink hover:bg-ink-soft text-background border-0"
                }`}
              >
                <a href={t.href}>{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something different?{" "}
          <a href="#audit" className="text-primary font-semibold hover:underline">
            Tell us about your project →
          </a>
        </p>
      </div>
    </section>
  );
};
