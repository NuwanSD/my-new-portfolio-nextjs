import React from "react";
import { FaHome } from "react-icons/fa";

import Hero from "@/components/shared/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/shared/Grid";
import RecentProject from "@/components/shared/RecentProject";
import { navItems } from "@/data";

const page = () => {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
      </div>
    </main>
  );
};

export default page;
