export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
            <defs>
              <linearGradient id="ru-grad-footer" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(18 100% 58%)" />
                <stop offset="100%" stopColor="hsl(8 95% 50%)" />
              </linearGradient>
            </defs>
            <path d="M5 34 V8 H17 a8 8 0 0 1 0 16 H11 l9 10" stroke="url(#ru-grad-footer)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M22 8 V24 a8 8 0 0 0 16 0 V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-foreground" />
          </svg>
          <span className="font-serif italic text-foreground">RankUp<span className="text-gradient not-italic font-bold">.</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RankUp Agency. AI automation that actually ships.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#audit" className="hover:text-foreground transition-colors">Free audit</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
