const tools = [
  "OpenAI", "Claude", "n8n", "Zapier", "Make", "Slack", "HubSpot", "Notion",
  "Airtable", "Stripe", "Gmail", "Calendly", "Salesforce", "Webflow", "Supabase",
];

export const Marquee = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Plugs into your stack — 200+ integrations
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 marquee whitespace-nowrap">
            {[...tools, ...tools].map((t, i) => (
              <div key={i} className="text-2xl md:text-3xl font-bold text-ink-soft/60 hover:text-foreground transition-colors">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
