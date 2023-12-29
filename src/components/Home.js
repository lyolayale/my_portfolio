import heroImage from "../assets/me.png";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function Home() {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center md:gap-28 h-full px-4">
        <section className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            I specialize in building and designing web applications with React
            and Rails. Currently, I'm enjoying my time hanging out with family
            and creating full stack projects using technologies like: React,
            Tailwind CSS, Rails, PostgreSQL, React Testing Library, and RSpec.
          </p>
          <div className="btn">
            <button className="group text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-900 cursor-pointer">
              Porfolio{" "}
              <span className="ml-2 group-hover:rotate-90 duration-200 group-hover:text-slate-500">
                <RxDoubleArrowRight size={25} />
              </span>
            </button>
          </div>
        </section>
        <div className="hero-image">
          <img
            className="rounded-2xl mx-auto drop-shadow-ds  border-2 border-slate-300"
            src={heroImage}
            alt="Eric McKee"
          />
        </div>
      </div>
    </section>
  );
}
