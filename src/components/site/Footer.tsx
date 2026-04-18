export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow text-[11px] font-extrabold tracking-tight"
          >
            RU
          </span>
          <span className="text-gradient">RankUp</span>
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
