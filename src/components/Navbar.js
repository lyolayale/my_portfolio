import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect } from "react";

const navLinks = [
  { link: "home", label: "Home" },
  { link: "about", label: "About" },
  { link: "projects", label: "Projects" },
  { link: "tech-stack", label: "Tech Stack" },
  { link: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, showNav, onShowNav }) {
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showNav]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl transition-colors duration-300"
    >
      <div className="container flex justify-between items-center h-16 px-4 md:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow-glow"
          >
            <span className="text-white font-bold text-xs">E</span>
          </motion.div>
          <span className="font-bold text-xl tracking-tight text-white sm:hidden">
            EM
          </span>
          <span className="hidden sm:block text-xl font-bold tracking-tight gradient-text">
            Eric McKee
          </span>
        </Link>

        {!showNav ? (
          <FaBars
            onClick={() => onShowNav()}
            className="md:hidden cursor-pointer text-slate-300 hover:text-white transition-colors"
            size={24}
          />
        ) : (
          <FaTimes
            onClick={() => onShowNav()}
            className="md:hidden cursor-pointer text-slate-300 hover:text-white transition-colors"
            size={24}
          />
        )}

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ link, label }) => (
            <li key={link}>
              <Link
                activeClass="active"
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                className={({ isActive }) =>
                  `nav-link ${
                    activeSection === link || isActive ? "active" : ""
                  }`
                }
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-link hidden sm:inline-block px-5 py-2 rounded-xl bg-brand-600 shadow-glow hover:bg-brand-500 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.6)] transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {showNav && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/10 py-6 md:py-8"
        >
          <div className="container flex flex-col items-center gap-6 px-4 md:px-8">
            {navLinks.map(({ link, label }) => (
              <Link
                key={link}
                onClick={() => onShowNav((prev) => !prev)}
                to={link}
                smooth
                duration={500}
                className={({ isActive }) =>
                  `text-xl font-medium ${(activeSection === link || isActive)
                    ? "text-brand-400"
                    : "text-slate-300"
                } transition-colors duration-200`
                }
              >
                {label}
              </Link>
            ))}
            <a
              onClick={() => onShowNav((prev) => !prev)}
              href="#contact"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
