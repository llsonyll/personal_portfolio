import "./technoMode.css";

import { useRef, useEffect, useState } from "react";
import logo from "../../assets/NiceLogo.png";

// import Navbar from "./components/navbar";

const TechnoMode = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlShowNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShowNavbar);

    return () => {
      window.removeEventListener("scroll", controlShowNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="content">
      <section id="home" className="h-screen">
        <header>
          <nav
            className={`navbar flex justify-between items-center px-12 fixed top-0 w-full font-semibold bg-[#0a192fd9] ${
              showNavbar ? "h-24" : "opacity-0 -top-24"
            }`}
          >
            <a href="#home">
              <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            </a>
            <div className="">
              <a href="#about" className="p-2 text-xs hover:text-[#64ffda]">
                <span className="text-[#64ffda]">01. </span>About
              </a>
              <a
                href="#experience"
                className="p-2 text-xs hover:text-[#64ffda]"
              >
                <span className="text-[#64ffda]">02. </span>Experience
              </a>
              <a href="#work" className="p-2 text-xs hover:text-[#64ffda]">
                <span className="text-[#64ffda]">03. </span>Work
              </a>
              <a href="#contact" className="p-2 text-xs hover:text-[#64ffda]">
                <span className="text-[#64ffda]">04. </span>Contact
              </a>
              <a className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] ml-3">
                Resume
              </a>
            </div>
          </nav>
        </header>
      </section>
      <section id="about" className=" h-screen">
        <h1 className="text-white"> About </h1>
      </section>
      <section id="experience" className=" h-screen">
        <h1 className="text-white"> Experience </h1>
      </section>
      <section id="work" className=" h-screen">
        <h1 className="text-white"> Work </h1>
      </section>
      <section id="contact" className=" h-screen">
        <h1 className="text-white"> Contact </h1>
      </section>
    </div>
  );
};

export default TechnoMode;
