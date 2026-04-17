import { Bot, Mail, MessageSquare, Workflow, Database, Phone } from "lucide-react";

const cases = [
  {
    icon: Mail,
    tag: "Sales",
    title: "Inbox-zero AI SDR",
    body: "Triages, qualifies, and replies to inbound leads 24/7. Books meetings straight on your calendar.",
    metric: "8.4×",
    metricLabel: "more meetings booked",
  },
  {
    icon: MessageSquare,
    tag: "Support",
    title: "Tier-1 support agent",
    body: "Answers 70% of support tickets instantly using your docs, past tickets, and product context.",
    metric: "−68%",
    metricLabel: "ticket volume",
  },
  {
    icon: Workflow,
    tag: "Ops",
    title: "End-to-end workflow agent",
    body: "Connects CRM → ERP → finance. Removes hand-offs, errors, and the 'who's doing this?' question.",
    metric: "47h",
    metricLabel: "saved per week",
  },
  {
    icon: Database,
    tag: "Data",
    title: "Internal RAG knowledge base",
    body: "One brain that knows every doc, contract, SOP, and chat. Your team asks; it answers — with sources.",
    metric: "94%",
    metricLabel: "answer accuracy",
  },
  {
    icon: Phone,
    tag: "Voice",
    title: "AI voice receptionist",
    body: "Answers calls, qualifies, books appointments, transfers to humans only when needed.",
    metric: "100%",
    metricLabel: "calls answered",
  },
  {
    icon: Bot,
    tag: "Custom",
    title: "Anything you can describe",
    body: "If it's repetitive and rules-based-ish, we can probably automate it. Bring us your weirdest workflow.",
    metric: "∞",
    metricLabel: "possibilities",
  },
];

export const AutomationInAction = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Automation in Action</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink">
            Real agents, <span className="font-serif text-gradient">real outcomes.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="group rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary bg-accent rounded-full px-3 py-1">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-6 pt-6 border-t border-border flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gradient tracking-tighter">{c.metric}</span>
                <span className="text-xs text-muted-foreground">{c.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
