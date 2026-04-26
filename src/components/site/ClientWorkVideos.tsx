import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import video1 from "@/assets/client-work-1.mp4";
import video2 from "@/assets/client-work-2.mp4";
import video3 from "@/assets/client-work-3.mp4";
import video4 from "@/assets/client-work-4.mp4";

const clips = [
  { src: video1, tag: "Fashion · Apparel", title: "Clothing brand product reel" },
  { src: video2, tag: "Cinematic · Brand", title: "Cinematic brand story" },
  { src: video3, tag: "Premium · 1080p", title: "Premium product showcase" },
  { src: video4, tag: "Cinematic · 1080p", title: "Cinematic lifestyle spot" },
];

const VideoCard = ({ src, tag, title, index }: { src: string; tag: string; title: string; index: number }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <article className="group relative rounded-3xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
      <div
        className="relative aspect-[9/16] md:aspect-[4/5] bg-ink-fixed cursor-pointer overflow-hidden"
        onClick={toggle}
      >
        <video
          ref={ref}
          src={src}
          loop
          muted={muted}
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-fixed/80 via-ink-fixed/10 to-transparent pointer-events-none" />

        {/* tag */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-ink shadow-card">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand">
            <Sparkles className="h-3 w-3 text-primary-foreground" />
          </span>
          {tag}
        </div>

        {/* index */}
        <div className="absolute top-4 right-4 font-serif text-3xl text-background/90">
          0{index + 1}
        </div>

        {/* mute toggle */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/80 backdrop-blur text-ink hover:bg-gradient-brand hover:text-primary-foreground transition-all"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        {/* play overlay */}
        {!playing && (
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-background/90 backdrop-blur shadow-elevated group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-ink ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {playing && (
          <div className="absolute inset-0 grid place-items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-background/90 backdrop-blur shadow-elevated">
              <Pause className="h-6 w-6 text-ink" fill="currentColor" />
            </div>
          </div>
        )}

        {/* title at bottom */}
        <div className="absolute bottom-4 left-4 right-16 pointer-events-none">
          <p className="text-sm md:text-base font-semibold text-background leading-tight">
            {title}
          </p>
        </div>
      </div>
    </article>
  );
};

export const ClientWorkVideos = () => {
  return (
    <section id="client-work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Client Brand Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            A little look at the{" "}
            <span className="font-serif text-gradient">brand content</span> we ship for clients.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Cinematic product reels, fashion drops and premium brand spots — generated, edited and
            delivered through our AI-powered pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {clips.map((c, i) => (
            <VideoCard key={i} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
