"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Status", value: "B.Com S.Y. Sem 3" },
  { label: "Cert", value: "Tally ERP L3" },
  { label: "Projects", value: "20+" },
  { label: "Focus", value: "Dev + Security" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[500px] opacity-20"
          style={{
            backgroundImage: "url(/images/profile.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px) saturate(1.5)",
            WebkitFilter: "blur(40px) saturate(1.5)",
            borderRadius: "24px",
          }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-[300px] h-[400px] opacity-10"
          style={{
            backgroundImage: "url(/images/profile.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(60px) saturate(1.5)",
            WebkitFilter: "blur(60px) saturate(1.5)",
            borderRadius: "24px",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-[10%] text-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="glass rounded-xl p-4 px-5 opacity-40">
            <div className="text-lg font-bold gradient-text">3+</div>
            <div className="text-[10px] text-muted">Years of dev</div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-mono text-muted tracking-widest uppercase mb-3 block">/about</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Building &amp; Breaking
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            I&apos;m a full-stack developer and ethical pentester. I build secure apps with
            React, Next.js, Node.js, and Python — and break them with Kali, Burp Suite, and Metasploit.
            Currently pursuing B.Com (S.Y. Sem 3) with a Tally ERP Level 3 certification.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
              <div className="text-xs text-muted tracking-wide">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-5 border-l-2 border-emerald-500/50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">B.Com (S.Y. Sem 3)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">In Progress</span>
            </div>
            <p className="text-xs text-muted">University of Mumbai</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-xl p-5 border-l-2 border-primary/50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Tally ERP Level 3</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">Completed</span>
            </div>
            <p className="text-xs text-muted">Certified professional course</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
