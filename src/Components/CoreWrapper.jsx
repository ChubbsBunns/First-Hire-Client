
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
  } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

import SearchParams2 from "./CoreComponents/SearchParams2";
import JobsForMeComponent from "./CoreComponents/JobsForMeComponent";
import Logout2 from "./CoreComponents/Logout2";
import AllJobsComponent from "./CoreComponents/AllJobsComponent";

function CoreWrapper() {
  const [activePage, setActivePage] = useState("Dashboard");
    const links = [
        {
          label: "Search Param",
          href: "#",
          icon: (
            <IconBrandTabler className="text-white-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
          component: <SearchParams2/>
        },
        {
          label: "All Jobs",
          href: "#",
          icon: (
            <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
          component: <AllJobsComponent/>
        },
        {
          label: "Logout",
          href: "#",
          icon: (
            <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
          component: <Logout2/>
        },
        {
          label: "Logout",
          href: "#",
          icon: (
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
      ];
      const [open, setOpen] = useState(false);

      const getActiveComponent = () => {
        const activeLink = links.find((link) => link.label === activePage);
      console.log(activeLink)
        return activeLink ? activeLink.component : <SearchParams2 />;
      };

      return (
        <div
          className={cn(
            " flex flex-col md:flex-row bg-gray-100  w-full h-screen flex-1  border-neutral-200 dark:border-neutral-700 overflow-hidden",
             // for your use case, use `h-screen` instead of `h-[60vh]`
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} onClick={() => setActivePage(link.label)} />
                  ))}
                </div>
              </div>

            </SidebarBody>
          </Sidebar>
          {getActiveComponent()}
        </div>
      );
    }
    export const Logo = () => {
      return (
        <Link
          href="#"
          className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
          <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-black dark:text-white whitespace-pre"
          >
            First Hire
          </motion.span>
        </Link>
      );
    };
    export const LogoIcon = () => {
      return (
        <Link
          href="#"
          className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
          <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
      );
    };
     

export default CoreWrapper
