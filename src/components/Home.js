import heroImage from "../assets/me.png";
import { RxArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home({ showNav, registerRef }) {
  const control = useAnimation();
  const [inViewRef, inView] = useInView({ threshold: 0.1 });

  const mergedRef = (node) => {
    inViewRef(node);
    if (registerRef) registerRef(node);
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={mergedRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.8 }}
      id="home"
      className="section min-h-[100dvh] w-full bg-slate-950"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10">
        {!showNav && (
          <motion.div
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0 bg-brand-500/20 rounded-3xl blur-xl -z-10 animate-pulse"
              ></div>
              <img
                className="relative rounded-3xl border border-white/10 shadow-card hover:scale-105 hover:shadow-glow transition-all duration-700 object-cover"
                src={heroImage}
                alt="Eric McKee"
                loading="lazy"
                width="600"
                height="600"
              />
            </div>
          </motion.div>
        )}
        <motion.div
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={control}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase">
            Available for new opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Building digital <br />
            <span className="gradient-text">experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Full stack Rails &amp; React developer. I ship production-grade web
            applications using Test Driven Development and agile practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link to="projects" smooth duration={500}>
              <button className="btn-primary flex items-center justify-center gap-2">
                View Projects <RxArrowRight size={20} />
              </button>
            </Link>
            <a
              href="#contact"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background blobs for visual depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[100px] pointer-events-none"></div>
    </motion.section>
  );
}
