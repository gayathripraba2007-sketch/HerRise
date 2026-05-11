import { motion } from "framer-motion";
import { Share2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Program } from "@/data/programs";
import { ProgressBar } from "./ProgressBar";

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium glass">
          {program.category}
        </div>
        <button
          aria-label="Share"
          className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full glass hover:scale-110 transition"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="text-xl font-display">{program.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{program.short}</p>
        </div>
        <ProgressBar value={program.raised} goal={program.goal} />
        <Link
          to="/programs/$slug"
          params={{ slug: program.slug }}
          className="mt-auto inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-secondary text-secondary-foreground hover:bg-accent transition group/btn"
        >
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
        </Link>
      </div>
    </motion.article>
  );
}
