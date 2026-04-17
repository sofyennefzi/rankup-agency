import { Search, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "We map your bottlenecks",
    body: "30-minute call. We identify the 3 highest-leverage automation opportunities in your ops, sales, and delivery.",
  },
  {
    icon: FileText,
    title: "You get a custom blueprint",
    body: "Within 48h, a tailored roadmap: which agents to build, hours saved, revenue impact, and ROI timeline.",
  },
  {
    icon: Rocket,
    title: "We ship in 30 days",
    body: "If we're a fit, we build, integrate, and deploy. You see results in week one — not in six months.",
  },
];

export const AuditExperience = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">The Audit Experience</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink">
            A free audit that <span className="font-serif text-gradient">feels like</span> a strategy session.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Most agencies pitch. We diagnose. You leave the call with a clear plan whether you work with us or not.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="group relative rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-7xl font-serif text-gradient opacity-20">{i + 1}</div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
