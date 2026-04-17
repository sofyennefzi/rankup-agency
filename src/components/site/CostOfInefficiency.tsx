import { TrendingDown, Clock, DollarSign, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "21h", label: "wasted per employee per week on repetitive tasks", color: "from-primary to-primary-glow" },
  { icon: DollarSign, value: "145k TND", label: "average annual cost per role doing manual data work", color: "from-violet to-fuchsia" },
  { icon: Users, value: "67%", label: "of teams report burnout from operational busywork", color: "from-indigo to-primary" },
  { icon: TrendingDown, value: "3.2×", label: "slower growth vs. AI-native competitors", color: "from-fuchsia to-primary" },
];

export const CostOfInefficiency = () => {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">The Cost of Doing Nothing</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink">
            Every week without AI is{" "}
            <span className="font-serif text-gradient">money</span> on the floor.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            The math is brutal. Here's what manual operations actually cost you.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.color}`}>
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-6 text-5xl font-bold text-ink tracking-tighter">{s.value}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
