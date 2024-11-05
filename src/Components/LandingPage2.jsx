import React from 'react'
import { motion } from "framer-motion";
import { ThreeDCardDemo } from './landingPageComponents/test';
import { StickyScrollRevealDemo } from './landingPageComponents/test2';
import { TracingBeamDemo } from './landingPageComponents/test3';
import AuroraBackground from './ui/aurora-background';
import { AuroraBackgroundDemo } from './landingPageComponents/test4';
import { LandingPageHeader } from './landingPageComponents/LandingPageMainHeader';
import { FloatingNav } from './ui/floating-navbar';
import { navItems } from '../data';
import FAQComponent from './landingPageComponents/FAQComponent';
import WhatWeSolveComponent from './landingPageComponents/WhatWeSolveComponent';
import { Divider } from '@mui/material';
import Contact from './landingPageComponents/Contact';

function LandingPage2() {
    return (
      <>
      
      <FloatingNav navItems={navItems}/>
      <div className='h-auto'>
        <LandingPageHeader/>
        <div className="relative z-20 shadow-lg">
          <StickyScrollRevealDemo />
        </div>
        <WhatWeSolveComponent/>

        <Divider/>

        <FAQComponent/>

        <Divider/>
        <Contact/>
        <br/>

      </div>

      </>
    )
}

export default LandingPage2
