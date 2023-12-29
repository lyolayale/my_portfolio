import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ showNav, onShowNav }) {
  const navLinks = [
    { id: crypto.randomUUID(), link: "home" },
    { id: crypto.randomUUID(), link: "about" },
    { id: crypto.randomUUID(), link: "portfolio" },
    { id: crypto.randomUUID(), link: "experience" },
    { id: crypto.randomUUID(), link: "contact" },
  ];
  return (
    <nav className="flex justify-between items-center w-full h-20 p-4 text-white bg-black fixed">
      <section>
        <h1 className="text-5xl font-signature ml-2">Eric</h1>
      </section>
      <FaBars
        onClick={() => onShowNav()}
        className="md:hidden cursor-pointer mr-4 text-gray-500 z-10 hover:scale-110 duration-100"
        size={30}
      />
      <ul className="hidden md:flex list-none justify-center items-center">
        {navLinks.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100"
          >
            {link}
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
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
