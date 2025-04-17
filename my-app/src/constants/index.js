import { FaReact, FaJava, FaHtml5, FaCss3, FaDatabase, FaAws } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiPython, SiGit } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    id: "skill-1",
    icon: FaReact,
    title: "ReactJS",
    description: "Building responsive web applications with modern React features like hooks and context API."
  },
  {
    id: "skill-2",
    icon: SiJavascript,
    title: "JavaScript",
    description: "Creating interactive and dynamic web experiences with JavaScript."
  },
  {
    id: "skill-3",
    icon: FaJava,
    title: "Java",
    description: "Developing backend systems and applications with Java and JDBC."
  },
  {
    id: "skill-4",
    icon: SiCplusplus,
    title: "C++",
    description: "Building efficient algorithms and applications with C++ programming."
  },
  {
    id: "skill-5",
    icon: FaHtml5,
    title: "HTML",
    description: "Creating structured and semantic web content with HTML5."
  },
  {
    id: "skill-6",
    icon: FaCss3,
    title: "CSS",
    description: "Styling and creating beautiful UI designs with modern CSS techniques."
  },
  {
    id: "skill-7",
    icon: FaDatabase,
    title: "SQL",
    description: "Managing and querying databases with SQL technologies."
  },
  {
    id: "skill-8",
    icon: SiPython,
    title: "Python",
    description: "Basic knowledge of Python for scripting and automation tasks."
  },
  {
    id: "skill-9",
    icon: SiGit,
    title: "Git",
    description: "Version control and collaboration using Git workflows."
  },
  {
    id: "skill-10",
    icon: FaAws,
    title: "AWS",
    description: "Basic knowledge of AWS cloud services and deployments."
  },
  {
    id: "skill-11",
    icon: BsCodeSlash,
    title: "UI/UX",
    description: "Creating user-friendly interfaces with a focus on usability and design."
  },
  {
    id: "skill-12",
    icon: BsCodeSlash,
    title: "Project Management",
    description: "Managing software projects with effective planning and documentation."
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Footy Insights",
    description:
      "A React app with APIs and AI Chatbot integration offering real-time football stats, match details, and intelligent analysis in a responsive UI.",
    tags: ["React", "API", "AI", "Cloud"],
    image: "footy.jpg",
    videoDemo: true,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-2",
    title: "Personality Assessment Website",
    description:
      "ReactJS application with conditional logic for personality tests. Users answer questions to receive personalized assessments based on their responses.",
    tags: ["React", "Conditional Logic", "UI/UX"],
    image: "personality.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-3",
    title: "Bank Management System",
    description:
      "A Java application with SQL backend for managing bank accounts, transactions, and customer information with a secure authentication system.",
    tags: ["Java", "SQL", "JDBC"],
    image: "bank.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-4",
    title: "E-Commerce Website",
    description:
      "A full-featured online store with product listings, shopping cart, user authentication, and payment processing capabilities.",
    tags: ["React", "SQL", "Authentication"],
    image: "ecommerce.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-5",
    title: "Pacman Game",
    description:
      "A C# recreation of the classic Pacman arcade game with custom graphics, AI ghost behaviors, and scoring system.",
    tags: ["C#", "Game Development", "AI"],
    image: "pacman.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-6",
    title: "Console Twitter App",
    description:
      "A Java-based command-line application simulating Twitter's core functionality including tweets, follows, and timeline.",
    tags: ["Java", "CLI", "Object-Oriented"],
    image: "twitter.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-7",
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with menu display, reservation system, and beautiful UI showcasing the restaurant's offerings.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "restaurant.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/",
  },
];

export const education = [
  {
    title: "Bahria University",
    degree: "Computer Science",
    date: "2021 - 2025 (Expected)",
    description: "Currently pursuing a Bachelor's degree in Computer Science with focus on web development and software engineering.",
  },
  {
    title: "Cadet College Petaro",
    degree: "Pre-Engineering",
    date: "2018 - 2020",
    description: "Completed pre-engineering studies with strong foundation in mathematics and physics.",
  },
];

export const personalInfo = {
  name: "Muhammad Moosa Khalil",
  tagline: "ReactJS Developer | Full-Stack Explorer | API Integrator",
  email: "moosamughal21@gmail.com",
  phone: "03312674909",
  about: "I build responsive, real-time web applications with a focus on clean UI, usability, and modern web technologies.",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
}; 