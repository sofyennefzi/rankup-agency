import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How is RankUp different from a regular agency or consultant?", a: "We don't deliver slideware. We ship working AI systems inside your stack within 30 days, with measurable hours-saved and revenue lift attached to every project." },
  { q: "What does an engagement actually cost?", a: "Pilots typically run between 12k–45k TND depending on scope. Most clients see ROI inside the first 30 days. We share exact pricing on the audit call after we understand your context." },
  { q: "Do you replace our team?", a: "Never. We replace the busywork that drains your team — so they can focus on the high-leverage work only humans can do." },
  { q: "What if AI gets things wrong?", a: "Every agent we ship has guardrails, human-in-the-loop checkpoints, observability, and rollback paths. Nothing goes to production without your sign-off." },
  { q: "Which tools do you work with?", a: "Anything with an API. We're tool-agnostic — n8n, Make, Zapier, OpenAI, Claude, Supabase, your CRM, your ERP. We pick the right tool for the job, not the other way around." },
  { q: "Who owns the systems you build?", a: "You do. Full ownership of code, prompts, agents, and infrastructure. We hand over docs and train your team. No lock-in." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink">
            Questions, <span className="font-serif text-gradient">answered.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-16 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl bg-card px-6 shadow-card">
              <AccordionTrigger className="text-left text-lg font-semibold text-ink hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
