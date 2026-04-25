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
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const RequestAccessForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast({ title: "Check your details", description: first.message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("append-access-request", {
      body: parsed.data,
    });
    setLoading(false);
    if (error || !data?.success) {
      toast({
        title: "Couldn't submit",
        description: error?.message || data?.error || "Please try again.",
        variant: "destructive",
      });
      return;
    }
    setDone(true);
    toast({ title: "Request received 🎉", description: "We'll be in touch shortly." });
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-elevated text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-brand shadow-glow">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tighter text-ink">You're in.</h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          We've received your request. Expect a personal email from our team shortly with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elevated space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required maxLength={120} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required maxLength={255} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Acme Inc." maxLength={160} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us briefly what you'd like to automate or build…" rows={4} maxLength={2000} />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-brand hover:opacity-90 shadow-glow border-0 h-14 text-base">
        {loading ? (
          <><Loader2 className="animate-spin" /> Submitting…</>
        ) : (
          <>Request access <ArrowRight /></>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        We reply within 24h. No spam, ever. Your data stays with us.
      </p>
    </form>
  );
};
