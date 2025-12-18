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

        <p className="text-gray-700 leading-relaxed text-lg">
          I’m a learner passionate about building real projects and improving my
          problem-solving skills.
          <br /><br />
          Right now, I’m exploring Java, DSA, C, and Python to strengthen my
          foundation as a developer.
          <br /><br />
          I enjoy creating clean, simple experiences and I’m motivated to grow
          into a strong, confident engineer.
        </p>
      </motion.div>
    </section>
  );
}
