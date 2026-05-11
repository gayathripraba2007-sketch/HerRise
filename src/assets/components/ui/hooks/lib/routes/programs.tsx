import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/site/ProgramCard";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — HerRise" },
      { name: "description", content: "Explore HerRise programs across education, entrepreneurship, healthcare, skills and rural support." },
      { property: "og:title", content: "Programs — HerRise" },
      { property: "og:description", content: "Five flagship programs investing in women globally." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Our work</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">
          Five ways your gift transforms lives
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Every program is designed with the women it serves — measured by income earned, classrooms filled and futures rebuilt.
        </p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}
      </div>
    </div>
  );
}
