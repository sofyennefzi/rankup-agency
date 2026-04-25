import logo from "@/assets/a4d-logo.jpg";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logo}
          alt="A4D — AI4Digital logo"
          className="h-16 md:h-20 w-auto object-contain dark:invert dark:brightness-110"
        />
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
