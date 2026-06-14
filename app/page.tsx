"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Rocket,
  Wrench,
  Award,
  Shield,
  Sparkles,
  Star,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import ContactForm from "@/components/contact-form";

const profile = {
  name: "Muhammad Bilal",
  role: "Full Stack Developer",
  summary:
    "Full Stack Developer with expertise in MERN Stack, React JS,Next Js,Nest Js, Python, and Data Cleaning.",
  emails: ["muhammadbilalmirza1029@gmail.com"],
  github: "https://github.com/muhammadBilal1029/",
  linkedin:
    "https://www.linkedin.com/in/mirzabilal1029?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  resumeUrl:
    "https://drive.google.com/file/d/1hlpTeyKGvhHyvSQDBeyvZ5s5q0qFEwS1/view?usp=drivesdk",
  Freelancer: 'https://www.freelancer.com/u/muhammadb1029?frm=muhammadb1029&sb=t',
  education: "Bachelors (Software Engineering) - PMAD-ARID Agriculture University, Rawalpindi",
  achievements: [
    "Built AllFor4x4, a complete e-commerce platform for off-road enthusiasts with Stripe payments, Google Maps integration, and Australia Post shipping.",
    "Developed AllFor4x4 Admin Panel, a comprehensive CMS with inventory management, analytics, blog management, and role-based access control.",
    "Created FursatiPro.io, an AI-powered job discovery platform with intelligent matching algorithms and real-time job alerts.",
    "Built Brainscraft Technologies website, a professional corporate web presence showcasing services and portfolio with modern UI/UX.",
    "Developed SmartBites, an AI-powered WhatsApp restaurant assistant using n8n and Meta Business API for automated customer support and order management.",
    "Developed Skill Sense (FYP), an AI interview platform with automated evaluation system and company portal for candidate matching.",
    "Built City Academy, a complete web-based educational management system with student, teacher, and admin portals.",
    "Created Unipuler, a web scraping tool to automate data extraction and cleaning from multiple sources using Puppeteer.",
    "Developed NPPES platform, a healthcare provider data system with advanced filtering, CSV export, and authentication features.",
    "Hands-on experience with full-stack development using MERN stack, TypeScript, Next.js, and integrating third-party APIs.",
  ],
  skills: {
    WebDevelopment: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Nest Js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion",
    ],
    DataAndAI: [
      "Web Scraping",
      "Data Cleaning",
      "Pandas",
      "AI/ML Integration",
      "Basic Machine Learning (Scikit-Learn)",
    ],
    APIsIntegration: [
      "Stripe API",
      "Google Maps API",
      "Meta Business API",
      "WhatsApp API",
      "Google Sheets API",
      "AI APIs",
      "Third-party Service Integration",
    ],
    ToolsAndPlatforms: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "n8n",
      "Vercel",
      "Netlify",
      "Railway",
      "Heroku",
      "Firebase",
      "Docker (basic)",
    ],
    Mobile: ["Android (Beginner)", "Responsive UI Development"],
    SoftSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Agile Development",
      "Communication",
      "Project Management",
      "CMS Development",
      "E-commerce Solutions",
      "Workflow Automation",
      "Business Process Automation",
    ],
  },
};

