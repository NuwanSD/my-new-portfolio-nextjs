import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Hear from my <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10 ">
        {" "}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 pt-10 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div className=" flex gap-3 md:mx-w-60 max-w-320gap-2" key={id}>
              <img src={img} alt={name} className="md:w-10 w-5" />
              <p>{name}</p>
              {/* <img src={nameImg} alt={name} className="md:w-20 w-20" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
