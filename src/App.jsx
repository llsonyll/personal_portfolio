// import { useRef } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleUp } from "react-icons/fa";
import Logo from "./assets/NiceLogo.png";

import "./App.css";

function App() {
  return (
    <div className="content flex flex-col overflow-hidden">
      <div
        className="bg-[#7109A1] w-screen h-screen flex flex-col justify-center items-center px-4"
        // ref={initPage}
        id="page1"
      >
        <a target="_blank" href="https://github.com/llsonyll">
          <img
            className="shine md:h-auto h-40 border-2 border-black"
            src={Logo}
            alt="assetLogo"
          />
        </a>
        <div className="dark:text-white my-4 text-center font-normal text-base ">
          Hello, I'm{" "}
          <a
            href="https://www.linkedin.com/in/josep-jairo-rojas-baca-34975a1bb/"
            target="_blank"
            className="text-green-500 font-extrabold text-lg"
          >
            Josep Rojas
          </a>
          . I am a full-stack web developer
        </div>
        <a
          className="shine group flex items-center justify-center py-1 px-4 border-white border-2 border-solid gap-2 text-white"
          href="#page2"
        >
          <span className="">View my work</span>
          <FaArrowAltCircleRight className="icon group-hover:rotate-90" />
        </a>
      </div>
      <div
        className="w-screen h-screen flex flex-col justify-center items-center"
        // ref={secondPage}
        id="page2"
      >
        <a
          className="shine shine-red flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-1"
          href="#page1"
        >
          <span className="">Go Top</span>
          <FaArrowAltCircleUp className="" />
        </a>
      </div>
    </div>
  );
}

export default App;
