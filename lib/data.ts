import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trackheroImg from "@/public/trackhero.png";
import flairImg from "@/public/flair.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Codility Solutions",
    description:
      "Developed a modular software solution that streamlined processes, utilizing Python, Django, and RESTful APIs. Developed efficient algorithms leveraging data structures to optimize query performance, reducing average run-time over a span of 6months using Python and SQL. Developed and deployed scalable microservices architecture, reducing system downtime by 30% and improving application responsiveness, utilizing Docker, and AWS cloud infrastructure.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Senior Software Engineer",
    location: "Virtual Force INC.",
    description:
      "Integrated advanced features such as quizzes and interactive functionalities into the platform, enriching the user experience and providing additional avenues for student learning and participation. Developed messaging system using channels, allowing students, mentors, and entrepreneurs to communicate instantly within the platform. Developed and implemented an advanced caching mechanism that improved application load time by 35% using Redis, reducing server response time to under 200ms, and enhancing user experience for over 1 million daily active users.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full Stack Engineer",
    location: "TrackHero",
    description:
      "Developed backend solutions for various web applications, including pet insurance, Sony Rewards, and medical insurance portals, focusing on user authentication, profile management, and data processing. Integrated complex functionalities such as Single Sign-On (SSO), insurance quotation calculation algorithms, and payment processing systems to enhance user experience and streamline workflows across different projects. Engineered and optimized MySQL databases, achieving a 20% improvement in query performance over a 6-month period by leveraging indexing, normalization techniques, and utilization of advanced query optimization tools. Proficient in designing and developing robust API Development to facilitate seamless communication between diverse systems and enhance overall application functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full Stack Engineer",
    location: "Upwork(Freelance)",
    description:
      "Designed and developed user-friendly applications that integrate dynamic frontends using React with robust backends in Django, ensuring scalability and reliability through AWS deployment. Developed interactive dashboards for data visualization and decision-making, allowing users to filter and analyze real-time data seamlessly, enhancing operational insights. Enhanced data retrieval speed and reduced system response times by optimizing database queries, implementing indexing strategies, and employing advanced database management practices. Implemented payment systems like Stripe and PayPal to ensure secure, smooth, and reliable transactions across e-commerce platforms and reservation systems. Engineered RESTful APIs to enable efficient communication between frontend and backend systems, ensuring real-time data synchronization and integration with third-party services.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Analytics Dashboard",
    description:
      "I worked as a full-stack developer on this startup project. It's a dashboard for analytics on ecommerce stores.",
    tags: ["React", "Next.js", "Redux", "MySQL", "Tailwind", "RedShift"],
    imageUrl: corpcommentImg,
  },
  {
    title: "TrackHero",
    description:
      "A web app for managing events and reservations for multiple companies. I worked as a full-stack engineer on the platform.",
    tags: ["Next.js", "Django", "Redux", "PostgreSQL", "AWS", "Celery", "Material-UI", "Python", "TypeScript"],
    imageUrl: trackheroImg,
  },
  {
    title: "Flair",
    description:
      "Flair is a multifamily technology studio dedicated to building products and services to help you lease more with less. I worked on the backend and frontend of the platform.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: flairImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Docker",
  "AWS",
  "Celery",
  "Redis",
  "Framer Motion",
] as const;
