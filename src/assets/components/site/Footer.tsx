import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-soft">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-2xl bg-gradient-primary text-primary-foreground">
              <Heart className="w-4 h-4" fill="currentColor" />
            </span>
            <span className="font-display text-2xl">HerRise</span>
          </Link>
          <p className="mt-4 max-w-md text-muted-foreground">
            A global movement investing in women through education, enterprise, healthcare and community.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex w-full max-w-md items-center gap-2 p-1.5 rounded-full bg-card shadow-card border border-border"
          >
            <input
              type="email"
              placeholder="Your email for our newsletter"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
            />
            <button className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm">
              Join <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/programs" className="hover:text-foreground">Programs</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About & Impact</Link></li>
            <li><Link to="/donate" className="hover:text-foreground">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Follow</h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-10 h-10 rounded-full bg-card border border-border text-foreground/70 hover:text-foreground hover:shadow-card transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} HerRise Foundation. All rights reserved.</p>
          <p>Registered nonprofit · 80G & FCRA compliant</p>
        </div>
      </div>
    </footer>
  );
}
