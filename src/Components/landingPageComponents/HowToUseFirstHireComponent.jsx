"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import firstHireImage from "../../assets/registerFirstHireImage.jpg"
import registerImage2 from "../../assets/registerImage2.jpg"
import registerImage3 from "../../assets/registerImage3.png"
import registerImage4 from "../../assets/registerImage4.jpg"

export function HowToSignUpComponent() {
  return (
    <div className="relative w-full p-5">
    <div className="relative flex justify-center align-middle text-center p-5 text-3xl md:text-5xl pb-5 font-semibold text-custom-teal" id="explanation">
        Set Up Your Job Tracker in Less Than A Minute
    </div>
    <div className="relative flex justify-center align-middle text-center text-xl md:text-2xl pb-5 font-normal text-custom-teal">
      Follow these 4 steps, and let us do the rest.
    </div>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">


              <div className="relative items-stretch md:flex ml-3 md:ml-0">
                <div className="flex flex-col">
                  <div className="text-base md:text-xl max-w-lg mr-5 antialiased relative font-semibold text-custom-teal md:m-5">
                    {item.title}
                  </div>
                  <div className=" text-sm md:text-lg my-2 max-w-lg mr-5 antialiased relative text-custom-teal md:m-5">      
                    {item.description}
                  </div>
                </div>


                <div className=" md:max-w-2xl max-w-40 ">
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      height="700"
                      width="1000"
                      className="rounded-lg mb-10 object-cover" />
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
      "Head to the Login Button and Create a New Account!",
    image: registerImage3
  },
  {
    title: "2) Enter Keywords",
    description:
      "Type in the keywords that you wish (Positive Keywords) and do not wish (Negative Keywords) to see in the job titles to keep track.",
    image: registerImage4
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
  },
];
