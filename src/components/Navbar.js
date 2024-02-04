import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar({ showNav, onShowNav }) {
  const navLinks = [
    { id: crypto.randomUUID(), link: "home" },
    { id: crypto.randomUUID(), link: "about" },
    { id: crypto.randomUUID(), link: "projects" },
    { id: crypto.randomUUID(), link: "tech stack" },
    { id: crypto.randomUUID(), link: "contact" },
  ];
  return (
    <nav className="flex justify-between items-center w-full h-20 p-4 text-white bg-black fixed z-10">
      <Link
        to="about"
        smooth
        className="cursor-pointer text-gray-500 hover:text-slate-50 duration-200"
      >
        {" "}
        <h1 className="hidden sm:block text-5xl font-bold ml-2">Eric McKee</h1>
        <h1 className="sm:hidden text-5xl font-bold ml-2">EM</h1>
      </Link>

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
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-slate-50 duration-200"
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
