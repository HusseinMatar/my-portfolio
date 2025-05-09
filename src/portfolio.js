/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Hussein Matar",
  title: "Hi all, I'm Hussein",
  subTitle: emoji(
    "A passionate Front-End Developer with hands-on experience building modern, responsive web applications using HTML, CSS, JavaScript, TypeScript, Angular, and other exciting tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/HusseinMatar",
  linkedin: "https://www.linkedin.com/in/hussein-matar-533ba918b/",
  gmail: "hussein_matar_1998@programmer.net",
  facebook: "https://www.facebook.com/profile.php?viewas=100000686899395&id=100024785903178",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Tech I Use",
  subTitle: "Tools and technologies I work with to build user-focused web apps.",
  skills: [
    emoji("⚡ Developing modern user interfaces using HTML, CSS, JavaScript, TypeScript, and Angular"),
    emoji("⚡ Connecting frontend to backend APIs and handling basic data flow and user interaction"),
    emoji("⚡ Styling responsive layouts and ensuring smooth user experience across devices")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
    { skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-wind" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" }
  ],
  display: true
};
const educationInfo = {
  display: true, // keep true to show it in "Where I'm Growing"
  schools: [
    {
      title: "Università degli Studi di Torino",
      subtitle: "Bachelor in Computer Science",
      logo_path: "unitologo.jpeg",
      alt_name: "UNITO",
      duration: "",
      website_link: "https://www.unito.it"
    }
  ]
};


// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "FrontEnd Intern Developer",
      company: "Orbyta",
      companylogo: require("./assets/images/orbytaLogo.jpeg"),
      date: "March 2025 – Present"
    }
  ]
};

// My Personal Projects
const myProjectsSection = {
  title: "Things I've Built",
  projects: [
    {
      name: "FrecciaBus 🚌",
      description: "A full-featured Angular app to search, book, and download bus tickets across Italy. Includes Firebase Auth & PDF ticket export.",
      github: "https://github.com/HusseinMatar/FrecciaBus",
      demo: "https://busapp-d73ac.web.app/"
    },
    {
      name: "To-Do List + Pomodoro ⏱️",
      description: "A productivity app combining task management and Pomodoro Timer with responsive UI for both desktop and mobile.",
      github: "https://github.com/HusseinMatar/toDoList-Pomodoro",
      demo: "https://husseinmatar.github.io/toDoList-Pomodoro/"
    },
    {
      name: "Business Card 💼",
      description: "A sleek digital business card made with HTML, CSS, and light JavaScript for interactivity and style.",
      github: "https://github.com/HusseinMatar/Business-Card",
      demo: "https://husseinmatar.github.io/Business-Card/"
    },
    {
      name: "OrbytaVision 🌌",
      description: "A space-themed educational website exploring the solar system with smooth animations and immersive design.",
      github: "https://github.com/HusseinMatar/OrbytaVision",
      demo: "https://husseinmatar.github.io/OrbytaVision/"
    },
    {
      name: "Michelin Magic Drops 🌿",
      description: "An innovative green project built for the Michelin Challenge showcasing water reuse in tire manufacturing.",
      github: "https://github.com/HusseinMatar/MichelinMagicDrops",
      demo: "https://husseinmatar.github.io/MichelinMagicDrops/"
    },
    {
      name: "Magic Number Calculator 🔢✨",
      description: "A numerology-based tool that calculates your Life Path Number with fun visuals and clean design.",
      github: "https://github.com/HusseinMatar/magic-number-calculator",
      demo: "https://husseinmatar.github.io/magic-number-calculator/"
    }
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Have an idea, a project, or just want to say hello? I'm always open to new conversations and opportunities.",
  number: "+39 329 351 1460",
  email_address: "hussein_matar_1998@programmer.net"
};

// Hire Status
const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  contactInfo,
  isHireable,
  resumeSection,
  myProjectsSection
};
