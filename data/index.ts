export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am Crafting Robust and Scalable Web Applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with communications with You",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I am undergrate at Faculty of Computing and Technology, Sri Lanka",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I am Following a Bachelor of Information & Communication Degree.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently I am focusing on Next JS Full Stack Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "I am Ready to Start a Project with You?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Next JS - Modern Chat Application",
    des: "Modern chat application with Nextjs and clerk user management platfrom",
    img: "/chat-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://thread-app-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Next JS - Pricewise Web application",
    des: "Create a web application with Next.js, using web scrapping technology",
    img: "/pricewise.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pricewise-project.vercel.app/",
  },
  {
    id: 3,
    title: "React JS - Sample Nike Web Site",
    des: "Develop a frontend sample e-commerce website for Nike using React JS, featuring dynamic product displays and smooth user interactions.",
    img: "/nike-react.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://nike-website-vite.netlify.app/",
  },
  {
    id: 4,
    title: "WordPoster AI Application - Next JS",
    des: "Create an AI-powered application frontend using Next JS",
    img: "/wordposter-ai.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nisi. Ipsum, nobis. Animi in corrupti perferendis veritatis fugiat adipisci itaque quasi inventore assumenda illum ipsam quas, excepturi tenetur, aliquam rerum?",
    name: "",
    title: "",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nisi. Ipsum, nobis. Animi in corrupti perferendis veritatis fugiat adipisci itaque quasi inventore assumenda illum ipsam quas, excepturi tenetur, aliquam rerum?",
    name: "",
    title: "",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nisi. Ipsum, nobis. Animi in corrupti perferendis veritatis fugiat adipisci itaque quasi inventore assumenda illum ipsam quas, excepturi tenetur, aliquam rerum?",
    name: "",
    title: "",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nisi. Ipsum, nobis. Animi in corrupti perferendis veritatis fugiat adipisci itaque quasi inventore assumenda illum ipsam quas, excepturi tenetur, aliquam rerum?",
    name: "",
    title: "",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nisi. Ipsum, nobis. Animi in corrupti perferendis veritatis fugiat adipisci itaque quasi inventore assumenda illum ipsam quas, excepturi tenetur, aliquam rerum?",
    name: "",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "NextJS",
    img: "/next-js.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "React",
    img: "/react.png",
    nameImg: "",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    img: "/tailwindcss.png",
    nameImg: "",
  },
  {
    id: 4,
    name: "HTML",
    img: "/html.png",
    nameImg: "",
  },
  {
    id: 5,
    name: "CSS",
    img: "/css.png",
    nameImg: "",
  },
  {
    id: 6,
    name: "GIT",
    img: "/git.png",
    nameImg: "",
  },
  {
    id: 7,
    name: "Material UI",
    img: "/mu5.png",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Contributed to the development of a dynamic web platform using React.js, improving user engagement and interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Next JS Developer",
    desc: "Built high-performance web applications using Next.js, ensuring fast load times and seamless navigation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Managed the entire development lifecycle of custom web solutions for clients, from initial design to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Shopify Developer",
    desc: "Created and optimized e-commerce sites on the Shopify platform, enhancing user experience and conversion rates.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NuwanSD",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Sagara_D_Nuwan",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sagara-nuwan-70160417b/",
  },
];
