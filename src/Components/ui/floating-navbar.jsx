"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";

import { useNavigate } from "react-router-dom";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Replace with your actual route
  };

  const handleLoginClick = () => {
    navigate('/login'); // Replace with your actual route
  };

  const { scrollYProgress, scrollY } = useScroll();
  
  const [visible, setVisible] = useState(true);
  
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollY.get() >= 0 && scrollY.get() < 30) {
        // Make the nav visible when at the top of the page
        setVisible(true);
      } else if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit flex-wrap fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-custom-teal hover:text-neutral-500 font-bold"
            )}
          >
            <span className="block ">{navItem.icon}</span>
            <span className="sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button onClick={handleLoginClick}  className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
        <button onClick={handleRegisterClick} className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
