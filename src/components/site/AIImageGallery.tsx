import { Sparkles, ArrowUpRight } from "lucide-react";
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
  return (
    <section id="ai-images" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
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
          <a
            href="#audit"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all whitespace-nowrap"
          >
            Get visuals like these
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Compact mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, i) => {
            // Vary heights for a tasteful mosaic feel
            const tall = i === 0 || i === 5;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-ink shadow-card hover:shadow-elevated transition-all duration-500 ${
                  tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`AI-generated visual ${i + 1} by RankUp Agency`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-ink">
                    <Sparkles className="h-2.5 w-2.5 text-primary" />
                    AI Generated
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="#audit"
          className="md:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          Get visuals like these
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
