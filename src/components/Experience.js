import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import postgresql from "../assets/postgresql.png";
import react from "../assets/react.png";
import ror from "../assets/ror.png";
import ruby from "../assets/ruby.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  const techStack = [
    {
      id: crypto.randomUUID(),
      src: html,
      title: "HTML",
      style: "hover:shadow-red-500",
    },
    {
      id: crypto.randomUUID(),
      src: css,
      title: "CSS",
      style: "hover:shadow-blue-500",
    },
    {
      id: crypto.randomUUID(),
      src: github,
      title: "GitHub",
      style: "hover:shadow-white",
    },
    {
      id: crypto.randomUUID(),
      src: javascript,
      title: "JavaScript",
      style: "hover:shadow-yellow-500",
    },
    {
      id: crypto.randomUUID(),
      src: postgresql,
      title: "PostgreSQL",
      style: "hover:shadow-blue-500",
    },
    {
      id: crypto.randomUUID(),
      src: react,
      title: "React",
      style: "hover:shadow-teal-500",
    },
    {
      id: crypto.randomUUID(),
      src: ror,
      title: "Rails",
      style: "hover:shadow-red-500",
    },
    {
      id: crypto.randomUUID(),
      src: ruby,
      title: "Ruby",
      style: "hover:shadow-red-500",
    },
  ];
  return (
    <section
      name="experience"
      className="pt-80 bg-gradient-to-b from-gray-800 to-black w-full h-screen-110"
    >
      <div className="wrapper max-w-screen-lg mx-auto flex flex-col items-start justify-center w-full h-full text-white p-4">
        <section className="text">
          <p className="text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="text-xl py-10">Technologies that I work with daily.</p>
        </section>

        <section className="image-container w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`hover:shadow-md hover:scale-105 duration-500 py-2 rounded-lg
                ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt="Technology" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
          <div className="hidden sm:block hover:shadow-md hover:shadow-teal-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <img className="w-20 mx-auto" src={tailwind} alt="Technology" />
            <p className="mt-4">Tailwind CSS</p>
          </div>
        </section>
      </div>
    </section>
  );
}
