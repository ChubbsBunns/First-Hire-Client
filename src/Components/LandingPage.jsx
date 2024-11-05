import React, {useEffect} from 'react';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { shadows } from '@mui/system';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';

import FeaturedPost from './landingPageComponents/HeroHeader';
import MainFeaturedPost from './landingPageComponents/HeroHeader';
import LandingPageHeader from './landingPageComponents/LandingPageHeader';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import firstHireLogo from '../assets/firstHireLogos/firstHireLogoMain.png'
import techStackLogo  from '../assets/techStack.png'
import rowlet from '../assets/rowlet.png'

import dotenv from 'dotenv';

import searchParamWebPage from '../../src/assets/firstHireSearchParameterScreenshot.png';

import { ThreeDCardDemo } from './landingPageComponents/test';
import { StickyScrollRevealDemo } from './landingPageComponents/test2';

function LandingPage() {
    useEffect(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
    }, [])
    const mainFeaturedPost = {
        title: 'Be The First To Apply To Your Dream Job',
        description:
          "First Hire is a notification service that notifies you of jobs specific to you as soon as they are posted",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'See How It Works',
      };

      const sections = [
        { title: 'What is First Hire?', url: '#what-is-firsthire' },
        { title: 'How to use First Hire', url: '#how-to-use' },
        { title: 'What First Hire tries to solve', url: '#what-first-hire-tries-to-solve' },
        { title: 'How it works', url: '#how-it-works' },
        { title: 'About the Developer', url: '#about-developer' },
      ];

    return (
        <>
          <>
            
            <Container maxWidth="lg" sx={{backgroundColor: "rgb(211, 211, 211)", minHeight: "100vh", minWidth: "100%", fontFamily: "Helvetica, Arial, sans-serif"}}>
                <LandingPageHeader title="First Hire" sections={sections}/>
                <Divider sx={{backgroundColor: "black"}}/>
                <MainFeaturedPost post={mainFeaturedPost}/>
                <Divider sx={{backgroundColor: "black"}}/>
                <Box id="container-whatIsFirstHire" sx={{pl: "3vw", pr: "2vw" , backgroundColor: "white", boxShadow: "1"}}>
                  <br/>
                  <h1 style={{fontWeight: 550, minWidth: "100"}} id="what-is-firsthire" >What is First Hire?</h1>
                  <Box sx={{display: "flex", flexDirection: "row", flexGrow: "1"}}>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                      <>Simply put, First Hire aims to notify 
                      you of job postings specific to you as soon as they come out, 
                      so you can be the first to apply to them.</>
                      <br/>
                      <br/>
                      <>
                      To be specific, it is a emailing service that takes in 
                      the words that you're looking out for in a job title (e.g. Software, Scientist, Lab Technician, Accountant, Consultant etc),
                      and keeps track of a selection of over 100 companies that you can choose from. 
                      Whenever a job gets posted by any of the companies you choose from, 
                      and matches your chosen key words, an email is sent to 
                      you in less than a day within the job posting, 
                      prompting you to be the first to apply to these jobs.</>
                    </Box>
                    <Box className="imageBox" sx={{ maxHeight: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img style={{ maxHeight: "100%" }} src={firstHireLogo} alt="First Hire Logo" />
                    </Box>
                  </Box>
                  <br/>
                  
                  <Divider sx={{backgroundColor: "black"}}/>
                </Box>
                  
                <Box id="container-howToUseFirstHire" sx={{pl: "3vw", pr: "2vw" }}>
                  <br/>
                  <h1 style={{fontWeight: 550}} id="how-to-use">How do I use First Hire?</h1>
                  <Box>
                    <strong>1)</strong> First you click the "Sign up/Login" button on the top right of this page 
                    and create an account.
                    <ThreeDCardDemo/>
                    {/* <StickyScrollRevealDemo/> */}
                    <br/>
                    <strong>2)</strong> You should be greeted with the following web page if you have newly signed up:
                    <br/>
                    <img style={{maxWidth: "80vw"}} src={searchParamWebPage} alt="A screenshot of the First Hire Search Parameter Web Page"/>
                    <br/>
                    <strong>3)</strong> Here you should type in key phrases that match 
                    the job titles for the jobs that you are looking for (e.g. Software, Scientist, Lab Technician, Accountant, Consultant etc).
                    Then select the companies that you want to keep track off in the selection list below.
                    <br/>
                    <strong>4)</strong> If you wish, you may type in "negative" keywords to filter out specific key phrases 
                    from the jobs that match the key phrases you have given above. 
                    <br/>
                    For example, if you want to filter for the job title "Software Engineer" but do not want to be emailed 
                    jobs titled "Senior Software Engineer", consider putting the word "Senior" in this field.
                    <br/>
                    <strong>5)</strong> Once done, click the submit button. 
                    <br/>
                    <strong>6)</strong> And you are done! Now First Hire will send you emails anytime between 
                    6pm to 7pm whenever a new job title that matches your settings opens up on any of your chosen companies.
                    
                    Feel free to checkout our "Jobs For You" and "Search All Jobs" pages to look through
                    ALL current jobs that match your settings or ALL current jobs in the whole First Hire database.
                    
                    <br/><br/>
                    <h2><strong>Important things to note:</strong></h2>

                    a) New jobs will only be sent via email <strong>once</strong>.
                    This means that there will be no duplicate emails that send the same job twice.
                    Hence each email will contain unique new jobs that match your settings.
                    <br/>
                    b) The first email sent to you will contain all current existing job openings that match your job settings.
                    This does not mean that they were posted in the last 24 hours. However beyond this email,
                    all jobs sent via email will jobs openings that have been opened within the last 24 hours.
                    <br/>
                    c) Should you want to delete your account, kindly email firsthireofficial@gmail.com to request for account deletion. We will get to you as soon as possible.
                    <br/>
                  </Box>
                  <br/>
      
                  <Divider sx={{backgroundColor: "black"}}/>
                </Box>

                <Box id="container-whatFirstHireTriesToSolve" sx={{pl: "3vw", pr: "2vw", backgroundColor: "white", boxShadow: "1"}}>
                  <br/>
                  <h1 style={{fontWeight: 550}} id="what-first-hire-tries-to-solve">What First Hire Tries To Solve</h1>
                  <Box>

                    <h2>The struggles with High Job Application Rates, and Rolling Interviews</h2>
                    <Box>Its tough getting a job, or even an internship nowadays. Many youth's nowadays are drawn into the work or even internship rat race, with over thousands of application for a role/internship with only 2 spots as seen from <Link href="https://www.channelnewsasia.com/singapore/internship-rat-race-job-exposure-competition-gain-experience-learning-opportunity-university-4412936">this article from CNA</Link></Box>
                    <Box>To make things even tougher, most bigger companies operate on a rolling interview basis, to cut a long explanation short, it essentially means that if you apply for a job application "late", you might not even be given the chance to interview, regardless of however good you might be.</Box>
                    <br/>
                    <Box>In my own experience, some companies are so popular such that if you apply to a job 2 days of it was first posted, you are simply too late.</Box>
                    <Box><strong>This simply means that it pays to be the first few people to apply to a job.</strong></Box>
                    <br/>
                    <br/>
                    <h2>Flaws in Job Portals and Company Portals in notifying us of the latest jobs.</h2>
                    <Box>To be fair, there are tools online right now that exist to try to combat these problems, namely Job Portals like Linkedin and Indeed etc, and company portals themselves.</Box>
                    <Box>However I find both of them to have flaws that make it more cumbersome to use them than necessary.</Box>
                    <br/>
                    <Box><strong>1) The case against Job Portals:</strong></Box>
                    <Box>Job Portals are amazing places to find jobs. However they fail to accurately capture your data accurately in most cases.</Box>
                    <Box>For example, in Linkedin, I would try to find jobs and type in "Software Engineer" as I am trying to look for a software engineer job.</Box>
                    <Box>Rightfully enough, it is able to find all jobs that have the term "Software Engineer" in them.</Box>
                    <Box>But it is a catch all term. Hence even though in my case where I hope to find software engineer roles that relate to web development, Linkedin might identify specific Software Engineering jobs like "Embedded Software Engineer" or "DevOps Software Engineer" which are not very aligned with my interests.</Box>
                    <Box>Senior roles such as "Senior Software Developer" will also pop up on my recommended list, even though I am personally in my early career.</Box>
                    <Box>To make matters worse, even if the job Linkedin recommends me a relevant job, Linkedin will recommend me and email me job openings that have been opened for months, meaning that it is definitely too late to apply for them.</Box>
                    <Box>This is an issue not only with Linkedin, but also with many other job portals that I have personally used before.</Box>
                    <Box><strong>This simply means that there are few job notification services that allow for user-customized filters that can filter jobs recommended to them.</strong></Box>
                    <Box><strong>Their notification systems for new jobs are also not prompt, causing us to apply for jobs that are probably already filled/ that new job applicants have no chance for an interview. </strong></Box>
                    <Box><strong>Hence the email notifications from these portals are often just spam/ contain jobs that are red herrings.</strong></Box>
                    <br/>
                    <Box><strong>2) The case against Company Portals:</strong></Box>
                    <Box>Company Portals sometimes provide a service that allows you to keep track of a companies' job openings.</Box>
                    <Box>However more than often, these companies will email you if there are <strong>ANY</strong> new job openings, regardless of job role.</Box>
                    <Box>That means emails from Companies pertaining to new openings are often just spam as they usually just send you jobs unrelated to you</Box>
                    <Box><strong>Simply put, Company Portal email notifications are also usually spam.</strong></Box>
                    <br/>
                    <br/>

                    <h1>The Case for First Hire</h1>
                    <Box>First Hire provides filters that are the user can specify. Furthermore the "negative key phrases" feature provides further control for users to filter out unwanted emails, solving the spam issue of getting unrelated job notifications.</Box>
                    <Box><strong>This makes every email from First Hire Matter (which is what I believe should be the purpose of email notifications to begin with)</strong></Box>
                    <br/>
                    <Box>Being able to get notifications as soon as job openings are posted ensure that <strong>the emails that First Hire send are not red herrings</strong> and contain jobs that you have the highest chance of getting an interview should you apply for it as soon as possible.</Box>
                    <Box><strong>Hence First Hire is able to give you a head start in applying to jobs as soon as they open.</strong></Box>
                    <br/>
                    <br/>
                    <Divider sx={{backgroundColor: "black"}}/>
                  </Box>
                </Box>

              <Box id="container-howFirstHireWorks" sx={{pl: "3vw", pr: "2vw" }}>
                  <br/>
                  <h1 style={{fontWeight: 550}} id="how-it-works">How it works</h1>
                  <Box>
                    <strong>Technical stuff incoming, feel free to skip if you get bored by this stuff.</strong>
                    <br/>
                    <br/>
                    <h2>First Hire comprises of the following stacks:</h2>
                    <Box sx={{ maxHeight: "40vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img style={{maxHeight: "60vh"}}src={techStackLogo} alt="Tech Stack Logo"></img>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                      <br/>
                      <Box><strong>Basic Rundown:</strong></Box>
                      <Box>Frontend: ReactJS + MUI</Box>
                      <Box>Backend: NodeJS + Express</Box>
                      <Box>Auth/ Identity Manager: BCrypt + Self Managed</Box>
                      <Box>Database: MongoDB</Box>
                      <Box>Other Services: AWS SES (Emailing capabilities), Selenium (Scrapping capabilities), node-cron (Scheduling) </Box>
                    </Box>
                    <br/>
                    <Box>
                      <h2>Basic Rundown of core emailing feature:</h2>
                      <Box>1) Everyday, the NodeJS + Express function triggers a job query to use Selenium to scrape every single company in our database for the latest updated jobs.</Box>
                      <Box>2) Once done, it checks through the sent job data history in every single user object. Before sending out emails, it updates the sent history to check for 2 things:</Box>
                      <Box>&nbsp;  a) If there are jobs in a user's sent job data history that do not exist in the jobs today, that means a job opening that existed yesterday was removed.</Box>
                      <Box>&nbsp;  &nbsp;  &nbsp;  We remove these now non-existent jobs just in case sometime in the future the company posts a new opening for the same role with the same job title. </Box>
                      <Box>&nbsp;  b) If there are jobs that are in the jobs today but are not in the user's sent job data history, we collect them together and send them to the user as an email.</Box>
                      <Box>3) Thereafter, an email is promptly sent to each user using AWS SES.</Box>
                      <Box>Honestly speaking its pretty much that simple. I wish coding it were that simple though :,)</Box>
                    </Box>
                  </Box>
                  <br/>
      
                  <Divider sx={{backgroundColor: "black"}}/>
                </Box>

                <Box id="container-aboutTheDeveloper" sx={{pl: "3vw", pr: "2vw", backgroundColor: "white", boxShadow: "1"}}>
                  <br/>
                  <h1 style={{fontWeight: 550}} id="about-developer">About the Developer</h1>
                  <Box sx={{ maxHeight: "fitContent", minWidth: "40vw", display: "flex", justifyContent: "flex-start", alignItems: "flexEnd" ,  margin: "5vh"}}>
                    <Box>
                      <h1>Hello! I'm Dylan</h1>
                      <Box>I'm an aspiring Web Developer, and developed this tool to help anyone fighting for jobs in this brutal world out there :)</Box>
                      <Box>If you'd like to see more of what I have done, feel free to see my personal portfolio website <strong><Link href="https://tinyurl.com/dylanhoshujie">here</Link></strong></Box>
                    </Box>

                    <Box id="test">
                    <Box className="imageBox" sx={{ maxHeight: "fitContent", minWidth: "40vw", display: "flex", justifyContent: "flex-start", alignItems: "flexEnd", flexDirection: "column" }}>
                      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>By the way, I do love Rowlets a lot.</Box>
                      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>Heres a Rowlet.</Box>
                      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}><img style={{ height: "400px", width: "400px" }} src={rowlet} alt="First Hire Logo" /></Box>  
                    </Box>
                    </Box>   
                  </Box>
                </Box>

                <Divider sx={{backgroundColor: "black"}}/>
            </Container>
          </>
        </>
    )
}

export default LandingPage;