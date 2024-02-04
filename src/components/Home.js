import heroImage from "../assets/me.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";

export default function Home({ showNav }) {
  return (
    <section
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
              <button className="group text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black cursor-pointer border border-1 border-slate-50">
                Projects{" "}
                <span className="ml-2 group-hover:rotate-90 duration-200">
                  <RxDoubleArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </section>
        {!showNav && (
          <Link to="about" smooth duration={500}>
            {" "}
            <div className="hero-image">
              <img
                className="rounded-2xl mx-auto border-2 border-slate-300 hover:drop-shadow-ds hover:cursor-pointer hover:scale-105 duration-1000"
                src={heroImage}
                alt="Eric McKee"
              />
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
