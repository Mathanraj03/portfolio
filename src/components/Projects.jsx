import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Savings Tracker",
    description: "Expense & savings tracker with charts and CSV export.",
    build: ["React", "Java", "Spring boot", "MySQL"],
    link: "#"
  },
  {
    title: "Chat App",
    description: "Realtime chat with WebSocket and authentication.",
    build: ["Java", "Spring boot", "MySQL", "React"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A portfolio that represent my Skill and work",
    build: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="section-wrapper max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          // transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="block card p-6 hover:shadow-lg hover:shadow-[var(--accent)]/10 transition"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
              <p className="text-sm text-[var(--muted)] mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.build.map((b) => (
                  <span key={b} className="text-xs bg-[#7b39e6] text-white px-2 py-1 rounded-xl">
                    {b}
                  </span>
                ))}
              </div>              
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
