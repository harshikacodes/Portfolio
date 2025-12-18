import { motion } from "framer-motion";

// Font Awesome icons (safe)
import { FaJava, FaCode, FaBrain } from "react-icons/fa";

// Simple Icons (web + tools only)
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <FaCode /> },
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },

  { name: "DSA", icon: <FaBrain /> },
  { name: "OOP", icon: <FaBrain /> },
  { name: "Problem Solving", icon: <FaBrain /> },

  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "React", icon: <SiReact /> },

  { name: "Git", icon: <SiGit /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="title text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass soft-shadow rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform"
          >
            <div className="text-4xl text-neutral-700">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
