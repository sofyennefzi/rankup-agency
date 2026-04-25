import logo from "@/assets/a4d-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logo}
          alt="A4D — AI for Digital logo"
          className="h-6 md:h-7 w-auto object-contain dark:[filter:invert(1)_hue-rotate(180deg)]"
        />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} A4D — AI for Digital. AI automation that actually ships.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#access" className="hover:text-foreground transition-colors">Request access</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
