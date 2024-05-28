import React from "react";

import { navItems } from "@/data";
import Hero from "@/components/shared/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/shared/Grid";
import RecentProject from "@/components/shared/RecentProject";
import Clients from "@/components/shared/Clients";
import Experience from "@/components/shared/Experience";
import Process from "@/components/shared/Process";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Process />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default page;
