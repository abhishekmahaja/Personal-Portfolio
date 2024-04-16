import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  MySQL,
  git,
  systaldyn,
  codealpha,
  Sanskar,
  solidity,
  blockchain,
  polygon,
  Rozarpay,
  randamgif,
  farehub,
  x,
  gmail,
  githublogo,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3.0 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "polygon",
    icon: polygon,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Code Alpha",
    icon: codealpha,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      " Developed and maintained web applications using React.js and associated technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products.",
      "Implemented responsive design techniques to ensure seamless user experiences across various devices and browsers.",
      "Actively participated in code reviews, offering constructive feedback to foster continuous improvement within the development team.",
    ],
  },
  {
    title: "Training and placement Department",
    company_name: "Sanskar Educational Group",
    icon: Sanskar,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Dedicated and results-oriented professional with expertise in coordinating training and placement activities to facilitate career growth and employment opportunities for students.",
      "Proven track record of developing and maintaining strong relationships with industry partners and organizing successful campus recruitment drives.",
      "Proficient in utilizing various platforms and resources to bridge the gap between academia and industry, ensuring successful placements for students.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Systaldyn Pvt. Ltd.",
    icon: systaldyn,
    iconBg: "#383E56",
    date: "Dec 2023 - Current",
    points: [
      "Led the frontend development efforts for the Hitachi-Industrial-Asset-Monetization project, leveraging React and React Vite, and integrating Highcharts, Rechart, and other tools for dynamic data visualization.",
      "Also Led frontend development efforts for the Hitachi AI-EASE project, applying React Vite and integrating Highcharts, Rechart, and similar technologies for effective dynamic data visualization.",
      "Led the Hitachi Piezoelectric sensor project, utilizing React Vite and integrating Highcharts for dynamic data visualization. Generated real-time data and plotted graphs based on the collected data.",
      "Designed and implemented features for asset creation, image uploads, data input, and PDF attachment functionalities. Managed backend development using Node.js APIs to ensure efficient asset information management and data retrieval.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Randam GIF Generator App",
    description:
      "The Random GIF Generator is an interactive web application built using React for the frontend, Node.js for the backend, and MongoDB for database storage. This application allows users to generate random GIFs based on different categories or search terms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "red-text-gradient",
      },
    ],
    image: randamgif,
    live_link: "http://randamgifsgenerator.netlify.app",
    source_code_link:
      "https://github.com/abhishekmahaja/Random-GIF-Generator-Project",
  },
  {
    name: "My FaresHub Application",
    description:
      "'FaresHub' is an innovative web application designed to streamline the process of managing fares and pricing information. Developed using HTML, CSS, and JavaScript, FaresHub offers a user-friendly interface combined with powerful functionality for efficient fare management. FaresHub is built with a responsive design, ensuring seamless functionality across devices and screen sizes.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: farehub,
    live_link: "http://myfareshub.netlify.app",
    source_code_link: "https://github.com/abhishekmahaja/My-Fares-Hub",
  },
  {
    name: "RazorPay Clone",
    description:
      "The RazorPay Clone is a robust web application that replicates the functionality of the popular payment gateway service, RazorPay. Developed using modern web technologies such as HTML, CSS, JavaScript, and integrating with backend technologies like Node.js and MongoDB, this clone offers a seamless and secure platform for online payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "red-text-gradient",
      },
    ],
    image: Rozarpay,
    live_link: "http://rozarpayclone.netlify.app",
    source_code_link:
      "https://github.com/abhishekmahaja/RazorPay-Clone-Using-Tailwind",
  },
];

export { services, technologies, experiences, testimonials, projects };
