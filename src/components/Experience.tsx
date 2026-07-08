const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "Jan 2024 - Present",
    description:
      "Leading development of microservices architecture serving 1M+ users. Mentoring junior developers and driving architectural decisions.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "Mar 2022 - Dec 2023",
    description:
      "Built and shipped 3 major product features from concept to launch. Reduced page load time by 40% through performance optimization.",
  },
  {
    role: "Frontend Developer",
    company: "WebAgency Co.",
    period: "Jun 2021 - Feb 2022",
    description:
      "Developed responsive web applications for 15+ clients. Implemented component library reducing development time by 30%.",
  },
  {
    role: "Junior Developer",
    company: "CodeLab",
    period: "Jan 2021 - May 2021",
    description:
      "Contributed to open-source projects and built internal tools. Gained foundational experience in modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted mb-12 max-w-xl">
          My professional journey and the impact I&apos;ve made along the way.
        </p>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className="relative pl-0 sm:pl-14 section-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full gradient-bg border-2 border-background hidden sm:block" />

                <div className="glass rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-xs text-muted">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
