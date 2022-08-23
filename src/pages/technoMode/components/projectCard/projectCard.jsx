import "./projectCard.css";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = () => {
  return (
    <li className="project mb-24">
      <div className="description md:p-0 p-4">
        <h5 className="text-neonGreen text-sm mb-1"> Featured Project</h5>
        <a className="text-lightesSlate text-2xl font-bold mb-5">
          Dogs Project
        </a>
        <div className="info">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more.{" "}
          <strong className="text-neonGreen font-semibold">
            Available on Visual Studio Marketplace, Package Control, Atom
            Package Manager
          </strong>
          , and <strong className="text-neonGreen font-semibold "> npm</strong>.
        </div>

        <ul className="tecnologies flex gap-4  mt-5 text-lightSlate text-sm">
          <li> React JS </li>
          <li> Node JS </li>
          <li> PostgreSQL </li>
          <li> HTML </li>
          <li> CSS </li>
        </ul>
        <div className="redirect flex gap-4 mt-6 text-2xl">
          <a href="" target="_blank">
            <FaGithub />
          </a>
          <a href="" target="_blank">
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="image">
        <a
          href="https://llsonyll.github.io/PI_dogs/"
          target="_blank"
          className="z-[1]"
        >
          <div className="imgContainer">
            <img
              src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp"
              title="source: imgur.com"
              alt="project_image"
              className="h-full md:w-auto w-full object-cover rounded-md"
            />
          </div>
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
