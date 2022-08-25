import "./technoMode.css";

import { useState } from "react";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import ProjectCard from "./components/projectCard";
import Navbar from "./components/navbar";
import { projects } from "./data/proyects";
import { me } from "./data/personal";

const TechnoMode = () => {
  const [workPlace, setWorkPlace] = useState("WorldConnect");
  const [menuState, setMenuState] = useState(false);

  const tecnologiesRow = () => {
    const group1 = me.tecnologies.slice(0, 3);
    const group2 = me.tecnologies.slice(3, 5);

    return (
      <div className="flex flex-col md:flex-row md:gap-10 gap-0 mt-4">
        <ul>
          {group1.map((tec, index) => (
            <li key={`tec-${tec}${index}`} className="list-item">
              {tec}
            </li>
          ))}
        </ul>
        <ul>
          {group2.map((tec, index) => (
            <li key={`tec-${tec}${index}`} className="list-item">
              {tec}
            </li>
          ))}
          <button className="list-item cursor-pointer" onClick={() => {}}>
            show more...
          </button>
        </ul>
      </div>
    );
  };

  return (
    <>
      <header>
        <Navbar menuState={menuState} setMenuState={setMenuState} />
      </header>
      <main
        className={`content ${
          menuState
            ? "md:blur-0 blur-sm md:overflow-auto overflow-hidden h-screen"
            : ""
        }`}
      >
        {/* Side Tag */}
        <div className="side_wrapper right_side hidden font-extralight lg:flex items-center gap-4">
          <a href={`mailto:${me.email}`}> {me.email} </a>
        </div>

        {/* Side Icons */}
        <div className="side_wrapper left_side hidden font-extralight lg:flex items-center gap-6 text-2xl">
          <a href={me.gitHubProfile} target="_blank">
            <FaGithub />
          </a>
          <a href={me.linkedInProfile} target="_blank">
            <FaLinkedin />
          </a>
          <a href={me.twitterProfile} target="_blank">
            <FaTwitter />
          </a>
        </div>

        <section id="home" className="h-screen flex flex-col justify-center">
          <div className="lg:px-60 md:px-40 px-8">
            <h1 className="text-neonGreen text-base mb-8 pl-1">
              Hi, my name is
            </h1>
            <h2 className="userName text-[#ccd6f6] font-extrabold">
              {me.secondName} {me.fatherLastName}.
            </h2>
            <h3 className="userName text-[#8892b0] font-extrabold">
              I build things for the web.
            </h3>
            <p className="user-description text-[#8892b0] max-w-md mt-5 mb-12">
              {me.description}
            </p>
            <a
              href="#work"
              className="bg-transparent border-2 border-[#64ffda] text-xs p-3 rounded-md text-[#64ffda] hover:bg-[#64ffda1a] cursor-pointer"
            >
              Check out my projects
            </a>
          </div>
        </section>

        <section
          id="about"
          className="flex justify-center max-w-2xl md-0 mx-auto md:px-0 px-4 min-h-[340px] py-[100px] text-base md:text-lg"
        >
          <div className="md:basis-3/4 basis-auto p-5">
            <div className="title flex items-center gap-2 mb-6">
              <div className="text-[#64ffda] font-semibold text-xl tracking-wider">
                01.
              </div>
              <div className="font-bold text-2xl"> About Me </div>
              <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
            </div>

            {me.aboutParagraphs.map((paragraph, index) => {
              return (
                <div key={`paragraph-${index}`} className="content-about mb-2 ">
                  {paragraph}
                </div>
              );
            })}

            <div className="content-about">
              Here are a few technologies I’ve been working with recently:
              {tecnologiesRow()}
            </div>
          </div>
          <div className="md:block hidden m-8 relative">
            <div className="profile">
              <img
                className="relative h-64 object-cover rounded-sm"
                src={me.profileURL}
                alt="profile"
              />
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="flex justify-center max-w-2xl md-0 mx-auto md:px-0 px-7 flex-col min-h-[650px] py-[100px] "
        >
          <div className="title flex items-baseline gap-2 mb-10">
            <div className=" text-[#64ffda] font-semibold text-xl tracking-wider">
              02.
            </div>
            <div className="font-bold text-2xl"> Where I've worked </div>
            <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
          </div>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="flex md:flex-col flex-row md:overflow-x-visible overflow-x-auto md:pb-0 pb-4">
              {me.experience.map((exp) => {
                return (
                  <button
                    key={exp.id}
                    className={` ${
                      workPlace === exp.name
                        ? " text-[#64ffda] bg-lightNavy opacity-100 md:border-l-2 md:border-t-0 border-t-2 border-l-0 border-[#64ffda]"
                        : ""
                    } bg-navy hover:bg-lightNavy opacity-50 hover:opacity-100 px-3 py-1 text-start ease-in-out duration-200`}
                    onClick={() => setWorkPlace(exp.name)}
                  >
                    <span> {exp.name} </span>
                  </button>
                );
              })}
            </div>
            <div className="tabContent border-white">
              {me.experience.map((exp) => {
                return (
                  workPlace === exp.name && (
                    <div className="py-1" key={exp.id}>
                      <h1 className="font-bold text-lg">{exp.role}</h1>
                      <h5 className="text-[#a8b2d1] mb-6"> {exp.date} </h5>

                      <ul className="ml-5 text-[#8892b0]">
                        {exp.info.map((inf, index) => {
                          return (
                            <li key={`inf-${index}`} className="list-item">
                              {inf}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="work"
          className="flex justify-center max-w-4xl md-0 mx-auto md:px-12 px-6 flex-col md:min-h-[340px] py-[100px] "
        >
          <div className="title flex items-baseline gap-2 mb-16">
            <div className=" text-[#64ffda] font-semibold text-xl tracking-wider">
              03.
            </div>
            <div className="font-bold text-2xl"> Some Things I've built </div>
            <div className="row h-0.5 bg-ligthersNavy opacity-50 flex-1 my-auto"></div>
          </div>

          <ul className="projects p-0 m-0">
            {projects.length > 0 &&
              projects.map((p) => {
                return <ProjectCard proyect={p} key={p.id} />;
              })}
          </ul>
        </section>
        <section
          id="contact"
          className="flex justify-center items-center lg:px-60 px-20"
        >
          <div className="content flex flex-col justify-center items-center">
            <div className="text-neonGreen">04. What's Next?</div>
            <div className="font-bold text-5xl my-4 text-center">
              Get In Touch
            </div>
            <div className="max-w-md text-center">{me.contactQuoute}</div>

            <a
              className="bg-transparent border-[1px] border-neonGreen text-xs p-3 rounded-md text-neonGreen hover:bg-[#64ffda1a] ml-3 cursor-pointer mt-8"
              href={`mailto:${me.email}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact Me
            </a>
          </div>
        </section>

        <div className="mt-40 pb-6 flex flex-col items-center justify-center text-sm">
          <a
            className="text-lightSlate hover:text-neonGreen transition-all duration-100 ease-in"
            href="https://github.com/llsonyll/personal_portfolio"
            target="_blank"
          >
            Built by {me.fullName}
          </a>
          <a
            className="text-lightSlate hover:text-neonGreen transition-all duration-100 ease-in"
            href="https://github.com/bchiang7/v4"
            target="_blank"
          >
            Design by Brittany Chiang
          </a>
        </div>
      </main>
    </>
  );
};

export default TechnoMode;
