import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Quote, Users, ChevronLeft, ChevronRight, GraduationCap, Briefcase, Stethoscope, Wrench, Leaf, HandHeart } from "lucide-react";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero-women.jpg";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HerRise — Empowering women, lifting communities" },
      { name: "description", content: "Join HerRise to fund education, enterprise, healthcare and skills for women worldwide." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 28000, suffix: "+", label: "Women supported" },
  { value: 62, suffix: "", label: "Partner schools" },
  { value: 1850, suffix: "", label: "Businesses launched" },
  { value: 47, suffix: "", label: "Villages reached" },
];

const testimonials = [
  {
    quote:
      "HerRise didn't just give me a loan — they believed in me. Today I employ four women in my village.",
    name: "Asha Devi",
    role: "Entrepreneur, Rajasthan",
  },
  {
    quote:
      "I'm the first girl in my family to finish school. The scholarship changed everything.",
    name: "Maria Lopez",
    role: "Student, age 17",
  },
  {
    quote:
      "The mobile clinic saved my pregnancy. Care arrived when no one else would.",
    name: "Grace Owino",
    role: "Mother of two",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedPrograms />
      <Stats />
      <Testimonials />
      <Volunteer />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - rect.left - 210);
        my.set(e.clientY - rect.top - 210);
      }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-accent/50 blur-3xl"
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/40 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/50 blur-3xl animate-blob" style={{ animationDelay: "-7s" }} />

      <motion.div style={{ y: y2 }} className="pointer-events-none absolute top-24 left-[10%] w-3 h-3 rounded-full bg-primary/40 animate-float-slow" />
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute top-1/3 right-[8%] w-5 h-5 rounded-full bg-rose/60 animate-float-rev" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute bottom-24 left-[20%] w-4 h-4 rounded-sm rotate-45 bg-lavender/70 animate-float-slow" />

      <div className="relative container-px mx-auto max-w-7xl pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm border border-border"
          >
            <Sparkles className="w-3.5 h-3.5" /> A movement for women, by women
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-balance text-foreground"
          >
            When she rises,<br />
            <span className="text-shimmer italic">the world rises</span> with her.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            HerRise invests in women through education, entrepreneurship, healthcare and skills — building communities that flourish for generations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Heart className="w-4 h-4" fill="currentColor" /> Donate Now
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-border text-foreground hover:bg-card transition"
            >
              Explore Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0,1,2,3].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-secondary to-accent" />
              ))}
            </div>
            <p><span className="font-semibold text-foreground">12,400+ donors</span> from 38 countries</p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow">
            <img src={heroImg} alt="Women supporting each other" width={1600} height={1024} className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-card border border-border max-w-[260px]"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Lives changed</p>
            <p className="font-display text-3xl mt-1"><Counter to={28412} />+</p>
            <p className="text-xs text-muted-foreground mt-1">across 17 countries</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    { icon: GraduationCap, label: "Education" },
    { icon: Briefcase, label: "Entrepreneurship" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Wrench, label: "Skill Building" },
    { icon: Leaf, label: "Rural Support" },
    { icon: HandHeart, label: "Mentorship" },
    { icon: Sparkles, label: "Equality" },
    { icon: Users, label: "Community" },
  ];
  const row = [...items, ...items];
  return (
    <section aria-hidden className="relative py-8 border-y border-border bg-card/40 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-12 animate-marquee w-max">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-muted-foreground">
            <it.icon className="w-5 h-5 text-primary" />
            <span className="font-display text-2xl md:text-3xl whitespace-nowrap">{it.label}</span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedPrograms() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Our Programs</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-balance">Where your support goes</h2>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
          View all programs <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.slice(0, 3).map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-gradient-soft border-y border-border">
      <div className="container-px mx-auto max-w-7xl py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <p className="font-display text-5xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="container-px mx-auto max-w-5xl py-24">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Voices</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Stories of courage</h2>
      </div>
      <motion.figure
        key={i}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-3xl bg-card border border-border shadow-card p-10 md:p-14"
      >
        <Quote className="absolute top-8 right-8 w-12 h-12 text-accent" />
        <blockquote className="font-display text-2xl md:text-3xl leading-snug text-balance">
          “{t.quote}”
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-primary" />
          <div>
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </figcaption>
      </motion.figure>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={prev} aria-label="Previous" className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-accent/40">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to ${k+1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-accent/40">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function Volunteer() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 md:p-16 text-primary-foreground">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Users className="w-10 h-10 mb-4 opacity-90" />
            <h3 className="font-display text-4xl md:text-5xl text-balance">Join the movement</h3>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              Lend your skills, time or voice. Volunteers power every program we run — find a role that fits you.
            </p>
          </div>
          <div className="flex md:justify-end gap-3 flex-wrap">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-medium hover:scale-[1.02] transition">
              Become a volunteer
            </a>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
