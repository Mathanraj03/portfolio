import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Pixel Labs",
    period: "2022 - Present",
    desc: "Shipping high-quality web experiences; improved app performance and accessibility."
  },
  {
    role: "Software Engineer",
    company: "Bright Studio",
    period: "2019 - 2022",
    desc: "Built UI components, collaborated with design teams and backend engineers."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-6">
      <div className="section-wrapper max-w-4xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h3>

        <div className="grid gap-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              className="card p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold">{e.role}</h4>
                  <div className="text-sm text-gray-400">{e.company}</div>
                </div>
                <div className="text-sm text-gray-400">{e.period}</div>
              </div>
              <p className="mt-3 text-[var(--muted)] text-sm">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
