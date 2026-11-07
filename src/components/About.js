import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useCallback } from "react";

export default function About({ registerRef }) {
  const controller = useAnimation();
  const [inViewRef, isInView] = useInView({ threshold: 0.15 });

  const mergedRef = useCallback(
    (node) => {
      inViewRef(node);
      if (registerRef) registerRef(node);
    },
    [inViewRef, registerRef]
  );

  useEffect(() => {
    if (isInView) {
      controller.start("visible");
    } else {
      controller.start("hidden");
    }
  }, [controller, isInView]);

  const funFact =
    "Being a developer is not only my career, it's my hobby. My idea of \"relaxing\" is checking out a new technology, pairing on a tough problem, or just building something for fun. I love being on the computer and creating.";

  return (
    <motion.section
      ref={mergedRef}
      id="about"
      className="section min-h-[80vh] w-full bg-slate-950 text-white"
    >
      <div className="container">
        <div className="section-header">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase mb-4">
            About me
          </span>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            I specialize in full stack Rails and React development, applying
            PostgreSQL, Postman, JavaScript, Jest, RSpec, React Testing Library,
            and agile methodologies.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controller}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2 items-start py-12"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controller}
            className="glass-card"
          >
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "I thrive in collaborative environments — pair programming, mob
              programming, and working across time zones in remote settings."
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controller}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Eric McKee, a full stack Rails and React developer who enjoys
              turning ideas into polished, well-tested products. I have
              extensive experience collaborating within teams, across different
              time zones, in remote work settings.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {funFact}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
