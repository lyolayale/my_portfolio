import heroImage from "../assets/me.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home({ showNav }) {
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={control}
      transition={{ delay: 0.5, duration: 1.5 }}
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center md:gap-28 h-full px-4">
        <section className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-5 max-w-md text-xl">
            Full stack Rails and React developer. <br /> Utilizing Test Driven
            Development (TDD) <br /> and Agile Methodology
          </p>
          <div className="btn">
            <Link to="projects" smooth duration={500}>
              {" "}
              <motion.button
                variants={{
                  hidden: { x: "-100vw" },
                  visible: { x: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ delay: 1, duration: 1.5 }}
                className="group text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black cursor-pointer border border-1 border-slate-50"
              >
                Projects{" "}
                <span className="ml-2 group-hover:rotate-90 duration-200">
                  <RxDoubleArrowRight size={25} />
                </span>
              </motion.button>
            </Link>
          </div>
        </section>
        {!showNav && (
          <Link to="about" smooth duration={500}>
            {" "}
            <motion.div
              variants={{
                hidden: { x: "100vw" },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ delay: 1, duration: 1.5 }}
              className="hero-image"
            >
              <img
                className="rounded-2xl mx-auto border-2 border-slate-300 hover:drop-shadow-ds hover:cursor-pointer hover:scale-105 duration-1000"
                src={heroImage}
                alt="Eric McKee"
              />
            </motion.div>
          </Link>
        )}
      </div>
    </motion.section>
  );
}
