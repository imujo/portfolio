import { IconType } from "react-icons";
import { BiLogoReact } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Technology } from "./utils/types";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

type WorkExperience = {
  from: string; // format: JUL 2022
  to: string; // format: SEP 2022
  title: string;
  subtitle: string;
  link: string; // url
  description?: string; // my work description of what i did there
};

type Education = {
  from: string; // format: JUL 2022
  to: string; // format: SEP 2022
  title: string; // What title you get after graduating or the name of the online course
  subtitle: string; // the college or the online course platform
  link: string; // url
  description?: string; // my experience there
};

export const workExperience: WorkExperience[] = [
  {
    from: "JUL 2022",
    to: "SEP 2022",
    title: "Software Engineer",
    subtitle: "ABC Tech",
    link: "https://www.abctech.com",
    description:
      "Developed and maintained web applications using the latest technologies.",
  },
  {
    from: "OCT 2022",
    to: "DEC 2022",
    title: "Data Analyst",
    subtitle: "XYZ Corporation",
    link: "https://www.xyzcorp.com",
    description:
      "Analyzed and interpreted large datasets to provide actionable insights for business decision-making.",
  },
  {
    from: "JAN 2023",
    to: "MAR 2023",
    title: "Marketing Intern",
    subtitle: "123 Marketing Agency",
    link: "https://www.123marketingagency.com",
    description:
      "Assisted in developing marketing strategies and executing promotional campaigns.",
  },
];

type Technologies = {
  title: string; // Programming language / tool name
  LeftIcon?: IconType; // An acording icon from React Icons
  href?: string; // link to the technologies website
};

export const education: Education[] = [
  {
    from: "JUL 2018",
    to: "JUN 2022",
    title: "Bachelor of Science in Computer Science",
    subtitle: "ABC University",
    link: "https://www.abcuniversity.com",
    description:
      "Studied various computer science subjects and gained practical experience through projects and internships.",
  },
  {
    from: "JAN 2023",
    to: "MAR 2023",
    title: "Introduction to Machine Learning",
    subtitle: "XYZ Online Course Platform",
    link: "https://www.xyzonlinecourses.com",
    description:
      "Learned the fundamentals of machine learning and applied them to real-world datasets.",
  },
];

export const technologies: Technologies[] = [
  {
    title: "JavaScript",
    LeftIcon: BiLogoReact,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "HTML",
    LeftIcon: BiLogoReact,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    LeftIcon: BiLogoReact,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "React",
    LeftIcon: BiLogoReact,
    href: "https://reactjs.org/",
  },
  {
    title: "Node.js",
    LeftIcon: BiLogoReact,
    href: "https://nodejs.org/",
  },
  {
    title: "Python",
    LeftIcon: BiLogoReact,
    href: "https://www.python.org/",
  },
  {
    title: "Java",
    LeftIcon: BiLogoReact,
    href: "https://www.java.com/",
  },
  {
    title: "C++",
    LeftIcon: BiLogoReact,
    href: "https://en.cppreference.com/w/cpp",
  },
  {
    title: "Git",
    LeftIcon: BiLogoReact,
    href: "https://git-scm.com/",
  },
  {
    title: "MongoDB",
    LeftIcon: BiLogoReact,
    href: "https://www.mongodb.com/",
  },
  {
    title: "SQL",
    LeftIcon: BiLogoReact,
    href: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    title: "AWS",
    LeftIcon: BiLogoReact,
    href: "https://aws.amazon.com/",
  },
];

type Project = {
  title: string;
  description: string; // 1 paragraph
  technologies: Technology[]; // list of technologies from above
  githubLink?: string;
  websiteLink?: string; // link to live website
};

export const projects: Project[] = [
  {
    title: "E-commerce Website",
    description:
      "An online store that allows users to browse and purchase products. It includes features such as user authentication, product search, and shopping cart functionality.",
    technologies: [
      { title: "React", icon: BiLogoReact, href: "https://reactjs.org/" },
      { title: "Node.js", icon: BiLogoReact, href: "https://nodejs.org/" },
      { title: "MongoDB", icon: BiLogoReact, href: "https://www.mongodb.com/" },
    ],
    githubLink: "https://github.com/example/ecommerce-project",
    websiteLink: "https://www.examplestore.com",
  },
  {
    title: "Task Manager App",
    description:
      "A web application for managing tasks and to-do lists. Users can create, edit, and mark tasks as complete. It also includes user registration and login functionality.",
    technologies: [
      { title: "Vue.js", icon: BiLogoReact, href: "https://vuejs.org/" },
      {
        title: "Firebase",
        icon: BiLogoReact,
        href: "https://firebase.google.com/",
      },
      {
        title: "CSS",
        icon: BiLogoReact,
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    githubLink: "https://github.com/example/task-manager",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides current weather conditions and forecasts for different locations. Users can search for a location and view details such as temperature, humidity, and wind speed.",
    technologies: [
      { title: "React", icon: BiLogoReact, href: "https://reactjs.org/" },
      { title: "OpenWeatherMap API", href: "https://openweathermap.org/api" },
      {
        title: "HTML",
        icon: BiLogoReact,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    ],
    githubLink: "https://github.com/example/weather-app",
    websiteLink: "https://www.exampleweatherapp.com",
  },
  {
    title: "Blog Website",
    description:
      "A blogging platform where users can create, publish, and manage blog posts. It includes features such as user authentication, commenting, and categories.",
    technologies: [
      {
        title: "Django",
        icon: BiLogoReact,
        href: "https://www.djangoproject.com/",
      },
      {
        title: "PostgreSQL",
        icon: BiLogoReact,
        href: "https://www.postgresql.org/",
      },
      {
        title: "Bootstrap",
        icon: BiLogoReact,
        href: "https://getbootstrap.com/",
      },
    ],
    githubLink: "https://github.com/example/blog-website",
  },
];

type ContactLink = {
  label: string;
  Icon?: IconType;
  href?: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "ivo.mujo.3@gmail.com",
    Icon: MdEmail,
    href: "youtube.com",
  },
  {
    label: "Github",
    Icon: AiFillGithub,
  },
  {
    label: "LinkedIn",
    Icon: BsLinkedin,
  },
];
