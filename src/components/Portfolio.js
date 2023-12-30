import airBnb from "../assets/portfolio/air-bnb.png";
import githubGallery from "../assets/portfolio/github-gallery - Edited.png";
import guessWord from "../assets/portfolio/guess-the-word-game - Edited.png";
import meme from "../assets/portfolio/meme.png";
import noteCard from "../assets/portfolio/note-card.png";
import tenzie from "../assets/portfolio/tenzie.png";

export default function Portfolio() {
  const portfolio = [
    {
      id: crypto.randomUUID(),
      src: airBnb,
      link: "https://lyolayale.github.io/mini-airbnb-clone/",
    },
    {
      id: crypto.randomUUID(),
      src: githubGallery,
      link: "https://lyolayale.github.io/github-repo-gallery/",
    },
    {
      id: crypto.randomUUID(),
      src: guessWord,
      link: "https://lyolayale.github.io/guess-the-word/",
    },
    {
      id: crypto.randomUUID(),
      src: meme,
      link: "https://lyolayale.github.io/meme-generator/",
    },
    {
      id: crypto.randomUUID(),
      src: noteCard,
      link: "https://lyolayale.github.io/note_card/",
    },
    {
      id: crypto.randomUUID(),
      src: tenzie,
      link: "https://lyolayale.github.io/tenzie/",
    },
  ];
  return (
    <section
      name="portfolio"
      className="pt-80 sm:pt-0 wrapper bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 p-2">
            My Portfolio
          </p>
          <p className="py-10 text-xl">
            Feel free to check out some of my work right here!
          </p>
        </div>

        <article className="card grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolio.map(({ id, src, link }) => (
            <div
              key={id}
              className="rounded-lg hover:shadow-md hover:shadow-gray-500 hover:scale-105 duration-200"
            >
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={src}
                  className="rounded-t-md cursor-pointer"
                />
              </a>
              <div className="flex justify-center items-center gap-20 py-4 text-lg">
                <a
                  className="hover:scale-110 hover:text-gray-500 duration-200 hover:font-bold hover:underline"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <button className="hover:scale-110 hover:text-gray-500 duration-200 hover:font-bold hover:underline">
                  Code
                </button>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
