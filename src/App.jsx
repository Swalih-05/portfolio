import { useEffect, useState } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Menu,
  Sparkles,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  About,
  Achievements,
  Certifications,
  Contact,
  Education,
  Extracurricular,
  Hero,
  Projects,
  Resume,
  Skills,
  Strengths,
  Workflow
} from "./sections.jsx";
import { navLinks, socialLinks } from "./data.js";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-night"
      exit={{ opacity: 0, transition: { duration: 0.55 } }}
    >
      <div className="relative grid place-items-center">
        <div className="absolute h-32 w-32 rounded-full border border-cyan/20" />
        <motion.div
          className="absolute h-32 w-32 rounded-full border-t-2 border-cyan"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, ease: "linear", repeat: Infinity }}
        />
        <Sparkles className="h-9 w-9 text-cyan" />
      </div>
    </motion.div>
  );
}

function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-glow backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan/15 text-cyan">MS</span>
          <span className="hidden sm:block">Mohammed Saalihi Ali</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} className="icon-button">
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a href="#contact" className="primary-pill">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
        <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-cyan/15 text-cyan shadow-glow backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>Copyright 2026 Mohammed Saalihi Ali. Built with React & Tailwind CSS.</p>
       
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="min-h-screen overflow-hidden bg-night text-white selection:bg-cyan/30">
        <MouseGlow />
        <div className="fixed inset-0 z-0 bg-mesh-radial" />
        <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Strengths />
          <Workflow />
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <Extracurricular />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <div className="pointer-events-none fixed bottom-8 left-8 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs text-slate-400 backdrop-blur-xl xl:flex">
          <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan" />
          Open to web development internships and hackathons
        </div>
      </div>
    </>
  );
}
