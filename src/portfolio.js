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
    "Software Developer at Orbyta, building Angular enterprise applications for Almaviva and Shopify e-commerce solutions for BasicNet, with a core stack of Angular, TypeScript, JavaScript, and modern frontend technologies."
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

const experienceInfo = {
  display: true,
  experience: [
    {
      company: "Orbyta Tech",
      companylogo: require("./assets/images/orbytaLogo.jpeg"),
      role: "IT Consultant – Angular",
      date: "April 2026 – Present",
      desc: "Consultant at Almaviva S.p.A., contributing to the frontend development of an infrastructure monitoring web application.",
      descBullets: [
        "Develop responsive enterprise features using Angular, TypeScript, Angular Material, Plotly, HTML, and SCSS.",
        "Support data-driven monitoring workflows based on predictive analysis of structural oscillations.",
        "Collaborate with cross-functional teams to deliver scalable, maintainable, and user-focused solutions."
      ]
    },
    {
      company: "Orbyta Tech",
      companylogo: require("./assets/images/orbytaLogo.jpeg"),
      role: "IT Consultant – Shopify",
      date: "July 2025 – March 2026",
      desc: "Consultant at BasicNet S.p.A., combining Shopify frontend development with Product Information Management testing.",
      descBullets: [
        "Worked on e-commerce platforms for Kappa, K-Way, Sebago, and Superga.",
        "Developed and maintained Shopify themes using Liquid, JavaScript, HTML, and CSS.",
        "Validated product data, catalog structures, workflows, and import/export operations using tools such as Matrixify."
      ]
    },
    {
      company: "Orbyta Tech",
      companylogo: require("./assets/images/orbytaLogo.jpeg"),
      role: "Web Developer Intern",
      date: "March 2025 – July 2025",
      desc: "Completed an accelerated internship focused on frontend development and production-ready web applications.",
      descBullets: [
        "Built projects using Angular, React, Shopify, and Firebase.",
        "Developed responsive interfaces and reusable frontend components.",
        "Strengthened problem-solving, autonomy, and client communication skills."
      ]
    }
  ]
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Turin",
      logo: require("./assets/images/unitologo.jpeg"),
      subHeader: "Bachelor’s Degree in Computer Science",
      desc: "Computer Science studies focused on software engineering, databases, algorithms, and modern application development.",
      descBullets: []
    }
  ]
};

const leadershipInfo = {
  display: true,
  title: "Leadership & Global Engagement",
  intro:
    "Beyond software development, I actively engage in international public policy and youth leadership initiatives. Through competitive delegate programs across Europe, I collaborate with policymakers, researchers, entrepreneurs, and young leaders to discuss technology, innovation, democracy, sustainability, and international cooperation. These experiences have strengthened my leadership, public speaking, cross-cultural communication, and policy analysis skills while allowing me to represent Lebanon on international platforms.",
  engagements: [
    {
      flag: "🇩🇪",
      country: "Germany",
      location: "Berlin, Germany",
      date: "May 2026",
      organization: "Center for Global Dialogue and Cooperation (CGDL)",
      role: "Partially Funded Delegate",
      details: [
        "Selected through a competitive international application process.",
        "Participated in discussions on leadership, innovation, and global cooperation.",
        "Collaborated with delegates from multiple countries on international challenges.",
        "Expanded my understanding of European institutions and public policy."
      ]
    },
    {
      flag: "🇧🇪",
      country: "Belgium",
      location: "Brussels, Belgium",
      date: "June 2026",
      organization: "Humanitarian International Services Association (HISA)",
      role: "Fully Funded Delegate representing Lebanon",
      details: [
        "Selected as a fully funded delegate representing Lebanon.",
        "Participated in leadership and democracy programs within the European institutional ecosystem.",
        "Visited the European Parliament, European Commission, Council of the European Union, and Parlamentarium.",
        "Engaged in discussions on democracy, digital transformation, sustainability, and youth participation."
      ]
    },
    {
      flag: "🇦🇱",
      country: "Albania",
      location: "Tirana, Albania",
      date: "August 2026",
      organization: "Future Leaders Assembly — Ecovay",
      role: "Fully Funded Delegate representing Lebanon",
      details: [
        "Selected to represent Lebanon among emerging leaders from around the world.",
        "Participated in international dialogue on sustainable development, technology, entrepreneurship, and public policy.",
        "Collaborated on ideas and solutions aligned with the United Nations Sustainable Development Goals.",
        "Strengthened international networking and cross-cultural leadership skills."
      ]
    }
  ]
};

const bigProjects = {
  title: "Things I've Built",
  subtitle: "Personal projects showcasing my development skills since the beginning of my journey. They differ in complexity and technologies used, but all reflect my passion for coding and problem-solving.",
  projects: [
    {
      projectName: "Planet Live Dashboard 🌍",
      projectDesc: "Interactive real-time dashboard with a 3D globe showing earthquakes, ISS tracking, weather search, and near-Earth asteroid data.",
      footerLink: [
        { name: "Live Demo", url: "https://planet-live-dashboard.vercel.app/" },
        { name: "GitHub", url: "https://github.com/HusseinMatar/planet-live-dashboard" }
      ]
    },
    {
  projectName: "Mr. Coffee ☕",
  projectDesc: "Bilingual single-page café website (English/Arabic) featuring a dynamic digital menu, smooth cart UX, and WhatsApp ordering integration.",
  footerLink: [
    { name: "Live Demo", url: "https://mr-coffee.web.app/" }
  ]
},
    {
  projectName: "Orbyta Foosball Cup 🏆",
  projectDesc: "Realtime foosball tournament web app with Swiss qualifiers, live knockout bracket, Firebase Auth/Firestore sync, and balanced team generation (seed & Buchholz).",
  footerLink: [
    { name: "Live Demo", url: "https://orbyta-foosball.web.app/" }
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
    { name: "Live Demo", url: "https://orbytamemory.web.app/" }
  ]
},
    {
    projectName: "BeeSharp 🐝",
    projectDesc: "A gamified quiz web app built with Angular & Firebase inspired by the hardworking bee.",
    footerLink: [
      { name: "Live Demo", url: "https://beesharp-bbdce.web.app/" }
    ]
  },
    {
      projectName: "FrecciaBus 🚌",
      projectDesc: "A full-featured Angular app to search, book, and download bus tickets across Italy. Includes Firebase Auth & PDF ticket export.",
      footerLink: [
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
      projectName: "Run for Values 🎮",
      projectDesc: "A vertical mini-game where you dodge falling trees and collect 5 core values to win.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/run-for-values" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/run-for-values/" }
      ]
    },
    {
      projectName: "RPS Battle ⚔️",
      projectDesc: "A fast-paced Rock-Paper-Scissors game with countdown pressure, animated battles, and local match history.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/RPS-Battle" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/RPS-Battle/" }
      ]
    },
        {
      projectName: "Snake Game 🐍",
      projectDesc: "A version of the classic Snake game with mobile controls, obstacles, and a timed super bonus that doubles your score and length.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/snake" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/snake/" }
      ]
    },
    {
      projectName: "Your Magic Number Calculator 🔢",
      projectDesc: "A simple and interactive Magic Number Calculator based on Numerology.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/magic-number-calculator" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/magic-number-calculator/" }
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
  experienceInfo,
  educationInfo,
  leadershipInfo,
  bigProjects,
  contactInfo,
  resumeSection
};
