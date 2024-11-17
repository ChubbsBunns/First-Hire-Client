import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import UseCaseImage from "../../assets/FirstHireUserPage.png"
export function LandingPageHeader() {
  return (
    <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(255, 255, 255)"
    gradientBackgroundEnd="rgb(255, 255, 255)"

    firstColor="100, 255, 255"
    secondColor="100, 255, 100"
    thirdColor="0, 0, 255"
    fourthColor="0, 255, 255"
    fifthColor="10, 205, 255"
    pointerColor="0,255,255" 
    >
      <div className="absolute overflow-scroll min-h-screen z-50 flex flex-col md:flex-row items-center justify-center font-bold px-4 pointer-events-none text-3xl md:text-4xl lg:text-7xl" id="about">
        <div className="flex flex-col w-full md:w-1/2 px-4 ">
          <p className="text-center md:mt-5 mt-24 p-5  mx-2 md:mx-7 bg-clip-text text-transparent drop-shadow-4xl bg-gradient-to-b from-slate-900/100 to-gray-700/80 w-full whitespace-normal break-words">
          Latest Job Alerts, Instantly Yours
          </p>
          <p className="text-center pt-3 md:pt-0  md:p-5 p-2  mx-2 md:mx-7 mt-0 text-gray-600 text-lg md:text-xl">
            Beat the competition by being the first to know of the latest job openings by using First Hire's emailing service, built specifically to track new job postings as soon as possible.

          </p>
        </div>
        <img
          src={UseCaseImage}
          className="h-60 w-full md:w-1/2 object-cover rounded-xl mt-4 md:mt-0 group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    </BackgroundGradientAnimation>
  );
}