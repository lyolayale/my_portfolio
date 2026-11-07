import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useCallback } from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import javascript from "../assets/javascript.png";
import postgresql from "../assets/postgresql.png";
import react from "../assets/react.png";
import ror from "../assets/ror.png";
import ruby from "../assets/ruby.png";
import tailwind from "../assets/tailwind.png";

export default function Skills({ registerRef }) {
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

  const brandColors = {
    postman: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    css: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    github: "bg-white/10 text-white border-white/20",
    javascript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    postgresql: "bg-blue-600/20 text-blue-400 border-blue-500/30",
    react: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    ror: "bg-red-500/20 text-red-400 border-red-500/30",
    ruby: "bg-red-600/20 text-red-400 border-red-500/30",
    tailwind: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  };

  const techStack = [
    { src: postman, title: "Postman", key: "postman" },
    { src: css, title: "CSS", key: "css" },
    { src: github, title: "GitHub", key: "github" },
    { src: javascript, title: "JavaScript", key: "javascript" },
    { src: postgresql, title: "PostgreSQL", key: "postgresql" },
    { src: react, title: "React", key: "react" },
    { src: ror, title: "Rails", key: "ror" },
    { src: ruby, title: "Ruby", key: "ruby" },
    { src: tailwind, title: "Tailwind CSS", key: "tailwind" },
  ];

  return (
    <section
      ref={mergedRef}
      id="tech-stack"
      className="section w-full bg-slate-950 text-white"
    >
      <div className="container">
        <div className="section-header">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase mb-4">
            Toolbelt
          </span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies I work with daily to build and ship products.
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 py-4"
        >
          {techStack.map(({ src, title, key }) => (
            <motion.div
              key={key}
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
              className={`tech-card border group ${brandColors[key]}`}
            >
              <img
                className="w-12 h-12 object-contain mx-auto drop-shadow-lg"
                src={src}
                alt={title}
              />
              <span className="text-sm font-medium">{title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
