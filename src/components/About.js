import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [show, setShow] = useState(false);
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
      transition={{ delay: 0.5, duration: 2 }}
      name="about"
      className="pt-20 md:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4"
    >
      <div className="group max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <section className="pb-10">
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 1, duration: 3.5 }}
            className="text-5xl font-bold inline border-b-4 border-gray-500 p-2"
          >
            About
          </motion.p>
        </section>
        <motion.p
          variants={{
            hidden: { x: "-100vw" },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={control}
          transition={{ delay: 0.5, duration: 2 }}
          className="text-xl mt-20 leading-9"
        >
          I'm Eric McKee, I specialize in full stack Rails and React
          development, implementing technologies such as PostgreSQL, Postman,
          JavaScript, Jest, RSpec, React Testing Library, and agile
          methodologies. I also have extensive experience within a collaborative
          work environment including pair programming, mob programming and
          working with colleagues within different time zones in a remote work
          setting.
        </motion.p>
        {!show && (
          <motion.button
            variants={{
              hidden: { x: "-100vw" },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 1.5, duration: 1.5 }}
            onClick={() => setShow(prev => !prev)}
            className="mt-12 text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black cursor-pointer border border-1 border-slate-50 hover:scale-105 duration-200"
          >
            Show More
          </motion.button>
        )}
        <br />
        {show && (
          <p className="text-xl leading-9">
            A cool fact about me ... being a developer is not only my career,
            it's and my hobby! So, my idea of "relaxing" is checking out a new
            technology to play with or, doing some pair programming, or just
            playing around and creating a new and interesting project.
            Sometimes, I just enjoy doing some freestyle programming and
            reviewing some data structures and algorithms. Another words, I love
            just being on the computer and doing something!
          </p>
        )}
        {show && (
          <button
            onClick={() => setShow(prev => !prev)}
            className="mt-12 text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black cursor-pointer border border-1 border-slate-50 hover:scale-105 duration-200"
          >
            Show Less
          </button>
        )}
      </div>
    </motion.section>
  );
}
