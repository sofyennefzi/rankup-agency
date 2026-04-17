import { Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import img1 from "@/assets/ai-image-1.jpg";
import img2 from "@/assets/ai-image-2.jpg";
import img3 from "@/assets/ai-image-3.jpg";
import img4 from "@/assets/ai-image-4.jpg";
import img5 from "@/assets/ai-image-5.jpg";
import img6 from "@/assets/ai-image-6.jpg";
import img7 from "@/assets/ai-image-7.jpg";
import img8 from "@/assets/ai-image-8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export const AIImageGallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    const tick = () => {
      if (!paused && el) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 0.6;
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
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="ai-images" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground mb-5 shadow-card">
              <Sparkles className="h-3 w-3 text-primary" />
              AI Image Generation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink leading-[0.95]">
              Visuals crafted by{" "}
              <span className="font-serif text-gradient">our AI pipelines</span>.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Product shots, brand campaigns and ad creatives — generated, refined and shipped at scale.
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

      {/* Edge-to-edge carousel */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-[260px] md:w-[320px] aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <img
                src={src}
                alt={`AI-generated visual by RankUp Agency`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-ink">
                  <Sparkles className="h-2.5 w-2.5 text-primary" />
                  AI Generated
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-10 flex justify-center">
        <a
          href="#audit"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          Get visuals like these
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
