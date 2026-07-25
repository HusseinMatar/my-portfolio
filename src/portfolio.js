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
    "Beyond software development, I take part in international youth leadership, public policy, and cross-cultural dialogue programmes across Europe. These experiences have allowed me to represent Lebanon, engage with emerging leaders from diverse backgrounds, explore global challenges, and strengthen my communication, public speaking, collaboration, and international perspective.",
  engagements: [
    {
      flag: "🇩🇪",
      country: "Germany",
      location: "Berlin, Germany",
      date: "7–10 May 2026",
      programme: "Youth Development Forum 2026",
      organization: "Center for Global Dialogue and Cooperation (CGDL)",
      role: "Partially Funded Delegate",
      details: [
        "Participated in sessions on ethical leadership, political responsibility, mental health and resilience, climate action, and sustainable development.",
        "Contributed to intercultural dialogue, youth delegate activities, networking sessions, and collaborative discussions.",
        "Visited Berlin landmarks of historical and political significance, including the Reichstag Building, Brandenburg Gate, Berlin Wall Memorial, and Checkpoint Charlie.",
        "Strengthened my public speaking, cross-cultural communication, leadership, and understanding of global challenges."
      ]
    },
    {
      flag: "🇧🇪",
      country: "Belgium",
      location: "Brussels, Belgium",
      date: "15–18 June 2026",
      programme: "Leadership Conference on Global Development 2026",
      organization: "Headway Institute of Strategic Alliance (HISA)",
      role: "Fully Funded Delegate",
      details: [
        "Participated in discussions and activities focused on leadership, democracy, international cooperation, and global development.",
        "Visited the European Parliament, European Commission, Council of the European Union, and Parlamentarium.",
        "Engaged with delegates from different countries and developed a deeper understanding of European institutions and decision-making.",
        "Strengthened my international network, public speaking, intercultural communication, and leadership skills."
      ]
    },
    {
      flag: "🇦🇱",
      country: "Albania",
      location: "Tirana, Albania",
      date: "27–30 August 2026",
      programme: "Future Leaders Assembly 2026",
      organization: "Ecovay",
      role: "Fully Funded Delegate",
      details: [
        "Participated in leadership workshops, expert-led panels, innovation labs, policy dialogues, and cross-cultural activities.",
        "Collaborated with international delegates on ideas addressing sustainability, governance, social impact, innovation, and global challenges.",
        "Took part in team challenges, project activities, networking sessions, and cultural exchange.",
        "Strengthened practical leadership skills and built international connections supporting future community-impact initiatives."
      ]
    }
  ]
};

const bigProjects = {
  title: "Things I've Built",
  subtitle: [
    "A selection of personal projects that demonstrate my growth as a developer, from early experiments to more structured applications.",
    "Each project reflects practical experience with different technologies, problem-solving approaches, and product ideas."
  ],
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
      projectName: "Michelin Magic Drops 🌿",
      projectDesc: "Sustainability-focused presentation site built for the Michelin Challenge.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HusseinMatar/MichelinMagicDrops" },
        { name: "Live Demo", url: "https://husseinmatar.github.io/MichelinMagicDrops/" }
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
