import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useCallback } from "react";
import splitBill from "../assets/portfolio/split-bill.png";
import shotcallers from "../assets/portfolio/shotcallers.png";
import guessWord from "../assets/portfolio/guess-the-word-game - Edited.png";
import meme from "../assets/portfolio/meme.png";
import apartment from "../assets/portfolio/apartment-app.png";
import tenzie from "../assets/portfolio/tenzie.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const portfolio = [
  {
    src: splitBill,
    demo: "https://lyolayale.github.io/split-bill-frontend/",
    code: "https://github.com/lyolayale/split-bill-frontend",
    title: "Split the Bill",
    tag: "Rails • React • PostgreSQL",
  },
  {
    src: shotcallers,
    demo: "https://shotcaller.onrender.com/",
    code: "https://github.com/Shot-Callers/shotcaller-app-frontend",
    title: "Shotcallers App",
    tag: "React • Rails • WebSockets",
  },
  {
    src: guessWord,
    demo: "https://lyolayale.github.io/guess-the-word/",
    code: "https://github.com/lyolayale/guess-the-word",
    title: "Guess the Word",
    tag: "React • JavaScript",
  },
  {
    src: meme,
    demo: "https://lyolayale.github.io/meme-generator/",
    code: "https://github.com/lyolayale/meme-generator",
    title: "Meme Generator",
    tag: "React • JavaScript • APIs",
  },
  {
    src: apartment,
    demo: "https://lyolayale.github.io/apartment-app-frontend/",
    code: "https://github.com/lyolayale/apartment-app-frontend",
    title: "Apartment Finder",
    tag: "React • Rails • Maps API",
  },
  {
    src: tenzie,
    demo: "https://lyolayale.github.io/tenzie/",
    code: "https://github.com/lyolayale/tenzie",
    title: "Tenzie",
    tag: "React • JavaScript",
  },
];

export default function Projects({ registerRef }) {
  const control = useAnimation();
  const [inViewRef, inView] = useInView({ threshold: 0.15 });

  const mergedRef = useCallback(
    (node) => {
      inViewRef(node);
      if (registerRef) registerRef(node);
    },
    [inViewRef, registerRef]
  );

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section
      ref={mergedRef}
      id="projects"
      className="section w-full bg-slate-950 text-white"
    >
      <div className="container">
        <div className="section-header mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase mb-4">
            Selected work
          </span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Feel free to explore some of my work. Click through to see the live
            sites or browse the source code.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {portfolio.map(({ src, demo, code, title, tag }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { scale: 0.95, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden h-64 md:h-72 lg:h-80">
                <a href={demo} target="_blank" rel="noreferrer" className="block h-full">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 rounded-lg font-medium shadow-lg hover:bg-brand-400 hover:text-white transition-colors">
                      <FiExternalLink size={16} /> Live Demo
                    </button>
                  </div>
                </a>
              </div>
              <div className="p-5 pt-4">
                <p className="text-xs font-medium text-brand-400 uppercase tracking-wider mb-2">{tag}</p>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="flex items-center justify-between">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors flex items-center gap-1"
                  >
                    View site <FiExternalLink size={14} />
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <FiGithub size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
