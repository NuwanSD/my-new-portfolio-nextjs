"use client";

import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3D-Card";
import Link from "next/link";

const projects = [
  {
    id: 1,
    img: "/chat-app.png",
    title: "Chat Application - Next JS",
    des: "Modern chat application with Nextjs and clerk user management platfrom",
    code: "https://github.com/NuwanSD/Thread-App.git",
    site: "https://github.com/NuwanSD/Thread-App.git",
  },
  {
    id: 2,
    img: "/pricewise.png",
    title: "NextJS Application - Web Scrapping",
    des: "Modern NextJS web application using web scrapping teachnology",
    code: "https://github.com/NuwanSD/pricewise-project.git",
    site: "https://pricewise-project.vercel.app/",
  },
  {
    id: 3,
    img: "/nike-react.png",
    title: "Sample Nike Landing Page",
    des: "Sample Nike landing page using reactjs and modern stylesheets",
    code: "https://github.com/NuwanSD/pricewise-project.git",
    site: "https://pricewise-project.vercel.app/",
  },
  {
    id: 4,
    img: "/restaurant-react.png",
    title: "Restaurant Website - ReactJS",
    des: "Sample landing page for resturant using reactjs and modern stylesheets",
    code: "https://github.com/NuwanSD/restaurant-website.git",
    site: "https://restaurant-webpage-react.netlify.app/",
  },
  {
    id: 5,
    img: "/my-old-portfolio.png",
    title: "My Old Portfolio - React JS + Sanity",
    des: "My old portfolio web site with react js sanity and framer motions",
    code: "https://github.com/NuwanSD/fortfolio-project.git",
    site: "https://sagaradnuwan.netlify.app/",
  },
  {
    id: 6,
    img: "/wordposter-ai.png",
    title: "Frontend Development - Wordposter AI Application",
    des: "Frontend development of Wordposter AI application using tailwind css and Nextjs",
    code: "",
    site: "",
  },
  {
    id: 7,
    img: "/itsa-uok.png",
    title: "ITSA Website - NextJS Full Stack",
    des: "This ITSA website using tailwind CSS and Next JS",
    code: "",
    site: "",
  },
  {
    id: 7,
    img: "/eco-memories.png",
    title: "Eco-Memories - NextJS Frontend",
    des: "Project Eco-Memories. This my university project. Used NextJS to develop the frontend",
    code: "",
    site: "https://eco-memories-next-js.vercel.app/",
  },
];

const reversedProjects = [...projects].reverse();

const CardProvider = () => {
  return reversedProjects.map((project) => (
    <CardContainer className="inter-var">
      <CardBody
        key={project.id}
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-200 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
        >
          {project.des}
        </CardItem>
        <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ={20}
            as={Link}
            href={project.code}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Code to Refer →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={project.site} target="_blank">
              Check with Live Site
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  ));
};

export default CardProvider;
