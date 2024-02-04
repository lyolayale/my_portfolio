import splitBill from "../assets/portfolio/split-bill.png";
import shotcallers from "../assets/portfolio/shotcallers.png";
import guessWord from "../assets/portfolio/guess-the-word-game - Edited.png";
import meme from "../assets/portfolio/meme.png";
import apartment from "../assets/portfolio/apartment-app.png";
import tenzie from "../assets/portfolio/tenzie.png";

export default function Portfolio() {
  const portfolio = [
    {
      id: crypto.randomUUID(),
      src: splitBill,
      demo: " https://lyolayale.github.io/split-bill-frontend/",
      code: "https://github.com/lyolayale/split-bill-frontend",
      title: "Split the Bill",
    },
    {
      id: crypto.randomUUID(),
      src: shotcallers,
      demo: " https://shotcaller.onrender.com/",
      code: "https://github.com/Shot-Callers/shotcaller-app-frontend",
      title: "Shotcallers App",
    },
    {
      id: crypto.randomUUID(),
      src: guessWord,
      demo: "https://lyolayale.github.io/guess-the-word/",
      code: "https://github.com/lyolayale/guess-the-word",
      title: "Guess the Word",
    },
    {
      id: crypto.randomUUID(),
      src: meme,
      demo: "https://lyolayale.github.io/meme-generator/",
      code: "https://github.com/lyolayale/meme-generator",
      title: "Meme Generator",
    },
    {
      id: crypto.randomUUID(),
      src: apartment,
      demo: "https://lyolayale.github.io/apartment-app-frontend/",
      code: "https://github.com/lyolayale/apartment-app-frontend",
      title: "Apartment Finder",
    },
    {
      id: crypto.randomUUID(),
      src: tenzie,
      demo: "https://lyolayale.github.io/tenzie/",
      code: "https://github.com/lyolayale/tenzie",
      title: "Tenzie",
    },
  ];
  return (
    <section
      name="projects"
      className="pt-48 sm:pt-40 wrapper bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 p-2">
            Projects
          </p>
          <p className="py-10 text-xl">
            Feel free to check out some of my work right here!
          </p>
        </div>

        <article className="card grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code, title }) => (
            <div
              key={id}
              className="pb-5 border border-1 border-gray-500 rounded-lg hover:shadow-md hover:shadow-gray-500 hover:scale-105 duration-200"
            >
              {/* <h3 className="text-xl text-slate-50 mb-3 p-1">{title}</h3> */}
              <a href={demo} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={src}
                  className="rounded-t-md cursor-pointer"
                />
              </a>
              <h3 className="mt-5 text-center text-xl text-white p-1 uppercase underline-offset-4">
                {title}
              </h3>
              <div className="flex justify-center items-center gap-20 py-4 text-lg">
                <a
                  className="hover:scale-110 hover:text-gray-500 duration-200 hover:font-bold hover:underline"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Site
                </a>
                <a
                  className="hover:scale-110 hover:text-gray-500 duration-200 hover:font-bold hover:underline"
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
