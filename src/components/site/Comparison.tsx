import { Check, X, Minus } from "lucide-react";

type Cell = "yes" | "no" | "partial";

const rows: { label: string; rankup: Cell; inhouse: Cell; freelancer: Cell; nothing: Cell }[] = [
  { label: "Live in 3 weeks", rankup: "yes", inhouse: "no", freelancer: "partial", nothing: "no" },
  { label: "Production-ready code", rankup: "yes", inhouse: "yes", freelancer: "partial", nothing: "no" },
  { label: "AI + automation expertise", rankup: "yes", inhouse: "partial", freelancer: "partial", nothing: "no" },
  { label: "No hiring or onboarding", rankup: "yes", inhouse: "no", freelancer: "yes", nothing: "yes" },
  { label: "Owned by your team after launch", rankup: "yes", inhouse: "yes", freelancer: "partial", nothing: "no" },
  { label: "Predictable monthly cost", rankup: "yes", inhouse: "no", freelancer: "no", nothing: "yes" },
  { label: "Saves 40+ hours / week", rankup: "yes", inhouse: "partial", freelancer: "partial", nothing: "no" },
];

const columns = [
  { key: "rankup", label: "RankUp", highlight: true, sub: "Done-for-you" },
  { key: "inhouse", label: "In-house hire", highlight: false, sub: "120k+ TND/yr" },
  { key: "freelancer", label: "Freelancer", highlight: false, sub: "Variable quality" },
  { key: "nothing", label: "Doing nothing", highlight: false, sub: "The hidden tax" },
] as const;

const renderCell = (v: Cell, highlight: boolean) => {
  if (v === "yes")
    return (
      <span
        className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${
          highlight ? "bg-gradient-brand shadow-glow" : "bg-accent"
        }`}
      >
        <Check
          className={`h-4 w-4 ${highlight ? "text-primary-foreground" : "text-accent-foreground"}`}
        />
      </span>
    );
  if (v === "partial")
    return (
      <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-secondary border border-border">
        <Minus className="h-4 w-4 text-muted-foreground" />
      </span>
    );
  return (
    <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-secondary border border-border">
      <X className="h-4 w-4 text-muted-foreground" />
    </span>
  );
};

export const Comparison = () => {
  return (
    <section id="compare" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Why RankUp
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
            The honest{" "}
            <span className="font-serif text-gradient">comparison</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Stack us against the alternatives. We'll wait.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                    Feature
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c.key}
                      className={`p-6 text-center ${
                        c.highlight ? "bg-gradient-brand text-primary-foreground" : ""
                      }`}
                    >
                      <div className={`text-sm font-bold ${c.highlight ? "" : "text-ink"}`}>
                        {c.label}
                      </div>
                      <div
                        className={`mt-1 text-[10px] uppercase tracking-[0.15em] font-medium ${
                          c.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {c.sub}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={`${i !== rows.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <td className="p-5 text-sm font-medium text-ink">{r.label}</td>
                    {columns.map((c) => (
                      <td
                        key={c.key}
                        className={`p-5 text-center ${c.highlight ? "bg-accent/40" : ""}`}
                      >
                        {renderCell(r[c.key as "rankup" | "inhouse" | "freelancer" | "nothing"], c.highlight)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
