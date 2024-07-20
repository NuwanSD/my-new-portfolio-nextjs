import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCard";
import { companies, projectsCarousel } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Some of Top <span className="text-purple">Achievements</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10 ">
        <InfiniteMovingCards
          items={projectsCarousel}
          direction="left"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 pt-10 max-lg:mt-10">
          {companies.map(({ id, img, name }) => (
            <div className=" flex gap-5 items-center" key={id}>
              <img src={img} alt={name} className="md:w-10 w-5" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
