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
    id: "experience",
    title: "Experience",
  },
  {
    id: "certificates",
    title: "Certificates",
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
    title: (
      <>
        Footy Insights <br />
    
      </>
    ),
    description:
      "A React app with APIs and AI Chatbot integration offering real-time football stats, match details, and intelligent analysis in a responsive UI.",
    tags: ["React", "API", "AI", "Cloud"],
    image: "footy.jpg",
   
    source_code_link: "https://github.com/moosakhalil",
  },  
  {
    id: "project-2",
    title: "AI Football E-Commerce Store",
    description:
      "A React.js and MongoDB based web application for selling football merchandise with user authentication and real-time inventory updates.",
    tags: ["React.js", "MongoDB", "Firebase", "JavaScript"],
    image: "football.jpg",
    source_code_link: "https://github.com/moosakhalil",
  },
  {
    id: "project-3",
    title: "Personality Assessment Website",
    description:
      "ReactJS application with conditional logic for personality tests. Users answer questions to receive personalized assessments based on their responses.",
    tags: ["React", "Conditional Logic", "UI/UX"],
    image: "PMS.jpg",
    source_code_link: "https://github.com/moosakhalil",
  },
 
  {
    id: "project-4",
    title: "E-Commerce Website",
    description:
      "A full-featured online store with product listings, shopping cart, user authentication, and payment processing capabilities.",
    tags: ["DBMS", "SQL", "Data"],
    image: "ecommerce.jpg",
    source_code_link: "https://github.com/moosakhalil",
  },
  {
    id: "project-5",
    title: "Student Feedback Management System",
    description:
      "A web application built with React.js that allows students to submit feedback on subjects, while admins can view feedback and average subject ratings through a dashboard.",
    tags: ["React.js", "Firebase", "MongoDB", "JavaScript"],
    image: "student.jpg",
    source_code_link: "https://github.com/moosakhalil",
  }, 

  {
    id: "project-5",
    title: "Cricket League Management System",
    description:
      "A C++ DSA-based CLI application to manage cricket operations including user authentication, team and player management, sponsors, matches, and points table using file handling and data structures like linked lists and vectors.",
    tags: ["C++", "CLI", "DSA", "File Handling"],
    image: "CLS.jpg",
    videoDemo: false,
    source_code_link: "https://github.com/moosakhalil",
  }
  
];

export const certificates = [
  {
    id: "cert-1",
    title: "Foundations of Cybersecurity",
    issuer: "Google via Coursera",
    date: "2023",
    description: "An introductory course exploring core concepts in cybersecurity including types of threats, security frameworks, tools, and career pathways.",
    tags: ["Cybersecurity", "Information Security", "Google", "Coursera"],
    image: "cert2.jpg", // Replace with actual image if available
    credential_link: "https://www.coursera.org/account/accomplishments/verify/WSCPZLZPZXFX" // Replace with actual link
  },
  {
    id: "cert-2",
    title: "Generative AI: Beyond the Chatbot",
    issuer: "Google via Coursera",
    date: "2024",
    description: "Explores real-world applications of generative AI beyond chatbots, including content creation, coding, personalization, and enterprise use cases.",
    tags: ["Generative AI", "Machine Learning", "Google", "Coursera", "AI Applications"],
    image: "cert1.jpg", // Replace with actual image if available
    credential_link: "https://coursera.org/verify/your-cert-id" // Replace with your actual link
  },
  {
    id: "cert-3",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google via Coursera",
    date: "2024",
    description: "Covers the fundamentals of UX design, including user-centered design, design thinking, research methods, wireframing, and prototyping.",
    tags: ["UX Design", "User Experience", "Google", "Coursera", "Design Thinking"],
    image: "cert3.jpg", // Replace with actual image if available
  },
  {
    id: "cert-4",
    title: "HTML and CSS in Depth",
    issuer: "Meta via Coursera",
    date: "2024",
    description: "Acquired advanced knowledge of semantic HTML, responsive layouts, Flexbox, Grid, and modern CSS techniques to build accessible, visually appealing, and scalable web interfaces.",
    tags: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design", "Accessibility", "Coursera", "Meta"],
    image: "cert4.jpg"
  },
];

export const education = [
  {
    title: "Bahria University",
    degree: "Software Engineering",
    date: "2022 - 2026 (Expected)",
    description: "Currently pursuing a Bachelor's degree in Computer Science with focus on web development and software engineering.",
  },
  {
    title: "Cadet College Petaro",
    degree: "FSC Pre-Engineering",
    date: "2019 - 2021",
    description: "Completed pre-engineering studies with strong foundation in mathematics and physics.",
  },
];

export const experiences = [
  {
    title: "Software Development Intern",
    company: "Jazba Innovations",
    dates: "July 14, 2025 – August 22, 2025",
    description:
      "Worked on JavaScript (ES6+), Node.js, Express.js, Tailwind CSS, and Webpack to develop and optimize responsive web applications. Enhanced skills in debugging, deployment, and teamwork while collaborating with senior developers.",
    image: "work.jpg",
  },
];

export const personalInfo = {
  name: "Muhammad Moosa Khalil",
  tagline: "ReactJS Developer | Full-Stack Explorer ",
  email: "moosamughal21@gmail.com",
  phone: "03312674909",
  about: "I build responsive real-time web apps with clean UI\nand modern technologies.",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
}; 