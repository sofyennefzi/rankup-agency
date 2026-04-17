import portrait from "@/assets/sofien-portrait.jpg";

export const FounderStory = () => {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-ink shadow-elevated aspect-[4/5]">
              <img
                src={portrait}
                alt="Sofien Nefzi, founder of RankUp"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Tunis · Building since 2023
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-elevated max-w-[200px]">
              <p className="text-3xl font-bold text-gradient tracking-tighter">20+</p>
              <p className="text-xs text-muted-foreground mt-1">
                AI systems shipped for Tunisian & MENA brands
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Why RankUp Exists
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink leading-[1.05]">
              I kept watching great Tunisian businesses{" "}
              <span className="font-serif text-gradient">drown in busywork</span>.
            </h2>

            <div className="mt-8 space-y-5 text-lg text-foreground leading-relaxed">
              <p>
                After years building software and AI agents for international clients, I noticed the same pattern back home: brilliant founders, talented teams, and operations stuck in 2015 — copy-pasting between Excel, Gmail, and WhatsApp until midnight.
              </p>
              <p>
                Most agencies sell decks. I wanted to ship working systems. So I started RankUp with one rule: <span className="font-semibold text-ink">if it doesn't run in production and save real hours, we don't bill for it.</span>
              </p>
              <p>
                Today RankUp partners with founders, marketing leads and ops directors across Tunisia and the MENA region — building the AI workflows their competitors will wish they'd built two years ago.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-ink leading-none">Sofien Nefzi</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Founder & AI Automation Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
