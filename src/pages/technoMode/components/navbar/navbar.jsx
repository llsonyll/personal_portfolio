import "./navbar.css";

import logo from "../../../../assets/NiceLogo.png";
import { useEffect, useState } from "react";

import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ menuState, setMenuState }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [navbarShadow, setNavbarShadow] = useState(false);
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

  const controlShadowNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setNavbarShadow(false);
      } else {
        setNavbarShadow(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShowNavbar);
    window.addEventListener("scroll", controlShadowNavbar);

    return () => {
      window.removeEventListener("scroll", controlShowNavbar);
      window.removeEventListener("scroll", controlShadowNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar flex justify-between items-center md:px-12 px-6 fixed top-0 w-full font-semibold z-50 text-lightesSlate  ${
        showNavbar ? "" : "opacity-0 -top-24"
      } ${navbarShadow ? "shadow-xd" : ""}`}
    >
      <a href="#home">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
      </a>
      <div className="md:block hidden">
        <a
          href="#about"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">01. </span>About
        </a>
        <a
          href="#experience"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">02. </span>Experience
        </a>
        <a href="#work" className="p-2 text-xs hover:text-[#64ffda] font-light">
          <span className="text-[#64ffda] mr-1">03. </span>Work
        </a>
        <a
          href="#contact"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">04. </span>Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1E8Jf7upzrJ96vNjHD_6CR9xhXnlnThuM/view?usp=sharing"
          target="_blank"
          className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] ml-3 cursor-pointer"
        >
          Resume
        </a>
      </div>
      <button
        className={`mobileBtn md:hidden block text-2xl text-neonGreen absolute  right-6 z-20 ${
          navbarShadow ? "top-6" : "top-8"
        }`}
        onClick={() => setMenuState(!menuState)}
      >
        {menuState ? <AiOutlineClose /> : <ImMenu />}
      </button>
      <div
        className={`sidebar md:hidden block fixed right-0 top-0 bottom-0 w-3/4 ${
          menuState ? "open" : "close"
        } `}
      >
        <div className="content h-screen w-full flex flex-col justify-center items-center relative bg-lightNavy">
          <ol className="flex flex-col gap-4">
            <li onClick={() => setMenuState(false)}>
              <a href="#about" className="flex flex-col items-center">
                <div className="text-neonGreen"> 01.</div>
                <div className="font-thin text-2xl"> About </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#experience" className="flex flex-col items-center">
                <div className="text-neonGreen"> 02.</div>
                <div className="font-thin text-2xl"> Experience </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#work" className="flex flex-col items-center">
                <div className="text-neonGreen"> 03.</div>
                <div className="font-thin text-2xl"> Work </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#contact" className="flex flex-col items-center">
                <div className="text-neonGreen"> 04.</div>
                <div className="font-thin text-2xl"> Contact </div>
              </a>
            </li>
          </ol>

          <a
            href="https://drive.google.com/file/d/1E8Jf7upzrJ96vNjHD_6CR9xhXnlnThuM/view?usp=sharing"
            target="_blank"
            className="bg-transparent border-2 border-[#64ffda] text-sm py-4 px-12 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] cursor-pointer mt-20"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
