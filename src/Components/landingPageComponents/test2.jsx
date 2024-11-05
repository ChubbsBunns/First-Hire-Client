import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal"; // Adjust the import path as necessary
import { TracingBeam } from "../ui/tracing-beam";
import chickenImage from "../../assets/registerFirstHireImage.jpg"

const content = [
  {
    title: "Set Up Your Job Tracker In Less Than A Minute",
    description:
      "Follow these 4 steps, and let us do the rest.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Psadfasdfasd
      </div>
    ),
    image: "../../assets/registerFirstHireImage.jpg"
  },
  {
    title: "1) Sign Up and Login",
    description:
      "Head to the Login Button and Create a New Account!",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Placeholder for a gif clicking into the login button
      </div>
    ),
    image: "../../assets/registerFirstHireImage.jpg"
  },
  {
    title: "2) Enter Keywords",
    description:
      "Type in the keywords that you wish (Positive Keywords) and do not wish (Negative Keywords) to see in the job titles to keep track.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-custom-teal">
        <img
          src={chickenImage}
          alt="linear board demo"
          className="h-full w-full object-cover"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    ),
  },
  {
    title: "3) Select the Companies you wish to track",
    description:
      "Click on the companies in the list that you wish to keep track of.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-custom-teal">
        Placeholder for the 
      </div>
    ),
  },
  {
    title: "4) Click the Submit Button",
    description:
      "And thats it! Every weekday at around 6pm, we will send you an email if there have been any new jobs posted by the companies you have chosen, that match the keywords you have chosen.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-custom-teal">
        This is new
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-custom-teal">
        This is new
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <>
    <div className="relative" id="howToUseFirstHire">
        <StickyScroll content={content} />
    </div>
    </>
  );
}
