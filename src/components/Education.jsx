import { motion } from "framer-motion";

const education = [
  {
    degree: "Interaction Design",
    institution: "Interaction Design Foundation ",
    period:"",
  },
  {
    degree: "Bachelor of Design",
    institution: "National University of Singapore (2015 - 2017)",
    period:"",
  },
];

const Education = () => {
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
          Education
        </motion.h3>

        <div className="grid gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className="card p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold">{e.degree}</h4>
                  <div className="text-sm text-gray-400">{e.institution}</div>
                </div>
                <div className="text-sm text-gray-400">{e.period}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
