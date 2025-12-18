import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section flex flex-col items-center text-center">
      
      {/* Subtle fade + slide animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-semibold tracking-tight"
      >
        Hi, I’m <span className="text-blue-600">Harshika Malhotra</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        Learning to Build — Java • DSA • C • Python
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex gap-5"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:opacity-80 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 glass border shadow-lg hover:opacity-80 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
