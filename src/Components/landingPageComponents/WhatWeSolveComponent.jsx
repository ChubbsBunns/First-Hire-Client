import React from 'react'

import { Timeline } from '../ui/timeline';

import internshipRatRace from '../../assets/internshipRatRace.jpg'
import employerTroubles from '../../assets/employerTroubles.jpg'
import computingTroubles from '../../assets/computingTroubles.jpg'

import companySpecific1 from '../../assets/CompanySpecific1.png'
import companySpecific2 from '../../assets/CompanySpecific2.png'
import jobStreetAlert from '../../assets/jobStreetAlerts.jpg'
import LinkedinAlerts from '../../assets/LinkedinAlerts.png'

import firstHireMainPage from '../../assets/firstHireMainPage.png'


function WhatWeSolveComponent() {
    const data = [
        {
          title: "The Career Rat Race",
          content: (
            <div>
              <p className="text-black text-xs md:text-lg font-normal mb-8">
              In today’s job market, landing an internship or job feels like an endless race. It is without a doubt that competition for both jobs and internships has never been higher.
              <br/>
              High application volumes and fierce competition mean that timing is crucial. Many companies use rolling interviews, so applying even a day or two late can reduce your chances, no matter how qualified you are. 
              <br/>
              <br/>
               <b>To stay ahead, you need to apply as soon as jobs are posted—a challenge that First Hire is designed to solve.</b>
              </p>
              <div className="grid h-auto gap-4">
                <img
                  src={internshipRatRace}
                  alt="startup template"
                  style={{ width: "80%", height: "auto" }}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={computingTroubles}
                  alt="startup template"
                  style={{ width: "80%", height: "auto" }}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src={employerTroubles}
                  alt="startup template"
                  style={{ width: "80%", height: "auto" }}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />

              </div>
            </div>
          ),
        },
        {
          title: "The Case Against Job Portals",
          content: (
            <div>
              <p className="text-black text-xs md:text-lg font-normal mb-8">
              Job portals like LinkedIn and Indeed are useful but have significant drawbacks:
              <br/>
              •  Lack of Precision: Search filters often return irrelevant results, such as unrelated or senior positions.
              <br/>
              •  Late Notifications: Notifications often arrive too late, with jobs posted weeks or months prior.
              <br/>
              •   Generic Alerts: Job alerts frequently include unrelated positions, cluttering your inbox.
              </p>
              <div className="md:grid md:grid-cols-2 md:gap-4 flex flex-col">
                <div >
                    <div className='text-center pb-3 my-3 '>For example, as a fresh graduate, some people might receive Senior Level Job Notifications. Other times the job postings sent have existed for months (and in this competitive market, chances are candidates have moved past the resume screening at that point):</div>
                <img
                  src={LinkedinAlerts}
                  alt="hero template"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                </div>
                <div>
                <div className='text-center pb-3 my-3 '>In other jobsites, people might receive job roles not relevant to them entirely (Below shows a job alert for someone with a Computing Degree, being a "Patient Service Associate" is definitely irrelevant):</div>
                    <img
                    src={jobStreetAlert}
                    alt="feature template"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "The Case Against Company Job Portals",
          content: (
            <div className='py-5'>
              <p className="text-black dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
                Company-specific portals also have limitations:
                <br/>
                •   Broad Notifications: Alerts include all new openings, not tailored to your needs.
                <br/>
                •   Notification Spam: Generic emails fill your inbox, making it hard to find relevant roles.
              </p>

              <div className="grid gap-4">
                <div>
                    <div className='text-left pb-3 m-3 '>For example, for nameless company 1, people have been sent every single new job posted by the company.</div>
                    <img
                    src={companySpecific1}
                    alt="hero template"
                    style={{ width: "70%", height: "auto" }}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>

                <div>
                    <div className='text-left pb-3 m-3 '>This is not a problem specific to one company, as many companies do have this problem. The company below is from a completely different industry as the previous one, but emailing notifications have the same problems.</div>
                    <img
                    src={companySpecific2}
                    alt="feature template"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>


              </div>
            </div>
          ),
        },
        {
            title: "How First Hire Solves the Above Problems",
            content: (
              <div>
                <p className="text-black dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
                First Hire offers user-focused precision with:
                <br/>
                •  Customizable Filters: Specify keywords and exclude unwanted roles to ensure relevant alerts.
                <br/>
                •  Timely Alerts: Get notified as soon as matching jobs are posted for early applications.
                <br/>
                •  Quality Notifications: Only receive tailored, relevant job alerts that matter.
                <br/>
                <br/>
                <b>With First Hire, you stay ahead, focusing only on roles that align with your career goals, delivered right when they appear.</b>
                </p>

                <div className="grid gap-4">
                  <img
                    src={firstHireMainPage}
                    alt="hero template"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },

      ];
      return (
        <div className="w-full p-5">
        <div className="flex justify-center align-middle p-5 text-lg md:text-5xl pb-5 font-semibold text-custom-teal" id="explanation">
            Why First Hire?
        </div>
          <Timeline data={data} />
        </div>
      );
  
}

export default WhatWeSolveComponent
