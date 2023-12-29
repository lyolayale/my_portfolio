import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(prev => !prev);
  }
  return (
    <div>
      <Navbar showNav={showNav} onShowNav={handleShowNav} />
      <Home showNav={showNav} />
      <About />
      <SocialMedia />
    </div>
  );
}
