"use client";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from '../../utils/cn'

import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#ffffff",
    "#9dd9e0",
    "#ffffff",
    "#9dd9e0",
    "#ffffff",
    "#9dd9e0",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #22d3ee, #10b981)", // Cyan to Emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // Pink to Indigo
    "linear-gradient(to bottom right, #f97316, #facc15)", // Orange to Yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div id="howToUseFirstHire" >

      
    <motion.div
      animate={{
        background: `linear-gradient(135deg, ${backgroundColors[activeCard % backgroundColors.length]}, ${
          backgroundColors[(activeCard + 1) % backgroundColors.length]
        })`
        /* background: `linear-gradient(135deg, ${backgroundColors.join(", ")})` */
        /* backgroundColor: backgroundColors[activeCard % backgroundColors.length] */,
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scroll-hidden"
      ref={ref}
    >


      <div className="relative flex items-center px-4 flex-col">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-custom-teal"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg max-w-sm mt-10 text-custom-teal"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>

    </motion.div>
    </div>
  );
};

StickyScroll.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ).isRequired,
  contentClassName: PropTypes.string,
};

export default StickyScroll;