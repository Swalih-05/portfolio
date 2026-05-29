import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDownToLine,
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  XCircle
} from "lucide-react";
import { motion } from "framer-motion";
import {
  achievements,
  activities,
  certifications,
  profileFacts,
  projects,
  roles,
  skills,
  stats,
  strengths,
  workflowSteps
} from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";

function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>}
    </motion.div>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {children}
    </section>
  );
}

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const delay = deleting ? 38 : 74;
    const timer = window.setTimeout(() => {
      if (!deleting && text === fullText) {
        window.setTimeout(() => setDeleting(true), 900);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }
      setText(fullText.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, roleIndex, text]);

  return (
    <span className="inline-flex min-h-[2.1rem] items-center font-mono text-lg font-bold text-cyan sm:text-2xl">
      {text}
      <span className="ml-1 h-6 w-0.5 animate-pulse bg-cyan" />
    </span>
  );
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        top: `${(index * 47) % 100}%`,
        delay: (index % 9) * 0.2,
        duration: 3.8 + (index % 5) * 0.45
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan/70 shadow-[0_0_18px_rgba(34,211,238,0.85)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -24, 0], opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const number = Number.parseFloat(value);

  useEffect(() => {
    let frame = 0;
    const total = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / total, 1);
      setCount(number * progress);
      if (progress === 1) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [number]);

  return (
    <span>
      {Number.isInteger(number) ? Math.round(count) : count.toFixed(2)}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-20 pt-32">
      <ParticleField />
      <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
          
          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Mohammed Saalihi Ali
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-6">
            <Typewriter />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            B.E. Artificial Intelligence and Data Science student with hands-on experience in MERN stack development and building full-stack web applications through projects and hackathons. Skilled in implementing user authentication, REST APIs, and database integration. Seeking internship opportunities in web development to apply and enhance full-stack development skills.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="hero-button">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={import.meta.env.VITE_RESUME_URL || "/resume.pdf"} download className="secondary-button">
              Download Resume <ArrowDownToLine className="h-4 w-4" />
            </a>
         
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 grid gap-3 sm:grid-cols-3">
            {profileFacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-panel rounded-2xl p-4">
                <Icon className="mb-3 h-5 w-5 text-cyan" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-1 font-semibold text-slate-100">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-[400px]"
        >
          <div className="absolute inset-0 animate-orbit rounded-full border border-cyan/15" />
          <div className="absolute inset-8 animate-pulseGlow rounded-full bg-gradient-to-br from-cyan/30 via-blue-500/10 to-violet/30 blur-2xl" />
          <div className="relative grid h-full place-items-center rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-violet backdrop-blur-xl">
            <div className="absolute inset-4 rounded-[1.5rem] border border-cyan/15" />
            <div className="relative grid aspect-square w-full max-w-[330px] place-items-center overflow-hidden rounded-full border border-cyan/15 bg-slate-900">
              <img
                src="/profile2.jpeg"
                alt="Mohammed Saalihi Ali"
                className="h-[95%] w-[74%] object-contain object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="About"
          title="CAREER OBJECTIVE"
          description="To contribute to a dynamic and growth-oriented organization by applying my analytical, problem-solving, technical, communication and presentation skills while continuously learning, contributing effectively, and growing professionally."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-4"
        >
          {[
            "Interested in creating modern and responsive web applicaitions",
            "Experienced in working on team projects and solving real-world problems",
            "Focused on improving development and provblem-solving skills."
          ].map((text) => (
            <motion.div key={text} variants={fadeUp} className="glass-panel rounded-3xl p-6">
              <p className="leading-8 text-slate-300">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="glass-panel rounded-3xl p-6">
            <p className="text-4xl font-black text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const education = [
  {
    degree: "B.E. Artificial Intelligence and Data Science",
    institution: "Bearys Institute of Technology, Mangalore - Visvesvaraya Technological University (VTU), Belagavi",
    period: "2023 - 2027",
    scoreLabel: "CGPA",
    score: "8.43",
    detail: "Upto 5th semester",
    icon: GraduationCap
  },
  {
    degree: "Higher Secondary Education (Class 12)",
    institution: "Vocational Higher Secondary Education (VHSE), Kunjathur, Kasaragod - State Board",
    period: "2021 - 2023",
    scoreLabel: "Percentage",
    score: "94%",
    detail:"" ,
    icon: School
  },
  {
    degree: "SSLC (Class 10)",
    institution: "Al-Saqaf English Medium School, Udyawar, Manjeshwar, Kasaragod - State Board",
    period: "2021",
    scoreLabel: "Percentage",
    score: "98%",
    detail: "",
    icon: Award
  }
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        center
        eyebrow="Academic journey"
        title="EDUCATION"
        description=""
      />
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent md:block" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-5"
        >
          {education.map(({ degree, institution, period, scoreLabel, score, detail, icon: Icon }, index) => (
            <motion.article
              key={degree}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group grid gap-4 md:grid-cols-[3rem_1fr]"
            >
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-slate-950 text-cyan shadow-glow transition duration-300 group-hover:border-cyan/60 group-hover:bg-cyan/10">
                <Icon className="h-6 w-6" />
              </div>
              <div className="interactive-card p-0">
                <div className="grid gap-5 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-xs font-bold text-cyan">
                        {period}
                      </span>
                      <span className="font-mono text-xs text-slate-500">Education 0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-black text-white">{degree}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{institution}</p>
                  </div>
                  <div className="rounded-2xl border border-cyan/15 bg-cyan/10 p-5 text-left shadow-glow lg:min-w-40 lg:text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{scoreLabel}</p>
                    <p className="mt-2 text-3xl font-black text-white">{score}</p>
                    <p className="mt-1 text-xs text-slate-400">{detail}</p>
                  </div>
                </div>
                <motion.div
                  className="h-1 rounded-full bg-gradient-to-r from-cyan via-blue-500 to-violet"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Strengths() {
  return (
    <Section id="strengths">
      <SectionHeader
        center
        eyebrow="What I Bring to a Team"
        title="Turning ideas into structured and practical solutions"
        description=""
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
      >
        {strengths.map(({ icon: Icon, title, body }, index) => (
          <motion.article key={title} variants={fadeUp} whileHover={{ y: -8 }} className="interactive-card group">
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan ring-1 ring-cyan/20">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{body}</p>
          </motion.article>
        ))}
      </motion.div>
          {[].map((item, index) => (
            <div key={item} className="relative rounded-2xl border border-cyan/15 bg-white/[0.03] p-5">
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan to-violet"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${58 + index * 12}%` }}
                  viewport={viewport}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                />
              </div>
            </div>
          ))}
    </Section>
  );
}

export function Workflow() {
  return (
    <Section id="workflow">
      <SectionHeader
        eyebrow="Development Workflow"
        title="From problem statement to a polished final demonstration."
        description="A structured process for turning raw ideas into understandable, demo-ready technical products."
      />
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent md:block" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4">
          {workflowSteps.map((step, index) => (
            <motion.div key={step} variants={fadeUp} className="group grid gap-4 md:grid-cols-[3rem_1fr]">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-slate-950 text-cyan shadow-glow">
                {index + 1}
              </div>
              <div className="glass-panel rounded-3xl p-5 transition duration-300 group-hover:border-cyan/40">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white">{step}</h3>
                  <TerminalSquare className="h-5 w-5 text-cyan" />
                </div>
                <motion.div
                  className="mt-4 h-1 rounded-full bg-gradient-to-r from-cyan via-blue-500 to-violet"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        center
        eyebrow="Skills"
        title="TECHNICAL AND SOFT SKILLS"
        // description=""
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ category, icon: Icon, items, level }) => (
          <motion.div key={category} variants={fadeUp} whileHover={{ y: -6 }} className="interactive-card">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/15 text-cyan">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-white">{category}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-slate-400">
                <span>Current strength</span>
                <span>{level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={viewport}
                  transition={{ duration: 0.9 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured work"
        title="PROJECTS"
        description=""
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -8 }} className="project-card">
            <div className="mb-5 grid h-44 place-items-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_32%),linear-gradient(145deg,rgba(15,23,42,0.95),rgba(2,6,23,0.9))]">
              <Code2 className="h-14 w-14 text-cyan/70" />
            </div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-cyan">{project.year}</span>
              <span className="rounded-full bg-violet/10 px-3 py-1 text-xs text-violet-200">Project 0{index + 1}</span>
            </div>
            <h3 className="text-xl font-black text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-slate-300">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl border border-cyan/15 bg-cyan/10 p-3 text-sm font-semibold text-cyan">
              {project.achievement}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={project.github}   target="_blank" rel="noopener noreferrer" className="small-action">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={project.live} className="small-action">
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Achievements" title="COMPETITIONS AND HACKATHONS" />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 md:grid-cols-2">
        {achievements.map(({ title, detail, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp} className="glass-panel rounded-3xl p-6">
            <Icon className="mb-4 h-8 w-8 text-cyan" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader center eyebrow="Credentials" title="CERTIFICATIONS" />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 md:grid-cols-3">
        {certifications.map((cert) => (
          <motion.div key={cert} variants={fadeUp} whileHover={{ y: -6 }} className="interactive-card">
            <Award className="mb-5 h-8 w-8 text-cyan" />
            <p className="font-semibold leading-7 text-white">{cert}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function Extracurricular() {
  return (
    <Section id="extracurricular">
      <SectionHeader
        eyebrow="Extracurricular ACTIVITIES"
        title="Creative range beyond code."
        description="Exploring creativity through art, public speaking, design and literary activities beyond academics"
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-wrap gap-3">
        {activities.map(({ label, icon: Icon }) => (
          <motion.div key={label} variants={fadeUp} whileHover={{ scale: 1.04 }} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-cyan" />
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Profile"
          title="Resume"
          description="Download my resume to learn more about my education, technical skills, projects, certifications,extracurricular activities and additioinal informations."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="glass-panel rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">Resume Preview</p>
              <h3 className="mt-3 text-2xl font-black text-white">Mohammed Saalihi Ali</h3>
              <p className="mt-2 text-slate-400">AI & Data Science Student | MERN Stack Developer</p>
            </div>
            <a href={import.meta.env.VITE_RESUME_URL || "/resume.pdf"} download className="hero-button">
              Download <ArrowDownToLine className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <GraduationCap className="mb-4 h-7 w-7 text-cyan" />
              <h4 className="font-bold text-white">B.E. Artificial Intelligence and Data Science</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Bearys Institute of Technology, Mangalore | VTU Belagavi | 2023-Present | CGPA 8.43
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <ShieldCheck className="mb-4 h-7 w-7 text-cyan" />
              <h4 className="font-bold text-white">Technical Highlights</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                User authentication, REST APIs, database integration, AI-driven recommendations, ML interfaces, and responsive UI components.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (form.website) return "Spam protection triggered.";
    if (form.name.trim().length < 2) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (form.subject.trim().length < 4) return "Please add a clear subject.";
    if (form.message.trim().length < 12) return "Please write a message with a little more detail.";
    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS environment variables are missing. Add them to .env before sending."
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", message: "" });
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          to_email: import.meta.env.VITE_CONTACT_TO_EMAIL || "mohammedsalihiali@gmail.com"
        },
        { publicKey }
      );
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
      setStatus({ type: "success", message: "Message sent successfully. Thank you for reaching out." });
    } catch {
      setStatus({ type: "error", message: "Something went wrong while sending. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Contact"
          title="Let's create impactful digital solutions together."
          description="Open to new opportunities, collaborations and development projects."
        />
        <motion.form
          onSubmit={submit}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="glass-panel rounded-3xl p-6"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={update}
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FloatingInput label="Name" name="name" value={form.name} onChange={update} />
            <FloatingInput label="Email" name="email" type="email" value={form.email} onChange={update} />
          </div>
          <FloatingInput label="Subject" name="subject" value={form.subject} onChange={update} />
          <label className="floating-field min-h-[180px]">
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder=" "
              rows="6"
              className="peer field-input resize-none pt-8"
            />
            <span className="floating-label">Message</span>
          </label>
          {status.message && (
            <div className={`mt-5 flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-rose-400/30 bg-rose-400/10 text-rose-200"}`}>
              {status.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {status.message}
            </div>
          )}
          <button type="submit" disabled={loading} className="mt-6 w-full justify-center hero-button disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function FloatingInput({ label, name, value, onChange, type = "text" }) {
  return (
    <label className="floating-field">
      <input name={name} type={type} value={value} onChange={onChange} placeholder=" " className="peer field-input" />
      <span className="floating-label">{label}</span>
    </label>
  );
}
