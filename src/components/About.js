import { useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <section
      name="about"
      className="pt-20 md:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4"
    >
      <div className="group max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <section className="pb-10">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </section>
        <p className="text-xl mt-20 leading-9">
          I'm Eric McKee, I specialize in full stack Rails and React
          development, implementing technologies such as PostgreSQL, Postman,
          JavaScript, Jest, RSpec, React Testing Library, and agile
          methodologies. I also have extensive experience within a collaborative
          work environment including pair programming, mob programming and
          working with colleagues within different time zones in a remote work
          setting.
        </p>
        {!show && (
          <button
            onClick={() => setShow(prev => !prev)}
            className="mt-12 text-white text-xl w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-black cursor-pointer border border-1 border-slate-50 hover:scale-105 duration-200"
          >
            Show More
          </button>
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
    </section>
  );
}
