import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A clean and responsive personal portfolio built with React and modern UI principles.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Java Practice Projects",
    description:
      "A collection of small Java programs focused on core concepts, logic building, and problem solving.",
    tech: ["Java", "OOP", "DSA"],
  },
  {
    title: "Frontend Mini Projects",
    description:
      "Practice projects like landing pages and UI components to improve frontend development skills.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="title text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass soft-shadow rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
