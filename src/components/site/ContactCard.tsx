import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import portrait from "@/assets/sofien-portrait.jpg";

const contacts = [
  { icon: Mail, label: "Email", value: "sofien.nefzi@esen.tn", href: "mailto:sofien.nefzi@esen.tn" },
  { icon: Phone, label: "Téléphone", value: "+216 55 934 066", href: "tel:+21655934066" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sofien-nefzi-223651267", href: "https://linkedin.com/in/sofien-nefzi-223651267" },
  { icon: Github, label: "GitHub", value: "github.com/sofyennefzi", href: "https://github.com/sofyennefzi" },
  { icon: Globe, label: "Portfolio", value: "sofiennefzi.me", href: "https://sofiennefzi.me" },
];

export const ContactCard = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-gradient-soft">
      <div className="container relative">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Meet the Founder
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            Built by <span className="font-serif text-gradient">Sofien Nefzi</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            One human behind every workflow, image and pipeline. Reach out directly — no forms, no gatekeepers.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Portrait card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-ink shadow-elevated group">
            <img
              src={portrait}
              alt="Sofien Nefzi — Founder of RankUp Agency"
              className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="relative p-8 md:p-10 flex flex-col justify-end min-h-[420px] md:min-h-[520px]">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-ink mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Available for projects
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-background tracking-tight">
                Sofien Nefzi
              </h3>
              <p className="mt-2 text-sm text-background/80">
                Founder & AI Automation Engineer · RankUp Agency
              </p>
            </div>
          </div>

          {/* Contact grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink break-all group-hover:text-primary transition-colors">
                    {c.value}
                  </p>
                </a>
              );
            })}

            {/* CTA tile */}
            <a
              href="#audit"
              className="sm:col-span-2 rounded-2xl bg-gradient-brand p-6 shadow-glow text-primary-foreground flex items-center justify-between gap-4 hover:opacity-95 transition-opacity"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-80">
                  Prefer a structured chat?
                </p>
                <p className="mt-1 text-lg font-bold">Book your free AI audit →</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
