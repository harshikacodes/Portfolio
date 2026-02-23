import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass soft-shadow p-10 rounded-2xl max-w-3xl mx-auto text-center"
      >
        <h2 className="title mb-6">About Me</h2>

        <p className="text-secondary leading-relaxed text-lg">
          I work as a freelance developer, helping clients turn ideas into simple, usable web experiences. <br />I focus on clean design, responsive layouts, and maintainable code.
        </p>
      </motion.div>
    </section>
  );
}
