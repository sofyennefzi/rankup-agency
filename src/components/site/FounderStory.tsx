import portrait from "@/assets/sofien-portrait.jpg";
import journeyTutorial from "@/assets/journey-tutorial.jpg";
import journeyNotes from "@/assets/journey-notes.jpg";
import journeyGear from "@/assets/journey-gear.jpg";
import journeyWorkflow from "@/assets/journey-workflow.jpg";

const journey = [
  { src: journeyTutorial, label: "Studying agency frameworks", caption: "Late-night tutorials" },
  { src: journeyNotes, label: "Mapping systems by hand", caption: "Notebook + Claude" },
  { src: journeyGear, label: "Shooting client content", caption: "Sony FX30 · DJI Pocket" },
  { src: journeyWorkflow, label: "Reverse-engineering n8n flows", caption: "Studying viral systems" },
];

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
              From software engineer to{" "}
              <span className="font-serif text-gradient">AI automation founder</span>.
            </h2>

            <div className="mt-8 space-y-5 text-lg text-foreground leading-relaxed">
              <p>
                I started out as a software engineer — and quickly realised how brutally competitive the field had become. Everyone could code. The market was saturated, the differentiation thin.
              </p>
              <p>
                Then I discovered AI automation, and something clicked. I went all-in: invested my own money in premium AI tools, spent nights and weekends mastering image generation, video, copywriting and multi-step workflows that actually replace human work.
              </p>
              <p>
                I started taking on clients one by one — small projects first, then bigger systems. Every win confirmed the same thing: <span className="font-semibold text-ink">businesses don't need more employees, they need smarter pipelines.</span>
              </p>
              <p>
                That's how RankUp was born. An agency built on real production experience, real tools, and real obsession — helping ambitious Tunisian and MENA brands grow on autopilot while their competitors are still doing it by hand.
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

        {/* Behind the scenes strip */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Behind the scenes
              </p>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-ink leading-[1.1] max-w-xl">
                The unglamorous reps that built the agency.
              </h3>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
              No shortcuts. Hundreds of hours studying, building, breaking and rebuilding systems.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {journey.map((item, i) => (
              <figure
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl bg-ink shadow-card hover:shadow-elevated transition-all aspect-[4/5] ${
                  i % 2 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                    {item.caption}
                  </p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-background leading-tight">
                    {item.label}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
