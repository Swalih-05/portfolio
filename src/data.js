import {
  BrainCircuit,
  Code2,
  Database,
  Github,
  GitBranch,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Mic2,
  Palette,
  PenTool,
  Presentation,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Workflow,
  Briefcase,
  Brain,
  Target
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#strengths" },
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Swalih-05", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammedsaalihiali", icon: Linkedin },
];

export const roles = [
  "MERN Stack Developer",
  "AI & Data Science Student",
  "Technology Enthusiast",
  "Software Engineer",
  ""
];

export const stats = [
 
];

export const profileFacts = [
  { icon: Briefcase, label: "Experience", value: "Hackathons ● Team Projects ● Competitions" },
  { icon: Brain, label: "Specialisation", value: "Artificial Intelligence and Web development" },
  { icon: Target, label: "Goal", value: "Creating practical solutions for real-world problems " }
];

export const strengths = [
  {
    icon: Presentation,
    title: "Presentation & Communication",
    body:
      "Strong communication and public-speaking ability shaped through elocution, presentations and hackathon demonstrations."
  },
  {
    icon: Route,
    title: "System Architecture & User Flow Planning",
    body:
      "Skilled at planning User-flow diagrams, UI components, Backend APIs and Architecture before implementation."
  },
  {
    icon: ServerCog,
    title: "Backend Development & Authentication",
    body:
      "Hands-on experience in working on user authentication, REST APIs and Database integration."
  },
  {
    icon: Users,
    title: "Hackathon Collaboration",
    body:
      "Comfortable in fast-paced team environments, including 24-hour national-level hackathons and group projects."
  }
];

export const workflowSteps = [
  "Understanding the Problem",
  "Planning User Flow",
  "Designing Architecture",
  "Backend & Database Setup",
  "Frontend Development",
  "Testing & Optimization",
  "Final Presentation & Demonstration"
];

export const skills = [
  { category: "Web Development", icon: Code2, items: ["HTML", "CSS", "React", "Node.js", "Express.js"], level: 86 },
  { category: "Programming Languages", icon: BrainCircuit, items: ["C", "Python", "JavaScript"], level: 82 },
  { category: "Databases", icon: Database, items: ["MongoDB", "MySQL"], level: 80 },
  { category: "Tools & Platforms", icon: GitBranch, items: ["Git", "GitHub", "VS Code", "Insomnia", "Google Colab"], level: 88 },
  {
    category: "Soft Skills",
    icon: Mic2,
    items: ["Team Leadership", "Communication", "Problem Solving"],
    level: 90
  }
];

export const projects = [
  {
    title: "Smart Pathways for Personalised Learning and Career Guidance",
    year: "2025",
    description:
      "Built a MERN stack web application for personalised learning and career guidance with AI-driven recommendations.",
    features: ["User authentication", "Backend APIs", "Database integration", "UI components", "Git/GitHub version control"],
    achievement: "Secured 2nd Prize at AI Sparkathon 2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI"],
    github: "https://github.com/samhoon000/Career-Guidance",
    
  },
  {
    title: "Restaurant Table Reservation Web App",
    year: "2026",
    description: "Developed during the Hackwise 2.0 24-hour national-level hackathon with efficient reservation workflows.",
    features: ["Reservation system", "Booking management", "User-friendly interface", "Efficient scheduling"],
    achievement: "Secured 9th position out of 40 teams",
    stack: ["MERN", "REST API", "UI Design"],
    github: "https://github.com/samhoon000/TableWise.git",
    
  },
  {
    title: "Hospital Patient Surge Prediction System",
    year: "2025",
    description:
      "Built a web interface integrated with a machine learning model to predict patient surge in hospitals.",
    features: ["ML prediction system", "Interactive dashboard", "Healthcare analytics", "Data visualization"],
    achievement: "MAKE FOR MANGALORE Make-a-thon 2025",
    stack: ["Python", "ML", "React", "Analytics"],
  
    
  }
];

export const achievements = [
  {
    title: "AI Sparkathon 2025",
    detail: "Secured 2nd Prize on December 1-2, 2025 by developing a MERN stack-based personalised learning and career guidance platform.",
    icon: Trophy
  },
  {
    title: "Hackwise 2.0",
    detail: "Secured 9th position out of 40 teams in a 24-hour national-level hackathon on April 4-5, 2026.",
    icon: Sparkles
  },
  {
    title: "TCS TechBytes Quiz Competition",
    detail: "Secured 3rd place in the Mangalore regional finals on April 22, 2026.",
    icon: BrainCircuit
  },
  {
    title: "MAKE FOR MANGALORE Make-a-thon",
    detail: "Developed a hospital patient surge prediction web interface integrated with a machine learning model on August 23-24, 2025.",
    icon: ShieldCheck
  }
];

export const certifications = [
  "Communication Skills - LinkedIn Learning",
  "Google Cloud Agentic AI Day Participation Certificate",
  "Naukri Campus CareerVerse 2026 Scorecard"
];

export const activities = [
  { label: "Essay Writing - Multiple Prize Winner", icon: PenTool },
  { label: "Elocution / Public Speaking", icon: Mic2 },
  { label: "Pencil Sketching", icon: Palette },
  { label: "Designing", icon: Layers3 },
  { label: "Calligraphy", icon: Workflow }
];
