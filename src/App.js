import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  const registerRef = useCallback(
    (id) => (node) => {
      sectionRefs.current[id] = node;
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.boundingClientRect.y - a.boundingClientRect.y);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0% -55% 0%" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleShowNav() {
    setShowNav((prev) => !prev);
  }

  return (
    <div className="min-h-[100dvh]">
      <Navbar
        activeSection={activeSection}
        showNav={showNav}
        onShowNav={handleShowNav}
      />
      <Home showNav={showNav} registerRef={registerRef("home")} />
      <About registerRef={registerRef("about")} />
      <Projects registerRef={registerRef("projects")} />
      <Skills registerRef={registerRef("tech-stack")} />
      <ContactForm registerRef={registerRef("contact")} />
      <SocialMedia />
    </div>
  );
}
