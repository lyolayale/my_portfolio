import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import css from "../assets/css.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import javascript from "../assets/javascript.png";
import postgresql from "../assets/postgresql.png";
import react from "../assets/react.png";
import ror from "../assets/ror.png";
import ruby from "../assets/ruby.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const techStack = [
    {
      id: crypto.randomUUID(),
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: crypto.randomUUID(),
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: crypto.randomUUID(),
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: crypto.randomUUID(),
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: crypto.randomUUID(),
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-300",
    },
    {
      id: crypto.randomUUID(),
      src: react,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: crypto.randomUUID(),
      src: ror,
      title: "Rails",
      style: "shadow-red-400",
    },
    {
      id: crypto.randomUUID(),
      src: ruby,
      title: "Ruby",
      style: "shadow-red-500",
    },
  ];
  return (
    <section
      ref={ref}
      name="tech stack"
      className="pt-52 bg-gradient-to-b from-gray-800 to-black w-full h-screen-110"
    >
      <div className="wrapper max-w-screen-lg mx-auto flex flex-col items-start justify-center w-full h-full text-white p-4">
        <section className="text">
          <p className="text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            Teck Stack
          </p>
          <p className="text-xl py-10">Technologies that I work with daily.</p>
        </section>

        <section className="image-container w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <motion.div
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              initial="hidden"
              animate={control}
              transition={{ delay: 1, duration: 3 }}
              key={id}
              className={`py-2 rounded-lg shadow-md ${style}`}
            >
              <img
                className="w-[6.25rem] h-[6.25rem] object-cover mx-auto"
                src={src}
                alt="Technology"
              />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}

          <motion.div
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 1, duration: 3 }}
            className="hidden sm:block shadow-md shadow-teal-500 py-2 rounded-lg"
          >
            <img className="w-20 mx-auto" src={tailwind} alt="Technology" />
            <p className="mt-4">Tailwind CSS</p>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
