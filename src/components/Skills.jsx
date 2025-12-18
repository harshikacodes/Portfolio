import { motion } from "framer-motion";
import { FaJava, FaCode, FaBrain } from "react-icons/fa";
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
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "C", icon: <FaCode />, color: "#A8B9CC" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },

  { name: "DSA", icon: <FaBrain />, color: "#6366F1" },
  { name: "OOP", icon: <FaBrain />, color: "#8B5CF6" },
  { name: "Problem Solving", icon: <FaBrain />, color: "#EC4899" },

  { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },

  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
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
            <div className="text-4xl" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-primary">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