const projects = [
  {
    icon: Rocket,
    title: "AllFor4x4 – E-Commerce Platform",
    bullets: [
      "Complete e-commerce platform for off-road and 4x4 vehicle enthusiasts",
      "Product catalog, user authentication, shopping cart, and secure checkout",
      "Stripe payment integration and Google Maps address validation",
      "Australia Post & TNT shipping integration",
      "Responsive design with admin dashboard for product and order management",
    ],
    links: [{ href: "https://4x4new-production.up.railway.app", label: "Live Demo" }],
    chips: ["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript", "Stripe API", "Google Maps API"],
    image: "/images/allfor4x4.jpg",
  },
  {
    icon: Rocket,
    title: "AllFor4x4 Admin Panel",
    bullets: [
      "Centralized dashboard for complete e-commerce platform control",
      "Product, category, brand, and inventory management",
      "Order management, tracking, and customer management",
      "CMS, blog management, SEO management, and website configuration",
      "Role-based access control with responsive user-friendly interface",
    ],
    links: [],
    chips: ["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript"],
    image: "/images/allfor4x4-admin.png",
  },
  {
    icon: Rocket,
    title: "FursatiPro.io – AI Job Discovery Platform",
    bullets: [
      "AI-driven job discovery and matching platform",
      "Personalized job recommendations based on skills and profile",
      "Real-time job alerts for new opportunities",
      "Smart filtering based on preferences (location, role, tech stack)",
      "Profile-based candidate-job matching system with fast user-friendly search",
    ],
    links: [],
    chips: ["Next.js", "React.js", "TypeScript", "AI/ML", "Node.js"],
    image: "/images/fursatipro.jpg",
  },
  {
    icon: Rocket,
    title: "City Academy – Educational Management System",
    bullets: [
      "Web-based platform with portals for students, teachers, and admins",
      "Features include attendance, results, assignments, and fee management",
      "Admin dashboard for centralized academic operations",
    ],
    links: [{ href: "https://city-academy-nextjs-front.vercel.app/", label: "Live Demo" }],
    chips: ["Next.js", "Nest.js", "Prisma", "Railway"],
    image: "/images/city-academy.jpg",
  },
  {
    icon: Rocket,
    title: "NPPES – NPI Registry Data Platform",
    bullets: [
      "Fetches and displays healthcare provider data from the official NPI registry",
      "Supports weekly data updates with advanced filtering and search options",
      "Export provider data to CSV for analysis and reporting",
      "Includes authentication features: login/signup, reset & forgot password",
    ],
    links: [{ href: "https://nppes-dashboard-front.vercel.app", label: "Live Demo" }],
    chips: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "CSV Export",
    ],
    image: "/images/nppes.jpg",
  },
  {
    icon: Rocket,
    title: "Skill Sense – AI Interview Platform (FYP)",
    bullets: [
      "AI-generated mock interviews based on selected skills",
      "Evaluation with feedback on strengths and weaknesses",
      "Company portal to post interviews and match candidates",
    ],
    links: [{ href: "https://skill-sense-front.vercel.app/", label: "Live Demo" }],
    chips: ["Next.js", "Node.js", "Prisma", "MongoDB", "AI Models"],
    image: "/images/skill-sense.png",
  },
  {
    icon: Rocket,
    title: "NetAesthetics – Modern Web Design Platform",
    bullets: [
      "Developed a visually appealing and responsive website for branding",
      "Focused on clean UI/UX with fast performance and SEO optimization",
      "Integrated modern frontend tools for smooth animations and layouts",
    ],
    links: [{ href: "https://netaesthetics.vercel.app/", label: "Live Demo" }],
    chips: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    image: "/images/netaesthetics.png",
  },
  {
    icon: Rocket,
    title: "Gamerz Hub – Gaming Community Platform",
    bullets: [
      "Interactive web platform for gamers to connect",
      "Features community engagement and gaming resources",
      "Frontend built with modern UI/UX practices",
    ],
    links: [{ href: "https://gamerzhub.netlify.app/", label: "Live Demo" }],
    chips: ["React.js", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    image: "/images/gamerz-hub.jpg",
  },
  {
    icon: Rocket,
    title: "Student Hub App",
    bullets: [
      "Student management platform designed to streamline academic activities and communication",
      "Student profiles, course management, and announcements",
      "Information sharing through responsive and user-friendly interface",
      "Focused on improving accessibility, organization, and overall student experience",
    ],
    links: [],
    chips: ["React.js", "Node.js", "MongoDB"],
    image: "/images/student-hub.jpg",
  },
  {
    icon: Rocket,
    title: "Brainscraft Technologies Website",
    bullets: [
      "Modern, professional, and responsive web presence for software development company",
      "Service and solution showcase with company portfolio presentation",
      "Contact and lead generation forms",
      "Performance optimization with SEO-friendly structure",
      "Clean and scalable frontend architecture",
    ],
    links: [{ href: "https://brainscraft.io", label: "Live Website" }],
    chips: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    image: "/images/brainscraft.png",
  },
  {
    icon: Rocket,
    title: "Tasty Burger – Online Food Ordering",
    bullets: [
      "Responsive React.js food ordering platform",
      "Dynamic menu with add-to-cart and checkout flow",
      "User-friendly UI for a seamless ordering experience",
    ],
    links: [{ href: "https://tastyspicyburger.netlify.app/", label: "Live Demo" }],
    chips: ["React.js", "Bootstrap", "CSS", "JavaScript"],
    image: "/images/tasty-burger.jpg",
  },
  {
    icon: Rocket,
    title: "SmartBites: AI WhatsApp Restaurant Assistant",
    bullets: [
      "AI-powered WhatsApp assistant for automated customer support (Oct 2024 – Nov 2024)",
      "Built with n8n and Meta WhatsApp Business API for restaurant automation",
      "Automatic responses to customer queries with menu availability checks",
      "Suggests alternatives for unavailable items and handles Messenger & Business numbers",
      "Integrates with Google Sheets for real-time order management and tracking",
      "Provides 24/7 instant support, reduces order errors, and improves customer experience",
    ],
    links: [],
    chips: ["n8n", "Meta Business API", "WhatsApp API", "Google Sheets API", "AI Automation", "Workflow Automation", "Restaurant Tech"],
    image: "/images/smartbites.jpg",
  },
  {
    icon: Rocket,
    title: "Unipuler – Web Scraping Tool",
    bullets: [
      "Automated large-scale data extraction using Puppeteer and Chromium",
      "Scraped, cleaned, and structured data for analytics and reporting",
      "Frontend built with React.js and MUI for visualization and user interaction",
    ],
    links: [{ href: "https://unipuler-front.vercel.app", label: "Live Demo" }],
    chips: [
      "Puppeteer",
      "Chromium",
      "Node.js",
      "Express.js",
      "React.js",
      "MUI",
    ],
    image: "/images/unipuler.jpg",
  },
  {
    icon: Rocket,
    title: "Facebook Login Page Clone",
    bullets: [
      "Pixel-perfect UI design recreating the classic Facebook login interface",
      "Responsive layout with form validation",
      "Mobile and desktop compatibility",
      "Clean and structured code with user-friendly interface",
    ],
    links: [],
    chips: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/images/facebook-clone.jpg",
  },
];

