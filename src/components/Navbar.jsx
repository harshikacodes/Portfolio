import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);

  // hide navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 80) setHidden(true);
    else setHidden(false);
  });

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <motion.nav
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 glass soft-shadow flex justify-between items-center"
    >
      <span className="font-semibold text-lg">Harshika.dev</span>

      <div className="flex items-center gap-6">
        <a href="#about" className="hover:opacity-60">About</a>
        <a href="#skills" className="hover:opacity-60">Skills</a>
        <a href="#projects" className="hover:opacity-60">Projects</a>
        <a href="#contact" className="hover:opacity-60">Contact</a>

        {/* iOS-style toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition"
          aria-label="Toggle Dark Mode"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  );
}
