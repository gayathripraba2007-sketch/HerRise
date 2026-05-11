import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Lock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — HerRise" },
      { name: "description", content: "Make a secure donation that funds education, enterprise, healthcare and skills for women." },
      { property: "og:title", content: "Donate — HerRise" },
      { property: "og:description", content: "Your gift powers women's futures. Donate securely to HerRise." },
    ],
  }),
  component: DonatePage,
});

const PRESETS = [500, 1000, 2500, 5000, 10000];

const IMPACT = [
  { amount: 500, text: "One week of training support for a young woman" },
  { amount: 1000, text: "Mentorship resources for an aspiring entrepreneur" },
  { amount: 5000, text: "Small business starter assistance kit" },
];

function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const finalAmount = custom ? Number(custom) || 0 : amount;
  const matched = useMemo(() => Math.round(finalAmount * 0.2), [finalAmount]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 -z-10" />
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-xs">
            <Sparkles className="w-3 h-3" /> 100% goes to programs
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-balance">Your gift is her beginning.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Choose any amount. Every rupee is tracked, audited and reported back to you.
          </p>

          <div className="mt-10 rounded-3xl bg-card border border-border shadow-card p-7 md:p-10">
            {/* Frequency */}
            <div className="grid grid-cols-2 p-1 rounded-full bg-muted mb-8">
              {(["one-time","monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`py-2.5 rounded-full text-sm font-medium capitalize transition ${
                    frequency === f ? "bg-card shadow-card text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {f === "one-time" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            <p className="text-sm font-medium mb-3">Choose an amount</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => { setAmount(p); setCustom(""); }}
                  className={`py-3 rounded-2xl text-sm font-medium border transition ${
                    !custom && amount === p
                      ? "bg-gradient-primary text-primary-foreground border-transparent shadow-soft"
                      : "bg-background border-border hover:border-primary/40"
                  }`}
                >
                  ₹{p.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium">Custom amount</label>
              <div className="mt-2 flex items-center rounded-2xl border border-border bg-background overflow-hidden focus-within:border-primary/60">
                <span className="px-4 text-muted-foreground">₹</span>
                <input
                  type="number"
                  min="100"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="flex-1 py-3 bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Donor details */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Jane Doe" />
              <Field label="Email" placeholder="jane@example.com" type="email" />
              <Field label="Phone" placeholder="+91 90000 00000" />
              <div>
                <label className="text-sm font-medium">Dedicate to</label>
                <select className="mt-2 w-full py-3 px-4 rounded-2xl border border-border bg-background outline-none focus:border-primary/60">
                  <option>Where it's needed most</option>
                  <option>Girls Education</option>
                  <option>Women Entrepreneurship</option>
                  <option>Healthcare Access</option>
                  <option>Skill Development</option>
                  <option>Rural Women Support</option>
                </select>
              </div>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate ₹{finalAmount.toLocaleString()} {frequency === "monthly" && "/ month"}
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> 256-bit secure</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> 80G tax exempt</span>
            </div>
          </div>
        </motion.section>

        {/* Summary + impact */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="rounded-3xl glass border border-border p-7 shadow-card">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Donation summary</p>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-muted-foreground">Your gift</span>
              <span className="font-medium">₹{finalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Estimated match</span>
              <span className="font-medium text-primary">+ ₹{matched.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Frequency</span>
              <span className="font-medium capitalize">{frequency}</span>
            </div>
            <div className="my-5 border-t border-border" />
            <div className="flex justify-between items-end">
              <span className="text-sm">Total impact</span>
              <span className="font-display text-3xl bg-gradient-primary bg-clip-text text-transparent">
                ₹{(finalAmount + matched).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Your impact</p>
            {IMPACT.map((i) => (
              <div
                key={i.amount}
                className={`rounded-2xl p-5 border transition ${
                  finalAmount >= i.amount
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-soft"
                    : "bg-card border-border"
                }`}
              >
                <p className="text-xs opacity-80">₹{i.amount.toLocaleString()}</p>
                <p className="mt-1 font-medium leading-snug">{i.text}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...p}
        className="mt-2 w-full py-3 px-4 rounded-2xl border border-border bg-background outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}
