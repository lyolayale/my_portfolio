import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialMediaLinks = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/eric-mckee-36021a1a5/",
  },
  {
    label: "GitHub",
    icon: <FaGithub size={18} />,
    href: "https://github.com/lyolayale",
  },
  {
    label: "Email",
    icon: <HiOutlineMail size={18} />,
    href: "mailto:lyolayale19@gmail.com",
  },
];

export default function SocialMedia() {
  return (
    <section
      className="fixed right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 z-30 no-scrollbar"
    >
      <ul className="flex flex-col gap-1">
        {socialMediaLinks.map(({ label, icon, href }, index) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-12 h-12 rounded-l-full bg-slate-900/80 border border-white/10 backdrop-blur-md px-3 py-2 text-slate-300 hover:bg-brand-600 hover:text-white hover:shadow-glow transition-all duration-300 group"
            >
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                {label}
              </span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
