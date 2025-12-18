import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass soft-shadow rounded-2xl p-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="title mb-4">Get in Touch</h2>

        <p className="text-gray-600 mb-8">
          I’m always open to learning opportunities, collaboration, and meaningful conversations.
        </p>

        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="mailto:your-email@example.com"
            className="hover:opacity-70 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
