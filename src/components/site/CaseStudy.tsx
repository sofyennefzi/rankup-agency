import { ArrowRight, TrendingUp, Clock, Zap } from "lucide-react";

const metrics = [
  { icon: Clock, value: "47h", label: "saved per week" },
  { icon: TrendingUp, value: "+38%", label: "lead-to-call rate" },
  { icon: Zap, value: "10 days", label: "from kickoff to live" },
];

const stack = ["n8n", "OpenAI GPT-4o", "HubSpot", "Slack", "Supabase"];

export const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Case Study
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            How a B2B sales team killed{" "}
            <span className="font-serif text-gradient">3 hours of busywork</span> per rep, per day.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {/* Story column */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-2">
                The Problem
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                A 12-person SDR team was spending the first 3 hours of every day manually researching inbound leads — pulling LinkedIn, company size, funding, tech stack — before ever picking up the phone. Half the leads were already cold by the time they got called.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-2">
                What We Built
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                A multi-agent qualification pipeline: every new HubSpot lead triggers an n8n workflow that scrapes public data, runs GPT-4o scoring against the team's ICP, drafts a personalised opener, and pushes a ready-to-call card into Slack — all in under 90 seconds.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-2">
                The Outcome
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                SDRs now start their day with 20 hot leads ranked and pre-researched. Manual research dropped to zero. Pipeline value attributable to the automation crossed <span className="font-bold text-ink">320k TND</span> in the first quarter.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mr-2">
                Stack
              </span>
              {stack.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics column */}
          <div className="space-y-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-3xl bg-gradient-brand p-8 shadow-glow text-primary-foreground"
              >
                <m.icon className="h-6 w-6 opacity-80" />
                <div className="mt-6 text-5xl font-bold tracking-tighter">{m.value}</div>
                <div className="mt-2 text-sm opacity-90">{m.label}</div>
              </div>
            ))}
            <a
              href="#audit"
              className="block rounded-3xl border-2 border-dashed border-border p-6 text-center text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-colors group"
            >
              Want a system like this?
              <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
