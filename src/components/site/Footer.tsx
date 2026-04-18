export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1 font-bold leading-none">
          <span className="text-gradient italic font-black text-xl">R</span>
          <span className="text-foreground font-light italic text-xl -ml-0.5">U</span>
          <span className="ml-2 text-gradient font-bold">RankUp</span>
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
