"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Pentesting",
    skills: [
      { name: "Kali Linux", level: 85 },
      { name: "Burp Suite / Nmap", level: 80 },
      { name: "Metasploit", level: 75 },
      { name: "OWASP Top 10", level: 85 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / Docker", level: 80 },
      { name: "Tally ERP L3", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Vercel / AWS", level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground/80">{name}</span>
        <span className="text-muted font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono text-muted tracking-widest uppercase mb-3 block">/skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Tech Stack
          </h2>
          <p className="text-muted">
            Technologies I use daily across development, security, and business tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * ci, duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-muted uppercase tracking-widest mb-6">
                {cat.title}
              </h3>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.1 * si}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
