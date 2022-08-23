import "./technoMode.css";

import { useRef, useEffect, useState } from "react";
import logo from "../../assets/NiceLogo.png";
import profile from "../../assets/profile_photo.jpg";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

// import Navbar from "./components/navbar";

const TechnoMode = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [workPlace, setWorkPlace] = useState("WorldConnect-Peru");
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
    <main className="content">
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
            <a
              href="#work"
              className="p-2 text-xs hover:text-[#64ffda] font-light"
            >
              <span className="text-[#64ffda] mr-1">03. </span>Work
            </a>
            <a
              href="#contact"
              className="p-2 text-xs hover:text-[#64ffda] font-light"
            >
              <span className="text-[#64ffda] mr-1">04. </span>Contact
            </a>
            <a className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] ml-3 cursor-pointer">
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Side Tag */}
      <div className="side_wrapper right_side hidden font-extralight lg:flex items-center gap-4">
        <a href="mailto:sonys07@hotmail.es"> sony_s07@hotmail.es </a>
      </div>

      {/* Side Icons */}
      <div className="side_wrapper left_side hidden font-extralight lg:flex items-center gap-6 text-2xl">
        <a href="https://github.com/llsonyll" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/josep-jairo-rojas-baca-34975a1bb/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/StrkJoseph" target="_blank">
          <FaTwitter />
        </a>
      </div>

      <section id="home" className="h-screen flex flex-col justify-center">
        <div className="lg:px-60 px-20">
          <h1 className="text-neonGreen text-base mb-8 pl-1">Hi, my name is</h1>
          <h2 className="userName text-[#ccd6f6] font-extrabold">
            Josep Rojas.
          </h2>
          <h3 className="userName text-[#8892b0] font-extrabold">
            I build things for the web.
          </h3>
          <p className="user-description text-[#8892b0] max-w-md mt-5 mb-12">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <a className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] cursor-pointer">
            Check out my course
          </a>
        </div>
      </section>

      <section
        id="about"
        className="flex justify-center max-w-2xl md-0 mx-auto md:px-0 px-7 md:min-h-[340px] py-[100px]"
      >
        <div className="basis-3/4 p-5">
          <div className="title flex items-center gap-2 mb-6">
            <div className="text-[#64ffda] font-semibold text-xl tracking-wider">
              01.
            </div>
            <div className="font-bold text-2xl"> About Me </div>
            <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
          </div>

          <div className="content-about">
            Hello! My name is Josep and I enjoy creating things that live on the
            internet. My interest in web development started back in 2021 when I
            decided to try developing some trickiy projects for collegue - turns
            out researching and deploying some projects that taught me a lot
            about HTML & CSS and more stuff!
          </div>

          <div className="content-about">
            Fast-forward to today, and I’ve had the privilege of working at an
            techEd startup. My main focus these days is building accessible,
            inclusive products and digital experiences at Upstatement for a
            variety of clients.
          </div>

          <div className="content-about">
            I also develop a project that covers everything you need to build a
            web app as social network similar to Facebook and Twitter using
            React & Node JS.
          </div>

          <div className="content-about">
            Here are a few technologies I’ve been working with recently:
            <div className="flex gap-10 mt-2">
              <ul className="">
                <li className="list-item"> React</li>
                <li className="list-item"> Javascript(ES6+)</li>
                <li className="list-item"> Typescript</li>
              </ul>
              <ul className="">
                <li className="list-item"> SocketIO</li>
                <li className="list-item"> Tailwind</li>
                <li className="list-item"> Nodemailer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:block hidden m-8 relative">
          <div className="profile">
            <img
              className="relative h-64 object-cover rounded-sm"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="flex justify-center max-w-2xl md-0 mx-auto md:px-0 px-7 flex-col md:min-h-[340px] py-[100px] "
      >
        <div className="title flex items-baseline gap-2 mb-10">
          <div className=" text-[#64ffda] font-semibold text-xl tracking-wider">
            02.
          </div>
          <div className="font-bold text-2xl"> Where I've worked </div>
          <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
        </div>

        <div className="flex gap-6 ">
          <div className="md:flex hidden flex-col">
            <button
              className={` ${
                workPlace === "WorldConnect-Peru"
                  ? " text-[#64ffda] bg-lightNavy opacity-100 border-l-2 border-[#64ffda]"
                  : ""
              } bg-navy hover:bg-lightNavy opacity-50 hover:opacity-100 px-3 py-1 text-start ease-in-out duration-200`}
              onClick={() => setWorkPlace("WorldConnect-Peru")}
            >
              <span> WorldConnect </span>
            </button>
            <button
              className={` ${
                workPlace === "FractalUp"
                  ? " text-[#64ffda] bg-lightNavy opacity-100 border-l-2 border-[#64ffda]"
                  : ""
              }  bg-navy hover:bg-lightNavy opacity-50 hover:opacity-100 px-3 py-1 text-start ease-in-out duration-200`}
              onClick={() => setWorkPlace("FractalUp")}
            >
              <span> FractalUp </span>
            </button>
            <button
              className={` ${
                workPlace === "Henry"
                  ? " text-[#64ffda] bg-lightNavy opacity-100 border-l-2 border-[#64ffda]"
                  : ""
              } bg-navy hover:bg-lightNavy opacity-50 hover:opacity-100 px-3 py-1 text-start ease-in-out duration-200 `}
              onClick={() => setWorkPlace("Henry")}
            >
              <span> Henry</span>
            </button>
          </div>
          <div className="tabContent border-white">
            {workPlace === "WorldConnect-Peru" && (
              <div className="py-1">
                <h1 className="font-bold text-lg">
                  FullStack Developer - Flutter Jr. Developer
                </h1>
                <h5 className="text-[#a8b2d1] mb-6"> July - April 2020 </h5>

                <ul className="ml-5 text-[#8892b0]">
                  <li className="list-item">
                    Developed and maintained code for ReactivaPeru E-commerce
                    platform using HTML, CSS, React JS, JavaScript and PHP
                  </li>
                  <li className="list-item">
                    UI-UX Design using AdobeXD, for mobile and desktop
                    applications
                  </li>
                  <li className="list-item">
                    Developed a mobile application using Flutter for an local
                    water service provider. Visit it{" "}
                    <a
                      href="https://play.google.com/store/search?q=sedacusco&c=apps&hl=es"
                      target="_blank"
                      className="decoration-1 underline"
                    >
                      here
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {workPlace === "FractalUp" && (
              <div className="py-1">
                <h1 className="font-bold text-lg">Front-End Developer</h1>
                <h5 className="text-[#a8b2d1] mb-6"> May - March 2021 </h5>

                <ul className="ml-5 text-[#8892b0]">
                  <li className="list-item">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li className="list-item">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Vue 3, GraphQL, Apollo, WebRTC and
                    Netlify
                  </li>
                  <li className="list-item">
                    Communicate with multi-disciplinary teams of engineers,
                    developers, designers, QA team on a daily basis
                  </li>
                </ul>
              </div>
            )}
            {workPlace === "Henry" && (
              <div className="py-1">
                <h1 className="font-bold text-lg">Henry Bootcamp</h1>
                <h5 className="text-[#a8b2d1] mb-6"> April - August 2022 </h5>

                <ul className="ml-5 text-[#8892b0]">
                  <li className="list-item">
                    Learn Advanced Javascript concepts
                  </li>
                  <li className="list-item">
                    Improve soft-skills as communication, team group, agile
                    metodologies and others
                  </li>
                  <li className="list-item">
                    Developed an individual project using PERN stack. Visit it{" "}
                    <a
                      href="https://llsonyll.github.io/PI_dogs/"
                      target="_blank"
                      className="decoration-1 underline"
                    >
                      here
                    </a>
                  </li>
                  <li className="list-item">
                    Developed a group project using React JS, Redux Toolkit,
                    TailwindCSS, React Router V6, Node JS, Express, Nodemailer,
                    Passport, SocketIO, Mongoose, MongoDB. Visit it{" "}
                    <a
                      href="https://www.socialn.me/"
                      target="_blank"
                      className="decoration-1 underline"
                    >
                      here
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        id="work"
        className="flex justify-center max-w-4xl md-0 mx-auto md:px-2 px-7 flex-col md:min-h-[340px] py-[100px] "
      >
        <div className="title flex items-baseline gap-2 mb-10">
          <div className=" text-[#64ffda] font-semibold text-xl tracking-wider">
            03.
          </div>
          <div className="font-bold text-2xl"> Some Things I've built </div>
          <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
        </div>

        <div className="project flex justify-end">
          <div className="description md:text-right text-left flex flex-col justify-center md:items-end items-center md:p-0 p-4 md:w-1/2 w-full z-10">
            <h5 className="text-neonGreen text-sm mb-1"> Featured Project</h5>
            <h1 className="text-lightesSlate text-2xl font-bold mb-5">
              Dogs Project
            </h1>
            <div className="info shadow-2xl bg-lightNavy p-5 rounded-md text-lightSlate text-lg">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more.{" "}
              <strong className="text-neonGreen font-semibold">
                Available on Visual Studio Marketplace, Package Control, Atom
                Package Manager
              </strong>
              , and{" "}
              <strong className="text-neonGreen font-semibold "> npm</strong>.
            </div>

            <div className="tecnologies flex gap-4 md:justify-end justify-center mt-5 text-lightSlate text-sm">
              <span> React JS </span>
              <span> Node JS </span>
              <span> PostgreSQL </span>
              <span> HTML </span>
              <span> CSS </span>
            </div>
            <div className="redirect flex gap-4 justify-end mt-6 text-2xl">
              <a href="" target="_blank">
                <FaGithub />
              </a>
              <a href="" target="_blank">
                <BiLinkExternal />
              </a>
            </div>
          </div>
          <a href="" target="_blank" className="image">
            <img
              src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp"
              title="source: imgur.com"
              alt="project_image"
              className="h-full md:w-auto w-full object-cover"
            />
          </a>
        </div>
      </section>
      <section
        id="contact"
        className="h-screen flex justify-center items-center lg:px-60 px-20"
      >
        <h1 className="text-white"> Contact </h1>
      </section>
    </main>
  );
};

export default TechnoMode;
