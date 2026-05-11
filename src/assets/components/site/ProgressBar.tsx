import { motion } from "framer-motion";

export function ProgressBar({ value, goal }: { value: number; goal: number }) {
  const pct = Math.min(100, Math.round((value / goal) * 100));
  return (
    <div>
      <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
        <span className="font-medium text-foreground">₹{value.toLocaleString()}</span>
        <span>of ₹{goal.toLocaleString()}</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full bg-gradient-primary rounded-full"
        />
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">{pct}% funded</p>
    </div>
  );
}
