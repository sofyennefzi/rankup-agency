import { ArrowUpRight, Workflow, Mail, Bot, Tag, MapPin, Rss, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import workflow1 from "@/assets/workflow-1.jpg";
import workflow2 from "@/assets/workflow-2.jpg";
import workflow3 from "@/assets/workflow-3.jpg";
import workflow4 from "@/assets/workflow-4.jpg";
import workflow5 from "@/assets/workflow-5.jpg";
import workflow6 from "@/assets/workflow-6.jpg";

const projects = [
  {
    image: workflow1,
    icon: Bot,
    tag: "AI Agent · WhatsApp",
    title: "WhatsApp AI Assistant with Calendar & CRM",
    description:
      "An AI agent that lives inside WhatsApp — books meetings, manages the client's calendar, updates Google Sheets and sends Gmail follow-ups, fully autonomously.",
    stack: ["WhatsApp", "OpenAI", "Google Calendar", "Sheets", "Gmail"],
  },
  {
    image: workflow2,
    icon: Mail,
    tag: "Cold Outreach · Email",
    title: "Personalized Cold Email Engine",
    description:
      "Pulls leads from Sheets, generates a unique email per prospect using AI templates, sends through Gmail, then logs every status back — running on autopilot.",
    stack: ["Google Sheets", "AI Templates", "Gmail", "Status Logging"],
  },
  {
    image: workflow3,
    icon: Workflow,
    tag: "Web Scraping · Job Apps",
    title: "Automated Cover-Letter Generator",
    description:
      "Scrapes fresh job posts on a schedule with Apify, then uses AI to write a tailored cover letter for each role — saved straight into Google Sheets, ready to send.",
    stack: ["Apify", "OpenAI", "Schedule Trigger", "Google Sheets"],
  },
  {
    image: workflow4,
    icon: Tag,
    tag: "Inbox · Classification",
    title: "AI Email Triage & Auto-Labeling",
    description:
      "Reads every incoming Gmail, uses AI to classify intent and urgency, then applies the right label (or creates a new one) so the inbox sorts itself.",
    stack: ["Gmail", "OpenAI", "Smart Labels", "Loop Logic"],
  },
  {
    image: workflow5,
    icon: MapPin,
    tag: "Lead Scraping · Local SEO",
    title: "Google Maps Lead Scraper to Sheets",
    description:
      "Scrapes local businesses from Google Maps via Apify, enriches each lead with phone, address and website, then auto-appends everything into a clean Google Sheet — ready for outreach.",
    stack: ["Apify", "HTTP Requests", "Google Maps", "Google Sheets"],
  },
  {
    image: workflow6,
    icon: Rss,
    tag: "Content · RSS Monitoring",
    title: "RSS-to-AI Content Intelligence Pipeline",
    description:
      "Monitors RSS feeds on a schedule, splits and filters new items, then runs each through multiple AI models to summarise, classify and append insights into a live Google Sheet.",
    stack: ["RSS", "OpenAI", "Multi-Agent", "Google Sheets"],
  },
];

export const WorkflowShowcase = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    const tick = () => {
      if (!paused && el) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 0.5;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  const loop = [...projects, ...projects];

  return (
    <section id="results" className="relative py-24 md:py-32 overflow-hidden bg-gradient-soft">
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Real Client Work
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
              Workflows we've built that{" "}
              <span className="font-serif text-gradient">actually run</span> in production.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A glimpse inside the automations powering our clients' day-to-day — from AI agents on
              WhatsApp to self-sorting inboxes and personalised outreach at scale.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent shadow-card transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent shadow-card transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-6 md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loop.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={i}
                className="group relative flex-shrink-0 w-[320px] md:w-[440px] rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-fixed">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-90 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-fixed/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-ink shadow-card">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand">
                      <Icon className="h-3 w-3 text-primary-foreground" />
                    </span>
                    {p.tag}
                  </div>

                  <div className="absolute top-4 right-4 font-serif text-3xl text-background/90">
                    0{(i % projects.length) + 1}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#audit"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Build something like this
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
