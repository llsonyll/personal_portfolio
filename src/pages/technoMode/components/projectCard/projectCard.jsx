import "./projectCard.css";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import { useTranslation } from "react-i18next";

const ProjectCard = ({ proyect, ligth = false }) => {
  const { i18n } = useTranslation();
  return (
    <li className="project mb-24" key={proyect.id}>
      <div className="description md:p-0 p-4 md:z-auto z-[2]">
        <h5 className="text-neonGreen text-sm mb-1"> {proyect.type}</h5>
        <a
          href={proyect.deployLink}
          target="_blank"
          className="text-lightesSlate text-2xl font-bold mb-5"
        >
          {proyect.name}
        </a>
        <div className="info">
          {i18n.resolvedLanguage === "en"
            ? proyect.description
            : proyect.descriptionES}
        </div>

        <ul className="tecnologies flex gap-4 mt-5 text-lightSlate text-sm relative z-10 flex-wrap">
          {proyect.tecnologies.length > 0 &&
            proyect.tecnologies.map((tec, index) => {
              return (
                <li
                  className="text-xs text-center min-w-fit"
                  key={`tech-${index}`}
                >
                  {tec}
                </li>
              );
            })}
        </ul>
        <div className="redirect flex gap-4 mt-6 text-2xl">
          {proyect.repoLink && (
            <a href={proyect.repoLink} target="_blank">
              <FaGithub />
            </a>
          )}
          <a href={proyect.deployLink} target="_blank">
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="image flex items-center">
        {/* <a href={proyect.deployLink} target="_blank" className="z-[1]" title="source: imgur.com"> */}
        <a
          href={proyect.deployLink}
          target="_blank"
          className="z-[1] md:h-3/4 h-auto"
        >
          <div className="imgContainer md:h-full h-auto">
            <img
              src={proyect.deployImg}
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