const Section = ({
  id,
  icon: Icon,
  title,
  children,
  color = "from-sky-600 to-indigo-600",
}: any) => (
  <section id={id} className="scroll-mt-24">
    <div className="my-12">
      <div
        className={`bg-gradient-to-r ${color} text-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3`}
      >
        <Icon className="w-5 h-5" />
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }: any) => (
  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
    {children}
  </div>
);

const ProjectCard = ({ p }: any) => {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800 overflow-hidden">
        {p.image && (
          <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
            <Icon className="w-5 h-5" />
            <CardTitle className="text-lg">{p.title}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {p.chips.map((c: string, i: number) => (
              <Pill key={i}>{c}</Pill>
            ))}
          </div>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc pl-5 space-y-1">
            {p.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {p.links && p.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {p.links.map((l: any, i: number) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sky-700 dark:text-sky-300 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <header className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/40 sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">
            MB • Portfolio
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:opacity-80">
              About
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#achievements" className="hover:opacity-80">
              Achievements
            </a>
            <a href="#education" className="hover:opacity-80">
              Education
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              className="hidden md:inline-flex"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
            <a href={profile.Freelancer} target="_blank" rel="noreferrer">
              <Button>Hire Me</Button>
            </a>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-indigo-600/10 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-2 text-xl text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {profile.role}
                </p>
                <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
                  {profile.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.emails[0]}`}>
                    <Button>Email</Button>
                  </a>
                  <br />
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <br />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:min-w-[320px]">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                      <Award className="w-5 h-5" />
                      Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="list-disc pl-5 space-y-1">
                      {profile.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <Section
          id="about"
          icon={Star}
          title="About"
          color="from-sky-600 to-cyan-600"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-7">
            Need a production-ready Web App, SaaS platform, or E-commerce solution?
            Tap "Hire Me", or send me an email, and we’ll discuss what we can
            build together. I build reliable full-stack applications end-to-end
            — from database design and backend APIs to responsive frontends and
            seamless deployment. I care about scalability, performance, and
            delivering real business value. 🚀
            <br />
            <br />
            With hands-on experience developing 14+ full-stack projects, I’ve recently built:
            <br />
            → <strong>AllFor4x4</strong> – Complete e-commerce platform with Stripe payments, Google Maps integration, and shipping management
            <br />
            → <strong>AllFor4x4 Admin Panel</strong> – Comprehensive CMS with inventory management, analytics, and role-based access control
            <br />
            → <strong>FursatiPro.io</strong> – AI-powered job discovery platform with intelligent matching and real-time alerts
            <br />
            → <strong>Brainscraft Technologies Website</strong> – Professional corporate web presence with modern UI/UX
            <br />
            → <strong>SmartBites</strong> – AI WhatsApp restaurant assistant with n8n automation and Meta Business API integration
            <br />
            → <strong>Skill Sense</strong> – AI interview platform (FYP project) with automated evaluation system
            <br />
            <br />
            My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), TypeScript, Next.js, workflow automation with n8n, and integrating third-party services like Stripe, Google Maps, Meta APIs, and AI/ML APIs for production-ready applications.
            <br />
            <br />
            🔄 𝐅𝐚𝐜𝐢𝐧𝐠 𝐭𝐡𝐞𝐬𝐞 𝐰𝐞𝐛 𝐝𝐞𝐯 𝐜𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞𝐬?
            <br />
            → Websites that look outdated or unresponsive
            <br />
            → Complex dashboards that are hard to use
            <br />
            → Data scattered, no proper management or insights
            <br />
            → Manual processes slowing down your business
            <br />
            → Struggling with login/authentication & security
            <br />
            → Deployments failing or apps crashing under scale
            <br />
            → Need e-commerce solutions with payment integration
            <br />
            <br />
            👉 I’m here to be your strategic partner — not just to build
            applications, but to ensure they’re **scalable, user-friendly, and
            deliver real business impact**.
          </p>
        </Section>
        <Section
          id="skills"
          icon={Wrench}
          title="Skills"
          color="from-indigo-600 to-fuchsia-600"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(profile.skills).map(([k, arr]: any) => (
              <Card key={k}>
                <CardHeader>
                  <CardTitle className="text-base">{k}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(arr as string[]).map((s, i) => (
                      <Badge key={i}>{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          icon={Rocket}
          title="Projects"
          color="from-emerald-600 to-teal-600"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </Section>
        <Section
          id="achievements"
          icon={Award}
          title="Achievements"
          color="from-rose-600 to-pink-600"
        >
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            {profile.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Section>
        <Section
          id="education"
          icon={GraduationCap}
          title="Education"
          color="from-sky-700 to-indigo-700"
        >
          <Card>
            <CardContent className="py-6">
              <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                <GraduationCap className="w-5 h-5" />
                <p className="font-medium">{profile.education}</p>
              </div>
            </CardContent>
          </Card>
        </Section>
        <Section
          id="contact"
          icon={Mail}
          title="Contact"
          color="from-indigo-700 to-purple-700"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm">
              <p>Reach out for collaborations or product builds.</p>
              <div className="space-y-2">
                {profile.emails.map((e, i) => (
                  <a
                    key={i}
                    href={`mailto:${e}`}
                    className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-300 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {e}
                  </a>
                ))}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 inline-flex items-center gap-2 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block inline-flex items-center gap-2 hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
