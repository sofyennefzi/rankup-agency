import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          RankUp<span className="text-gradient">.Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-gradient-brand hover:opacity-90 shadow-glow border-0">
          <a href="#audit">Get free audit</a>
        </Button>
      </div>
    </header>
  );
};
