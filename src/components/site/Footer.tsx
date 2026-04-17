import logo from "@/assets/rankup-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold">
          <img src={logo} alt="RankUp logo" width={28} height={28} loading="lazy" className="h-7 w-7 object-contain" />
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
