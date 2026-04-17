import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rankup-logo.png";

const links = [
  { label: "Process", href: "#process" },
  { label: "Case study", href: "#case-study" },
  { label: "Pricing", href: "#pricing" },
  { label: "Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <img src={logo} alt="RankUp logo" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-gradient">RankUp</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-brand hover:opacity-90 shadow-glow border-0">
            <a href="#audit">Get free audit</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-3 bg-gradient-brand hover:opacity-90 shadow-glow border-0">
              <a href="#audit" onClick={() => setOpen(false)}>Get free audit</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
