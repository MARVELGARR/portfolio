export const socials = [
  {
    id: 1,
    name: "github",
    icon: "Github",
    link: "https://github.com/MARVELGARR",
  },
  {
    id: 2,
    name: "linkedin",
    icon: "Linkedin",
    link: "https://linkedin.com/in/marvellous-obatale",
  },
  {
    id: 3,
    name: "twitter",
    icon: "Twitter",
    link: "https://twitter.com/MARVEL_GARRA",
  },
  {
    id: 4,
    name: "email",
    icon: "Mail",
    link: "mailto:marvellousobatale@gmail.com",
  },
  {
    id: 5,
    name: "hashnode",
    icon: "FileText",
    link: "https://marvelgarra.hashnode.dev/",
  },
]

export const heroContent = {
  name: "Marvellous Obatale",
  title: "Full-Stack Developer",
  description:
    "Building performant web applications with React, Next.js, TypeScript, and Node.js. 2+ years of experience delivering 35% performance improvements and scaling user engagement.",
  cta: "View My Work",
  location: "Lagos, Nigeria",
  phone: "+2348152795806",
}

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TailwindCSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "SCSS", level: "Advanced" },
      { name: "shadcn/ui", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Prisma", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    category: "Tools & Libraries",
    items: [
      { name: "Git/GitHub", level: "Expert" },
      { name: "TanStack Query", level: "Advanced" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "Zod", level: "Advanced" },
      { name: "React Hook Form", level: "Advanced" },
      { name: "Jest", level: "Intermediate" },
      { name: "AWS S3", level: "Intermediate" },
      { name: "Auth.js", level: "Advanced" },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "Country Explorer",
    description:
      "Interactive country information explorer with advanced search and filtering capabilities. Users can explore detailed country data including capitals, populations, borders, and time zones.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/MARVELGARR/restcountries",
    live: "https://restcountries-delta.vercel.app/",
    image: "/images/projects/rest country.jpg",
    difficulty: "Normal",
  },
  {
    id: 2,
    title: "IP Address Tracker",
    description:
      "Geolocation tool that tracks IP addresses and displays location data on an interactive map with timezone and regional information.",
    technologies: ["Next.js", "TailwindCSS", "Leaflet", "Geoip API", "Framer Motion"],
    github: "https://github.com/MARVELGARR/IP-ADDRESS-TRACKER",
    live: "https://elaborate-frangipane-b3631d.netlify.app/",
    image: "/images/projects/ip tracker.jpg",
    difficulty: "Hard",
  },
  {
    id: 3,
    title: "Comment Section App",
    description:
      "Full-stack real-time comment application with authentication, allowing users to post, edit, delete, and reply to comments with persistent data storage.",
    technologies: ["Next.js", "React", "MongoDB", "Prisma", "Auth.js", "TypeScript"],
    github: "https://github.com/MARVELGARR/commentsection-app",
    live: "https://commentsection-app-3fhz-fdmtfi9w3-marvelgarr.vercel.app/",
    image: "/images/projects/active-states.jpg",
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Threads Clone",
    description:
      "Social media platform clone featuring real-time updates, responsive design, and modern UI/UX patterns for sharing and engaging with content.",
    technologies: ["Next.js", "TailwindCSS", "MongoDB", "TypeScript"],
    github: "https://github.com/MARVELGARR/threads-clone",
    live: "#",
    image: "/social-media-platform.jpg",
    difficulty: "Normal",
  },
  {
    id: 5,
    title: "E-Commerce Product Page",
    description:
      "Advanced e-commerce product page with shopping cart functionality, responsive layouts, and smooth animations for enhanced user experience.",
    technologies: ["React", "TailwindCSS", "Redux Toolkit", "Framer Motion"],
    github: "https://github.com/MARVELGARR/ecommerce-product",
    live: "#",
    image: "/images/projects/desktop-design.jpg",
    difficulty: "Hard",
  },
  {
    id: 6,
    title: "Link Shortener",
    description:
      "Utility application that shortens long URLs into concise, shareable links with easy copy-to-clipboard functionality and link management.",
    technologies: ["React", "TailwindCSS", "SCSS", "External API"],
    github: "https://github.com/MARVELGARR/urlshortener",
    live: "https://soft-frangollo-f56877.netlify.app/",
    image: "/images/projects/urlshortener.jpg",
    difficulty: "Hard",
  },
]

export const experience = [
  {
    company: "Foremedia",
    position: "Frontend Developer",
    duration: "Oct 2024 – Present",
    description:
      "Led custom React video player development, achieving 35% performance improvement and cost savings. Built role-based admin dashboard with content scheduling and analytics. Mentored junior developers on architecture patterns.",
    achievements: [
      "35% performance improvement through optimization",
      "TanStack Query caching reducing 30% network requests",
      "Role-based admin dashboard with analytics",
    ],
  },
  {
    company: "Fatherland.io",
    position: "Full-Stack Developer",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Increased user engagement by 25% building real-time chat with Next.js, Prisma, and MongoDB. Integrated multi-payment gateway system (Stripe, PayPal, Paystack) for secure global transactions. Developed internal CMS reducing administrative overhead by 40%.",
    achievements: [
      "25% user engagement increase with real-time features",
      "Multi-payment gateway integration",
      "40% admin overhead reduction via CMS",
    ],
  },
  {
    company: "Transmission Company of Nigeria",
    position: "Engineering Intern",
    duration: "Jun 2019 – Dec 2019",
    description:
      "Diagnosed and resolved 50+ SCADA network faults, achieving sub-5ms latency and 99% data accuracy in critical infrastructure monitoring systems.",
    achievements: ["50+ SCADA network faults resolved", "Sub-5ms latency achieved", "99% data accuracy maintained"],
  },
]

export const about = {
  intro:
    "Full-Stack Developer with 2+ years of experience building performant web applications using React, Next.js, TypeScript, and Node.js. Delivered 35% performance improvements and 25% user engagement increases through cross-functional collaboration.",
  bio: "I'm passionate about creating elegant solutions to complex problems. I specialize in building scalable web applications with a focus on performance, user experience, and clean architecture. My experience spans the entire development stack, from responsive frontends to robust backend systems.",
  education: "B.Eng. in Information & Communication Technology — Elizade University (Graduated Sept 2021)",
}
