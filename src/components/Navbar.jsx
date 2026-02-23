import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // hide navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 80) setHidden(true);
    else setHidden(false);
  });

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -90 : 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 glass soft-shadow flex justify-between items-center"
      >
        {/* Brand */}
        <span className="font-semibold text-lg">Harshika.dev</span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-60"
            >
              {link}
            </a>
          ))}

        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">

          <button onClick={() => setMenuOpen(true)}>
            <FaBars size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              exit={{ y: -30 }}
              className="glass soft-shadow rounded-2xl mx-6 mt-24 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Menu</span>
                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
