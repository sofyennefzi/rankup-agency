const phases = [
  { week: "Week 1", title: "Discovery & blueprint", body: "Deep audit of your workflows, data, and tools. We deliver a prioritised automation roadmap with ROI projections." },
  { week: "Week 2", title: "Design & architecture", body: "We design the agents, prompts, integrations, and guardrails. You approve before a single line of code is shipped." },
  { week: "Week 3", title: "Build & integrate", body: "We build inside your stack — n8n, Make, custom agents, RAG pipelines, internal tools — with full observability." },
  { week: "Week 4", title: "Launch & scale", body: "Live deployment, team training, and a 30-day optimisation window. Then we hand over keys + docs." },
];

export const Blueprint = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">The 30-Day Blueprint</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink">
            From kickoff to <span className="font-serif text-gradient">live agents</span> in 30 days.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="space-y-12">
            {phases.map((p, i) => (
              <div key={p.week} className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-brand shadow-glow ring-4 ring-background" />
                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.week}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-ink">{p.title}</h3>
                </div>
                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
