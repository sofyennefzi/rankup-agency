export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold">
          <span className="font-serif italic text-2xl text-foreground">A<span className="text-gradient not-italic font-bold">4</span>D</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} A4D — AI4Digital. AI automation that actually ships.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#access" className="hover:text-foreground transition-colors">Request access</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
