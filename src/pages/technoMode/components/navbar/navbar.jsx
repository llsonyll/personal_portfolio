import "./navbar.css";

import { me } from "../../data/personal";
import { useEffect, useState } from "react";

import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import languages from "../../../../i18n/languages";

const Navbar = ({ menuState, setMenuState }) => {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useState(false);

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

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  }, [lng]);

  return (
    <nav
      className={`navbar flex justify-between items-center md:px-12 px-6 fixed top-0 w-full font-semibold z-50 text-lightesSlate  ${
        showNavbar ? "" : "opacity-0 -top-24"
      } ${navbarShadow ? "shadow-xd" : ""}`}
    >
      <a href="#home">
        <img src={me.logoURL} alt="logo" className="w-10 h-10 rounded-full" />
      </a>
      <div className="md:flex hidden items-center">
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer mr-4"
        >
          <input
            type="checkbox"
            value={lng}
            onChange={(e) => setLng(e.target.checked)}
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 outline-none ring-4 ring-blue-300 ring-blue-300 dark:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {languages[i18n.resolvedLanguage].nativeName}
          </span>
        </label>

        <a
          href="#about"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">01. </span> {t("navbar.about")}
        </a>
        <a
          href="#experience"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">02. </span>
          {t("navbar.experience")}
        </a>
        <a href="#work" className="p-2 text-xs hover:text-[#64ffda] font-light">
          <span className="text-[#64ffda] mr-1">03. </span>
          {t("navbar.work")}
        </a>
        <a
          href="#contact"
          className="p-2 text-xs hover:text-[#64ffda] font-light"
        >
          <span className="text-[#64ffda] mr-1">04. </span>
          {t("navbar.contact")}
        </a>
        <a
          href="https://drive.google.com/file/d/1E8Jf7upzrJ96vNjHD_6CR9xhXnlnThuM/view?usp=sharing"
          target="_blank"
          className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] ml-3 cursor-pointer"
        >
          {t("navbar.resume")}
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
          <label
            htmlFor="default-toggle-mobile"
            className="inline-flex relative items-center cursor-pointer mb-10"
          >
            <input
              type="checkbox"
              value={lng}
              onChange={(e) => setLng(e.target.checked)}
              id="default-toggle-mobile"
              className="sr-only peer"
            />
            <div className="w-11 h-5 bg-gray-200 outline-none ring-4 ring-blue-300 dark:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 font-thin text-lg text-gray-900 dark:text-gray-300">
              {languages[i18n.resolvedLanguage].nativeName}
            </span>
          </label>

          <ol className="flex flex-col gap-4">
            <li onClick={() => setMenuState(false)}>
              <a href="#about" className="flex flex-col items-center">
                <div className="text-neonGreen"> 01.</div>
                <div className="font-thin text-2xl"> {t("navbar.about")} </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#experience" className="flex flex-col items-center">
                <div className="text-neonGreen"> 02.</div>
                <div className="font-thin text-2xl">
                  {" "}
                  {t("navbar.experience")}{" "}
                </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#work" className="flex flex-col items-center">
                <div className="text-neonGreen"> 03.</div>
                <div className="font-thin text-2xl"> {t("navbar.work")} </div>
              </a>
            </li>
            <li onClick={() => setMenuState(false)}>
              <a href="#contact" className="flex flex-col items-center">
                <div className="text-neonGreen"> 04.</div>
                <div className="font-thin text-2xl">{t("navbar.contact")}</div>
              </a>
            </li>
          </ol>

          <a
            href="https://drive.google.com/file/d/1E8Jf7upzrJ96vNjHD_6CR9xhXnlnThuM/view?usp=sharing"
            target="_blank"
            className="bg-transparent border-2 border-[#64ffda] text-sm py-4 px-12 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] cursor-pointer mt-20"
          >
            {t("navbar.resume")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
