import React, {useEffect} from 'react'
import { HowToSignUpComponent } from './landingPageComponents/HowToUseFirstHireComponent';
import { LandingPageHeader } from './landingPageComponents/LandingPageMainHeader';
import { FloatingNav } from './ui/floating-navbar';
import { navItems } from '../data';
import FAQComponent from './landingPageComponents/FAQComponent';
import WhatWeSolveComponent from './landingPageComponents/WhatWeSolveComponent';
import { Divider } from '@mui/material';
import Contact from './landingPageComponents/Contact';

function LandingPage2() {
  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }, [])
    return (
      <>
      
      <FloatingNav navItems={navItems}/>
      <div className='h-auto'>
        <LandingPageHeader/>

        <div className="relative z-20 shadow-lg">
        <HowToSignUpComponent/>
        <br/>          
        <Divider sx={{ bgcolor: "secondary.light" }}/>
        <br/>          
        <WhatWeSolveComponent/>
        <Divider sx={{ bgcolor: "secondary.light" }}/>

        <FAQComponent/>

        <Divider sx={{ bgcolor: "secondary.light" }}/>
        <Contact/>
        <br/>          
        </div>


      </div>

      </>
    )
}

export default LandingPage2
