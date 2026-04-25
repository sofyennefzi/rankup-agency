import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sofien rebuilt our lead qualification with an AI agent in two weeks. We went from 3h/day of manual work to zero — and our SDRs only call leads that are actually ready to buy.",
    name: "Yassine Ben Salah",
    role: "Head of Growth",
    company: "Medina Capital",
    initials: "YB",
    rating: 5,
  },
  {
    quote:
      "The content pipeline A4D shipped publishes 40+ branded posts a month on autopilot. Our reach 4×'d in one quarter and we didn't hire a single new person.",
    name: "Amira Trabelsi",
    role: "Marketing Director",
    company: "Nova Retail Group",
    initials: "AT",
    rating: 5,
  },
  {
    quote:
      "I was sceptical about AI agencies in Tunisia. Sofien delivered a working n8n + GPT system in 10 days that saves us ~180k TND/year in operations cost. Real ROI, no hype.",
    name: "Karim Mansouri",
    role: "Founder & CEO",
    company: "Sahara Logistics",
    initials: "KM",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Trusted by Operators
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            Real teams. <span className="font-serif text-gradient">Real numbers.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            What founders and growth leads say after shipping with A4D.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elevated transition-shadow flex flex-col"
            >
              <Quote className="absolute -top-4 left-8 h-8 w-8 text-primary fill-primary" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base text-ink leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-primary-foreground font-bold text-sm shadow-glow">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Workflows shipped" },
            { value: "180k+", label: "TND saved per client / year" },
            { value: "10 days", label: "Average ship time" },
            { value: "100%", label: "Founder-led delivery" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient tracking-tighter">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
