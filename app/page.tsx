import React from "react";

import Hero from "@/components/shared/Hero";
import Grid from "@/components/shared/Grid";
import Clients from "@/components/shared/Clients";
import Experience from "@/components/shared/Experience";
import Process from "@/components/shared/Process";

import { BackgroundGradientDemo } from "@/components/shared/BGCardGradient";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero /> {/*Home page hero section*/}
        <Grid /> {/*This is my introduction*/}
        <BackgroundGradientDemo /> {/*This is my recents project*/}
        <Clients />
        <Experience />
        <Process />
      </div>
    </main>
  );
};

export default page;
