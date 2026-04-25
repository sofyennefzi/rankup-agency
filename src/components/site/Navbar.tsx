import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Solution", href: "#services" },
  { label: "Work", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
            <defs>
              <linearGradient id="ru-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(18 100% 58%)" />
                <stop offset="100%" stopColor="hsl(8 95% 50%)" />
              </linearGradient>
            </defs>
            <path
              d="M5 34 V8 H17 a8 8 0 0 1 0 16 H11 l9 10"
              stroke="url(#ru-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M22 8 V24 a8 8 0 0 0 16 0 V8"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-foreground"
            />
          </svg>
          <span className="font-serif italic text-xl tracking-tight text-foreground">A4D<span className="text-gradient not-italic font-bold">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-brand hover:opacity-90 shadow-glow border-0">
            <a href="#access">Request access</a>
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
              <a href="#access" onClick={() => setOpen(false)}>Request access</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
