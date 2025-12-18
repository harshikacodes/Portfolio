import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 80) {
      setHidden(true); // hide on scroll down
    } else {
      setHidden(false); // show on scroll up
    }
  });

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 glass soft-shadow flex justify-between items-center"
    >
      <span className="font-semibold text-lg">Harshika Malhotra</span>

      <div className="flex gap-6">
        <a href="#about" className="hover:opacity-60">About</a>
        <a href="#skills" className="hover:opacity-60">Skills</a>
        <a href="#projects" className="hover:opacity-60">Projects</a>
        <a href="#contact" className="hover:opacity-60">Contact</a>
      </div>
    </motion.nav>
  );
}
