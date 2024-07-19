"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { BackgroundGradient } from "../ui/BG-CardGradient";
import { projects } from "@/data";
import MagicButton from "../ui/MagicButton";

export function BackgroundGradientDemo() {
  return (
    <div className="py-20 px-12">
      <h1 className="heading py-12">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex p-10">
        <div className="grid md:grid-cols-2 gap-20 justify-center">
          {projects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  height="400"
                  width="400"
                  className="object-contain rounded-xl"
                />
              </div>
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {project.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.des}
              </p>
              <div className="flex justify-between mt-4 items-center">
                <button className="rounded-full text-white flex items-center space-x-1  mt-4 text-xs font-bold ">
                  <Link href={project.code} target="_blank">
                    Code to refer
                  </Link>
                </button>
                <button className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <Link href={project.link} target="_blank">
                    Check with live site
                  </Link>
                </button>
              </div>
              <div className="flex gap-5 mt-5">
                {project.iconLists.map((img) => (
                  <Image src={img} alt="ss" width={25} height={25} />
                ))}
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center">
        <Link href="/projects" target="_blank">
          <MagicButton
            title="See more my works"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
}
