import React from "react";
import HermitImg from "./AboutpageMedia/HermitImg.png";

function HermitSection() {
  return (
    <div className="main   text-white sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className=" content flex sm:flex-col md:flex-row md:space-x-10 sm:py-5 sm:px-10 xl:px-72 xl:space-x-0  ">
        <div className="text md:bg-nigredo md:bg-opacity-50 md:rounded-xl md:p-10 md:pr-52 xl:py-20 xl:pl-20 xl:pr-96 relative">
          <h1 className="Overskrift sm:text-left font-Ermitial sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            THE HERMIT
          </h1>
          <p className="Tekst sm:text-left font-AvenirBook md:max-w-xs md:pt-2 lg:text-lg lg:pt-3 lg:max-w-sm xl:text-xl xl:leading-8 xl:max-w-lg ">
            The brewery's visual expression is largely focused around the
            Hermit, or Hermit, who, according to the Marseillan tarot cards,
            symbolizes a journey towards knowledge, enlightenment and
            reflection. The visual universe is created by the fourth Hermit and
            freelance illustrator Julien (KRUMP).
          </p>
        </div>
        <div className="">
          <img
            src={HermitImg}
            alt="hermitimage"
            className="sm:mt-10 md:w-2/5 lg:w-2/1  md:rounded-md md:absolute md:z-20 md:right-8 md:pr-10 md:mt-10 lg:mt-3 lg:right-12 xl:w-2/6 xl:right-52 xl:mt-[-50px] shadow-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default HermitSection;