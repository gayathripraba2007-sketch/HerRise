import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Target, Users, TrendingUp } from "lucide-react";
import { getProgram, programs, type Program } from "@/data/programs";
import { ProgressBar } from "@/components/site/ProgressBar";
import { ProgramCard } from "@/components/site/ProgramCard";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.program.title} — HerRise` },
      { name: "description", content: loaderData?.program.short ?? "" },
      { property: "og:title", content: `${loaderData?.program.title} — HerRise` },
      { property: "og:description", content: loaderData?.program.short ?? "" },
      { property: "og:image", content: loaderData?.program.image ?? "" },
    ],
  }),
  component: ProgramDetail,
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="font-display text-5xl">Program not found</h1>
      <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="w-4 h-4" /> Back to programs
      </Link>
    </div>
  ),
});

function ProgramDetail() {
  const { program } = Route.useLoaderData() as { program: Program };
  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
        <div className="relative container-px mx-auto max-w-7xl h-full flex flex-col justify-end pb-12">
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-white/90 mb-4 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> All programs
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium glass-dark text-white">{program.category}</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl text-white text-balance max-w-3xl">{program.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{program.short}</p>
          </motion.div>
        </div>
      </section>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/* Story */}
          <section>
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">The Story</p>
            <h2 className="mt-2 font-display text-4xl text-balance">{program.mission}</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{program.description}</p>
          </section>

          {/* Goals */}
          <section>
            <h3 className="font-display text-3xl flex items-center gap-3"><Target className="text-primary" /> Mission & goals</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {program.goals.map((g, i) => (
                <li key={i} className="rounded-2xl bg-card border border-border p-5 shadow-card">
                  <span className="text-xs font-medium text-primary">Goal 0{i+1}</span>
                  <p className="mt-1 font-medium">{g}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Metrics */}
          <section>
            <h3 className="font-display text-3xl flex items-center gap-3"><TrendingUp className="text-primary" /> Impact metrics</h3>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {program.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-gradient-soft border border-border p-6 text-center">
                  <p className="font-display text-3xl bg-gradient-primary bg-clip-text text-transparent">{m.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Beneficiaries */}
          <section className="rounded-3xl bg-secondary/40 border border-border p-8">
            <Users className="w-8 h-8 text-primary mb-3" />
            <p className="text-sm text-muted-foreground">Beneficiaries to date</p>
            <p className="font-display text-5xl mt-1">{program.beneficiaries.toLocaleString()}+</p>
            <p className="mt-3 text-muted-foreground max-w-xl">Each number is a name, a family and a future. Your support adds one more.</p>
          </section>

          {/* Gallery */}
          <section>
            <h3 className="font-display text-3xl">Gallery</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[program.image, ...related.map(r => r.image)].slice(0, 6).map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl group">
                  <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky donate */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-3xl bg-card border border-border p-7 shadow-card">
            <p className="text-sm text-muted-foreground">Funding progress</p>
            <div className="mt-3"><ProgressBar value={program.raised} goal={program.goal} /></div>
            <Link
              to="/donate"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition"
            >
              <Heart className="w-4 h-4" fill="currentColor" /> Donate to this program
            </Link>
            <p className="mt-4 text-xs text-muted-foreground text-center">100% secure · 80G receipt issued</p>
          </div>
        </aside>
      </div>

      {/* Related */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <h3 className="font-display text-3xl mb-8">Related programs</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}
        </div>
      </section>
    </article>
  );
}
