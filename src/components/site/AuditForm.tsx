import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  monthly_revenue: z.string().trim().max(50).optional().or(z.literal("")),
  biggest_challenge: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const AuditForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      website: String(fd.get("website") || ""),
      monthly_revenue: String(fd.get("monthly_revenue") || ""),
      biggest_challenge: String(fd.get("biggest_challenge") || ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast({ title: "Check your details", description: first.message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("audit_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      website: parsed.data.website || null,
      monthly_revenue: parsed.data.monthly_revenue || null,
      biggest_challenge: parsed.data.biggest_challenge || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn't submit", description: error.message, variant: "destructive" });
      return;
    }
    setDone(true);
    toast({ title: "Audit request received 🎉", description: "We'll be in touch within 24 hours." });
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-elevated text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-brand shadow-glow">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tighter text-ink">You're in.</h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          We've received your details. Expect a personal email from our team within 24 hours with next steps for your audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elevated space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required maxLength={255} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Acme Inc." maxLength={120} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" placeholder="acme.com" maxLength={200} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="monthly_revenue">Approx. monthly revenue</Label>
        <Input id="monthly_revenue" name="monthly_revenue" placeholder="$50k – $200k" maxLength={50} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="biggest_challenge">What's the biggest bottleneck in your business right now?</Label>
        <Textarea id="biggest_challenge" name="biggest_challenge" placeholder="E.g. our sales team spends 3h/day on manual lead qualification..." rows={4} maxLength={1000} />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-brand hover:opacity-90 shadow-glow border-0 h-14 text-base">
        {loading ? (
          <><Loader2 className="animate-spin" /> Submitting…</>
        ) : (
          <>Get my free audit <ArrowRight /></>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        We reply within 24h. No spam, ever. Your data stays with us.
      </p>
    </form>
  );
};
