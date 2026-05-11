import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Heart, Sparkles, Globe2, Award, ArrowRight } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Impact — HerRise" },
      { name: "description", content: "Our mission, team and the measurable impact of HerRise on women worldwide." },
      { property: "og:title", content: "About & Impact — HerRise" },
      { property: "og:description", content: "Meet the team and see the impact of investing in women." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2017", title: "HerRise founded", text: "Three women in a small office, one promise: invest in her." },
  { year: "2019", title: "First 1,000 lives", text: "Launched scholarship and microloan programs across 4 states." },
  { year: "2021", title: "Going global", text: "Expanded to East Africa with mobile health clinics." },
  { year: "2023", title: "10,000+ women", text: "Crossed a milestone — and never looked back." },
  { year: "2026", title: "A movement", text: "28,000+ women served across 17 countries today." },
];

const team = [
  { name: "Priya Sharma", role: "Founder & CEO" },
  { name: "Amara Okafor", role: "Programs Director" },
  { name: "Lin Wei", role: "Head of Partnerships" },
  { name: "Sara Hassan", role: "Field Operations" },
];

const transparency = [
  { value: 87, suffix: "%", label: "To programs" },
  { value: 9, suffix: "%", label: "Operations" },
  { value: 4, suffix: "%", label: "Fundraising" },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs border border-border">
              <Sparkles className="w-3 h-3" /> About HerRise
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance">
              We invest in <em className="bg-gradient-primary bg-clip-text text-transparent not-italic">her</em>.<br />
              The world returns the favor.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              HerRise is a global nonprofit working with women, families and partners to dismantle the barriers between women and their potential.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] overflow-hidden shadow-glow">
            <img src={aboutTeam} alt="HerRise community" className="w-full h-[480px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-px mx-auto max-w-7xl py-20 grid md:grid-cols-2 gap-6">
        {[
          { icon: Heart, label: "Mission", title: "To put capital, care and credibility behind women — wherever they are.", color: "from-primary to-primary" },
          { icon: Eye, label: "Vision", title: "A generation where no woman is held back by where she was born.", color: "from-secondary to-accent" },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl bg-card border border-border p-10 shadow-card"
          >
            <b.icon className="w-9 h-9 text-primary mb-4" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{b.label}</p>
            <h3 className="mt-2 font-display text-3xl text-balance">{b.title}</h3>
          </motion.div>
        ))}
      </section>

      {/* Timeline */}
      <section className="container-px mx-auto max-w-5xl py-20">
        <h2 className="font-display text-4xl md:text-5xl text-center text-balance">Our journey</h2>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}
              >
                <span className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-primary ring-4 ring-background" />
                <div className={i % 2 ? "md:col-start-2" : ""}>
                  <p className="font-display text-3xl bg-gradient-primary bg-clip-text text-transparent">{t.year}</p>
                  <h4 className="mt-1 font-medium text-lg">{t.title}</h4>
                  <p className="mt-1 text-muted-foreground">{t.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl">The team behind HerRise</h2>
          <p className="mt-3 text-muted-foreground">Builders, organizers and field workers — united by one belief.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl overflow-hidden bg-card border border-border shadow-card group"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary via-accent to-lavender" />
              <div className="p-5">
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-[2rem] bg-gradient-soft border border-border p-10 md:p-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Transparency</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">Where every rupee goes</h2>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {transparency.map((t) => (
              <div key={t.label} className="text-center">
                <p className="font-display text-5xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent">
                  <Counter to={t.value} suffix={t.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact map */}
      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <Globe2 className="w-5 h-5 text-primary" />
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Community impact</p>
          </div>
          <h3 className="font-display text-3xl">Active in 17 countries</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {["India","Kenya","Bangladesh","Nepal","Uganda","Tanzania","Pakistan","Vietnam","Indonesia","Philippines","Rwanda","Ethiopia"].map((c) => (
              <div key={c} className="px-4 py-3 rounded-xl bg-muted text-sm text-center">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 md:p-16 text-primary-foreground">
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <h3 className="font-display text-4xl md:text-5xl text-balance">Be part of the next 100,000 stories.</h3>
            <div className="md:justify-self-end flex gap-3 flex-wrap">
              <Link to="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-medium hover:scale-[1.02] transition">
                Donate now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
                Explore programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
