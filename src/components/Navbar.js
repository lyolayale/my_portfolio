import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar({ showNav, onShowNav }) {
  const navLinks = [
    { id: crypto.randomUUID(), link: "home" },
    { id: crypto.randomUUID(), link: "about" },
    { id: crypto.randomUUID(), link: "projects" },
    { id: crypto.randomUUID(), link: "skills" },
    { id: crypto.randomUUID(), link: "contact" },
  ];
  return (
    <nav className="flex justify-between items-center w-full h-20 p-4 text-white bg-black fixed z-10">
      <section>
        <Link to="about" smooth duration={500}>
          {" "}
          <h1 className="text-5xl font-bold ml-2 cursor-pointer hover:drop-shadow-ds duration-200 hover:border-b-2">
            EM
          </h1>
        </Link>
      </section>
      {!showNav ? (
        <FaBars
          onClick={() => onShowNav()}
          className="md:hidden cursor-pointer mr-4 text-gray-500 z-10 hover:scale-110 duration-100"
          size={30}
        />
      ) : (
        <FaTimes
          onClick={() => onShowNav()}
          className="md:hidden cursor-pointer mr-4 text-gray-500 z-10 hover:scale-110 duration-100"
          size={30}
        />
      )}
      <ul className="hidden md:flex list-none justify-center items-center">
        {navLinks.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {showNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => onShowNav(prev => !prev)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
