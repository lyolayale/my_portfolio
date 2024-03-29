import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialMedia() {
  const socialMediaLinks = [
    {
      id: crypto.randomUUID(),
      child: (
        <>
          <span className="text-white">LinkedIn</span> <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: crypto.randomUUID(),
      child: (
        <>
          <span className="text-white">GitHub</span> <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/lyolayale",
    },
    {
      id: crypto.randomUUID(),
      child: (
        <>
          <span className="text-white">Email</span> <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:lyolayale19@gmail.com",
    },
  ];
  return (
    <section className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialMediaLinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "hover:text-black flex justify-between items-center w-40 h-1/4 px-4 my-16 text-white text-xl opacity-90 hover:rounded-r-lg hover:shadow-2xl hover:shadow-white ml-[-100px] hover:ml-[-10px] hover:bg-slate-700 duration-300" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full py-4 bg-transparent"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
