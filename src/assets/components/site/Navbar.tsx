import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About & Impact" },
  { to: "/donate", label: "Donate" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
            <Heart className="w-4 h-4" fill="currentColor" />
          </span>
          <span className="font-display text-2xl tracking-tight text-foreground">
            HerRise
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-foreground hover:bg-accent/40 transition"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "px-4 py-2 rounded-full text-sm text-foreground bg-accent/60" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Heart className="w-4 h-4" /> Donate
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-accent/40"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-foreground/90 hover:bg-accent/40"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-2xl bg-gradient-primary text-primary-foreground font-medium shadow-soft"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
