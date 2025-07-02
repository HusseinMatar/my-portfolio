import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Hussein Matar",
  title: "Hi all, I'm Hussein",
  subTitle: emoji(
    "A passionate Front-End Developer with hands-on experience building modern, responsive web applications using HTML, CSS, JavaScript, TypeScript, Angular, and other exciting tools and frameworks."
  ),
  resumeLink: "/HusseinMatarCV.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/HusseinMatar",
  linkedin: "https://www.linkedin.com/in/hussein-matar-533ba918b/",
  gmail: "hussein.matar.1998@programmer.net",
  facebook: "https://www.facebook.com/profile.php?id=100024785903178",
  whatsapp: "https://wa.me/393293511460",
  display: true
};

const skillsSection = {
  title: "Tech I use",
  subTitle: "A curated stack of tools and technologies I use to craft responsive, efficient, and user-friendly web experiences.",
  skills: [],
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
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Chrome DevTools", fontAwesomeClassname: "fab fa-chrome" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Università degli Studi di Torino",
      logo: require("./assets/images/unitologo.jpeg"),
      subHeader: "Bachelor in Computer Science",
      duration: "",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Orbyta",
      logo: require("./assets/images/orbytaLogo.jpeg"),
      subHeader: "FrontEnd Intern Developer",
      duration: "March 2025 – Present",
      desc: "",
      descBullets: []
    }
  ]
};

const bigProjects = {
  title: "Things I've Built",
  subtitle: "Personal projects showcasing my development skills since the beginning of my journey. They differ in complexity and technologies used, but all reflect my passion for coding and problem-solving.",
  projects: [
    {
  projectName: "Run for Values 🎮",
  projectDesc: "A vertical mini-game where you dodge falling trees and collect 5 core values to win.",
  footerLink: [
    { name: "GitHub", url: "https://github.com/HusseinMatar/run-for-values" },
    { name: "Live Demo", url: "https://husseinmatar.github.io/run-for-values/" }
  ]
},
{
  projectName: "Debugger Run 🐛",
  projectDesc: "A retro-style infinite runner where you dodge bugs, warnings, and sneaky errors while leveling up as a fearless developer.",
  footerLink: [
    { name: "GitHub", url: "https://github.com/HusseinMatar/debugger-run" },
    { name: "Live Demo", url: "https://husseinmatar.github.io/debugger-run/" }
  ]
},
    {
  projectName: "OrbytaMemo 🧠",
  projectDesc: "A cosmic-themed memory game featuring two mini-games: StellarMatch (card match) and AstroPuzzle (image puzzle).",
  footerLink: [
    { name: "GitHub", url: "https://github.com/HusseinMatar/OrbytaMemo" },
    { name: "Live Demo", url: "https://orbytamemory.web.app/" }
  ]
},
    {
    projectName: "BeeSharp 🐝",
    projectDesc: "A gamified quiz web app built with Angular & Firebase inspired by the hardworking bee.",
    footerLink: [
      { name: "GitHub", url: "https://github.com/HusseinMatar/BeeSharp" },
      { name: "Live Demo", url: "https://beesharp-bbdce.web.app/" }
    ]
  },
    {
      projectName: "FrecciaBus 🚌",
      projectDesc: "A full-featured Angular app to search, book, and download bus tickets across Italy. Includes Firebase Auth & PDF ticket export.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/FrecciaBus" },
        { name: "Live Demo", url: "https://busapp-d73ac.web.app/search" }
      ]
    },
    {
      projectName: "Michelin Magic Drops 🌿",
      projectDesc: "Sustainability-focused presentation site built for the Michelin Challenge.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/MichelinMagicDrops" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/MichelinMagicDrops/" }
      ]
    },
    {
      projectName: "OrbytaVision 🌌",
      projectDesc: "A space-themed educational website exploring the solar system with smooth animations and immersive design.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/OrbytaVision" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/OrbytaVision/" }
      ]
    },
    {
      projectName: "Your Magic Number Calculator 🔢",
      projectDesc: "A simple and interactive Magic Number Calculator based on Numerology.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/magic-number-calculator" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/magic-number-calculator/" }
      ]
    },
    {
      projectName: "Business Card 💼",
      projectDesc: "A modern digital business card with animated effects and minimalistic design, built with HTML, CSS, and JS.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/Business-Card" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/Business-Card/" }
      ]
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
  resumeLink: "/HusseinMatarCV.pdf"
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle:
    "I'm always open to new opportunities, collaborations, or simply exchanging ideas with like-minded developers.",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  bigProjects,
  contactInfo,
  resumeSection
};
