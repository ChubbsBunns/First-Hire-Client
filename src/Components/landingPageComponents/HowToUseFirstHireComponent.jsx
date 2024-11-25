"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

import tutorialImage1 from "../../assets/LandingPageTutorialImages/navBar.jpg"
import tutorialImage2 from "../../assets/LandingPageTutorialImages/textFields.jpg"
import tutorialImage3 from "../../assets/LandingPageTutorialImages/companyField.jpg"
import tutorialImage4 from "../../assets/LandingPageTutorialImages/submitButton.jpg"
import tutorialImage5 from "../../assets/LandingPageTutorialImages/emailExample.jpg"

import '../Styles/imageResponsive.css'

export function HowToSignUpComponent() {
  return (
    <div className="relative w-full p-5">
    <div className="relative flex justify-center align-middle text-center p-5 text-3xl md:text-5xl pb-5 font-semibold text-custom-teal" id="explanation">
        Set Up Your Job Tracker in Less Than A Minute
    </div>
    <div className="relative flex justify-center align-middle text-center text-xl md:text-2xl pb-5 font-normal text-custom-teal">
      Follow these 4 steps, and let us do the rest.
      <button  className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
    </div>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased  relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
  <div className="relative flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-between ml-3 md:ml-0">

    <div className="flex flex-col items-center md:items-start text-left md:text-left">
      <div className="text-base md:text-xl max-w-lg mr-5 antialiased relative font-semibold text-custom-teal md:m-5">
        {item.title}
      </div>
      <div className="text-sm md:text-lg my-2 max-w-lg mr-5 antialiased relative text-custom-teal md:m-5">
        {item.description}
      </div>
    </div>


    <div className="m-auto w-full flex flex-col items-center md:items-center md:max-w-2xl max-w-lg">
      {item?.image && (
        <img
          src={item.image}
          alt="First Hire Image"
          className="image-responsive"
        />
      )}
      {item?.content && (
        <div className="text-center">{item.content}</div>
      )}
    </div>
  </div>
</div>

                  ))}
          </div>
      </TracingBeam>
      </div>
  );
}

const dummyContent = [
  {
    title: "1) Sign Up and Login",
    description:
      "Head to the Login Button in the above bar and Create a New Account!",
    content: (        <div className="flex items-center justify-center h-full w-full">
      <button
        className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      >
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </div>)
  },
  {
    title: "2) Enter Keywords",
    description:
      "Type in the keywords that you wish (Positive Keywords) and do not wish (Negative Keywords) to see in the job titles to keep track.",
    image: tutorialImage2
  },
  {
    title: "3) Select the Companies you wish to track",
    description:
      "Click on the companies in the list that you wish to keep track of.",
    image: tutorialImage3
  },
  {
    title: "4) Click the Submit Button",
    description:
      "You're all set! Time to wait for any notifications for new jobs",
    image: tutorialImage4
  },
  {
    title: "5) Wait for your non-spam emails to roll in!",
    description:
      "And thats it! Every weekday at around 6pm, we will send you an email if there have been any new jobs posted by the companies you have chosen, that match the keywords you have chosen, as seen from the example email here",
    image: tutorialImage5
  },
];
