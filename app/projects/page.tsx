import React from "react";

import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import CardProvider from "./components/CardProvider";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const page = () => {
  return (
    <div className=" bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 pt-20 pb-10 ">
      <div className="max-w-7xl w-full">
        <h1 className="heading">
          My <span className="text-purple">projects</span> experience
        </h1>
        <div className="flex flex-col mt-10 pb-20">
          <TextGenerateEffect
            words="Thank you to everyone who has supported and engaged with me. Your guidance and encouragement are invaluable to my ongoing growth."
            className="flex text-center px-12 text-sm md:text-base lg:text-xl xl:text-2xl !font-medium"
          />
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
            <CardProvider />
          </div>
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default page;
