"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Vulnerability Scanner",
    desc: "Automated OWASP Top 10 detection, port scanning, and reporting tool for web app security audits.",
    tags: ["Python", "Nmap", "Burp Suite", "Kali Linux"],
    color: "from-rose-500/20 to-amber-500/20",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce with product management, cart, checkout, and Stripe payment integration.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Task Manager",
    desc: "Real-time collaborative task management with drag-and-drop, workspaces, and notifications.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time data visualization dashboard with custom reports and interactive D3.js charts.",
    tags: ["React", "D3.js", "Express", "Redis"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Social Platform",
    desc: "Modern social platform with posts, stories, messaging, and recommendation algorithms.",
    tags: ["Next.js", "GraphQL", "AWS", "Docker"],
    color: "from-orange-500/20 to-pink-500/20",
  },
  {
    title: "Portfolio Builder",
    desc: "Drag-and-drop builder for dev portfolios with customizable templates and custom domains.",
    tags: ["React", "Node.js", "PostgreSQL", "Vercel"],
    color: "from-primary/20 to-accent/20",
  },
];

function TiltCard({ children, color }: { children: React.ReactNode; color: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      <div className={`glass rounded-xl p-6 h-full cursor-default group hover:border-primary/30 transition-all relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-xs font-mono text-muted">project-{String(projects.indexOf(projects.find(p => p.tags[0] === children ? true : false) || projects[0]) + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{/* title */}</h3>
          <p className="text-sm text-muted leading-relaxed mb-5">{/* desc */}</p>
          <div className="flex flex-wrap gap-2">{/* tags */}</div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono text-muted tracking-widest uppercase mb-3 block">/projects</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted">
            Projects I&apos;ve built — from security tools to full-stack applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.06 * i, duration: 0.4 }}
            >
              <div className="glass rounded-xl p-6 h-full cursor-default group hover:border-primary/30 transition-all relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    <span className="text-xs font-mono text-muted">project-{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.03] text-xs text-muted/80 border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
