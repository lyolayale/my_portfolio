import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactForm() {
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
    <div
      ref={ref}
      name="contact"
      className="wrapper p-4 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <section className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          variants={{
            hidden: { x: "-100vw" },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={control}
          transition={{ delay: 0.5, duration: 2 }}
          className="text pb-10"
        >
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 p-2">
            Contact
          </p>
          <p className="text-xl py-10">
            Interested in hiring me? Submit the form below.
          </p>
        </motion.div>

        <div className="form-wrapper flex justify-center items-center">
          <motion.form
            action="https://getform.io/f/4f0c60a6-ad3b-4e7b-ba7f-208701a0afbf"
            method="POST"
            className="flex flex-col gap-10 w-full md:w-1/2"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 1, duration: 3.5 }}
          >
            <input
              className="p-2 bg-transparent border border-1 rounded-md text-white focus:outline-none hover:scale-[1.01] duration-200"
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
              autoComplete="off"
            />
            <input
              className="p-2 bg-transparent border border-1 rounded-md text-white focus:outline-none hover:scale-[1.01] duration-200"
              type="email"
              name="email"
              placeholder="Enter your email here"
              required
              autoComplete="off"
            />
            <textarea
              className="p-2 bg-transparent border border-1 rounded-md text-white focus:outline-none hover:scale-[1.01] duration-200"
              name="message"
              rows="10"
              placeholder="Enter your message here"
              required
              minLength={10}
              autoComplete="off"
            ></textarea>
            <motion.button
              variants={{
                hidden: { x: "-100vw" },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate={control}
              transition={{ delay: 0.5, duration: 2 }}
              className="tracking-widest mx-auto w-1/2 place-content-center text-white text-xl px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black border border-1 border-slate-50 hover:scale-105  duration-200"
            >
              Hire Me
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
