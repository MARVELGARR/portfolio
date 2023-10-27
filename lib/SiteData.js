
export const socials = [
    {
        id:1, name:"facebook-icon", img:"/images/facebook.png", link: "https://www.facebook.com/marvel.garra/"
    },
    {
        id:2, name:"twitter-icon", img:"/images/twitter.png", link: "https://twitter.com/MARVEL_GARRA"
    },
    {
        id:3, name:"linkedin-icon", img:"/images/linkedin.png", link: "https://www.facebook.com/marvel.garra/"
    },
    {
        id:4, name:"github-icon", img:"/images/github.png", link: "https://github.com/MARVELGARR"
    },
    {
        id:5, name:"frontendmentor-icon", img:"/images/frontend.png", link: "https://www.frontendmentor.io/profile/MARVELGARR"
    },
    {
        id:6, name:"hashnode-icon", img:"/images/hashnode.png", link: "https://marvelgarra.hashnode.dev/"
    },
    {
        id:7, name:"whatsapp-icon", img:"/images/240_F_532206245_N1xYEHrZVIWU1ihamWwmDbh1gZWGU7Jl.jpg", link: "https://wa.me/+2348152795806"
    }
];

export const nav = [
    {
        id:1, name:"home", link:"/",
    },
    {
        id:2, name:"about", link:"/about",
    },
    {
        id:3, name:"potfolio", link:"/potfolio",
    },
    {
        id:4, name:"contact", link:"/contact",
    }

]
export const HomeData = {
    Intro:{ h1:"Hey!, I'm Marvellous, a frontend developer with 1 year of experience", p:"Welcome to my portfolio website! I'm a frontend developer specializing in creating exceptional user experiences through clean code and captivating designs."},
    HeroImage:{ id:1, image:"/images/20211026_090154.jpg", name:"Hero Image"},
    AboutHeroImage:{ id:2, image:"/images/312614971_5052626551503880_5030827964489385756_n.jpg", name:"About me HeroImage"},
    AboutHeroParagraph:{ id:3, p: "I'm Marvellous Obatale, a passionate frontend engineer with a year of experience in building and creating in the public domain. I have a genuine love for computers and technology, and I'm constantly driven by the desire to explore the ever-evolving world of web development.From the early stages of my journey, I've immersed myself in challenging projects and sought out opportunities to showcase my skills. With each line of code I write, I strive to deliver elegant and user-friendly solutions that bring ideas to life on the digital canvas. The ability to create something tangible from mere lines of code never ceases to amaze and inspire me."}
}

export const Skills = [
    {
        id:1, image:"/images/skills/html.png", name: "HTML"
    },
    {
        id:2, image:"/images/skills/1452px-CSS3_logo_and_wordmark.svg.png", name: "CSS"
    },
    {
        id:3, image:"/images/skills/javascrip.png", name: "JAVASCRIPT"
    },
    {
        id:4, image:"/images/skills/tailwind.png", name: "TAILWIND"
    },
    {
        id:5, image:"/images/skills/react.png", name: "REACT Js"
    },
    {
        id:6, image:"/images/nextjs-icon.svg", name: "Next JS"
    },
    {
        id:7, image:"/images/skills/framer motion.png", name: "FRAMER MOTION"
    },
]

export const Project = [
    {
        id:1, 
        title:"Country Explorer", 
        stack:["Next.js", "Scss", "Tailwind", "Framer-Motion"], 
        skills:[ "/images/nextjs-icon.svg", "/images/skills/scss.png", "/images/skills/tailwind.png", "/images/skills/framer motion.png" ],
        Github:"https://github.com/MARVELGARR/restcountries", 
        LiveSite:"https://restcountries-delta.vercel.app/", 
        images:"/images/projects/rest country.jpg", 
        description:"Users can search for a specific country by entering its name or selecting from a list. The application retrieves and displays detailed information about the selected country, including its capital, population, area, borders, languages spoken, currencies used, and time zone.",
        keyFeatures:[
            {
                id:"1", feature:"Country Search: Users can search for a specific country by entering its name or selecting from a list. The application retrieves and displays detailed information about the selected country, including its capital, population, area, borders, languages spoken, currencies used, and time zone."
            },
            {
                id:"2", feature:"Country List: Users can view a list of countries, sorted alphabetically or by population. Each country in the list displays essential details such as the flag, name, population, and area. Clicking on a country in the list provides detailed information about that country."
            },
            {
                id:"3", feature:"The application displays the flag of each country alongside its information. This visual representation helps users quickly identify and recognize countries."
            },
            {
                id:"4", feature:"Mobile Responsiveness: The application is designed to be responsive and compatible with various devices, including mobile phones and tablets. Users can access and utilize the IP Address Tracker on different platforms, ensuring a seamless experience regardless of the device they use."
            },

        ]
    },
    {
        id:2, 
        title:"IP-ADDRESS-TRACKER", 
        stack:["Next.js", "Tailwind", "Framer-Motion", "JS Leaflet library", "React leaflet", "Geoip api"], 
        skills:[ "/images/nextjs-icon.svg", "/images/skills/scss.png", "/images/skills/leaflet.png", "/images/skills/tailwind.png", ],
        Github:"https://github.com/MARVELGARR/IP-ADDRESS-TRACKER", 
        LiveSite:"https://elaborate-frangipane-b3631d.netlify.app/", 
        images:"/images/projects/ip tracker.jpg", 
        description:"The IP Address Tracker is a web application that allows users to Track location, timezone, and it will be displayed in a map of a specific IP address by entering its IP address.",
        keyFeatures:[
            {
                id:"1", feature:"IP Address Tracking: Users can input an IP address into the application to track its location. The application then retrieves and displays information related to that IP address, including the country, region, city, and geographical coordinates."
            },
            {
                id:"2", feature:"Country List: Users can view a list of countries, sorted alphabetically or by population. Each country in the list displays essential details such as the flag, name, population, and area. Clicking on a country in the list provides detailed information about that country."
            },
            {
                id:"3", feature:"The application provides the timezone associated with the tracked IP address. This information can be useful for users who need to coordinate activities or schedule events across different time zones."
            },
            {
                id:"4", feature:"Mobile Responsiveness: The application is designed to be responsive and compatible with various devices, including mobile phones and tablets. Users can access and utilize the IP Address Tracker on different platforms, ensuring a seamless experience regardless of the device they use."
            },

        ]
    },
    {
        id:3, 
        title:"Link Shortener", 
        stack:["React.js", "Tailwind", "Scss", "API"], 
        skills:[ "/images/skills/react.png", "/images/skills/scss.png", "/images/skills/tailwind.png"],
        Github:"https://github.com/MARVELGARR/urlshortener", 
        LiveSite:"https://soft-frangollo-f56877.netlify.app/", 
        images:"/images/projects/urlshortener.jpg", 
        description:"The Link Shortener is a web application that leverages an API to shorten long URLs into concise, easily shareable links. The application allows users to input lengthy URLs and receive shortened versions that redirect to the original destination when accessed",
        keyFeatures:[
            {
                id:"1", feature:"Users can enter a long URL into the application. The system sends a request to the API, which generates a unique, shortened link for the given URL. The shortened link is then displayed to the user, ready for copying and sharing."
            },
            {
                id:"2", feature:"The application allows users to manage their shortened links. Users can view a list of their previously created short links, edit the aliases, and delete links they no longer need. This feature provides users with control and organization over their shortened URLs."
            },

        ]

    },
    {
        id:4, 
        title:"Space tourism multi-page website", 
        stack:["Next.js", "Scss", "Tailwind", "Framer-Motion"], 
        skills:[ "/images/nextjs-icon.svg", "/images/skills/scss.png", "/images/skills/tailwind.png", "/images/skills/framer motion.png" ],
        Github:"https://github.com/MARVELGARR/space-tourism", 
        LiveSite:"https://space-tourism-wsll.vercel.app/", 
        images:"/images/projects/space.PNG", 
        description:"Stellar Tours is a multi-page website dedicated to promoting space tourism and providing information about interstellar travel experiences. The website aims to captivate visitors with stunning visuals, engaging content, and seamless user experience, enticing them to explore the wonders of space tourism.",
    },
    {
        id:5, 
        title:" Multi-Themed Calculator", 
        stack:["React.js", "Tailwind"],
        skills:[ "/images/skills/react.png", "/images/skills/scss.png", "/images/skills/tailwind.png" ], 
        Github:"https://github.com/MARVELGARR/Calculator-app", 
        LiveSite:"https://polite-sundae-d772e6.netlify.app/", 
        images:"/images/projects/calc app2.PNG", 
        description:"The Multi-Themed Calculator App is a mobile application that provides users with a versatile and visually appealing calculator experience. The app offers a range of themes to customize the calculator's appearance, catering to different user preferences and enhancing the overall user experience.",
        keyFeatures:[
            {
                id:"1", feature:"Basic Calculator Functions: The app includes standard calculator functionality, allowing users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It provides a clear and intuitive interface for inputting numbers and executing calculations."
            },
            {
                id:"2", feature:"Multiple Themes: The app offers a variety of pre-designed themes to personalize the calculator's appearance. Users can choose from a selection of themes with different color schemes, typography, and layout styles. Themes may include options like light, dark, minimalistic, vibrant, retro, or even customizable themes, enabling users to create their unique calculator design."
            },

        ]
    },

]

export const Abouts = {
    AboutImage: { id:1, image:"/images/312514694_5052625878170614_8884917318424541241_n.jpg", name:"Pic of me"},
    AboutDetails: { id:2, h1: "Me", 
    p1:"Hello there! My name is Marvellous Obatale, and I'm thrilled to share a little bit about myself as a frontend engineer. With a passion for crafting engaging user experiences and a love for all things tech, I'm constantly seeking opportunities to learn and grow in the ever-evolving world of web development. My journey as a frontend engineer has allowed me to gain valuable experience in various technologies and frameworks. I have honed my skills in JavaScript, leveraging its power to create dynamic and interactive web applications. Additionally, I have expertise in utilizing React.js, a versatile library that enables me to build reusable UI components and efficiently manage state. I have also explored Next.js, a powerful framework that aids in building fast and scalable React applications.", 
    p2:"In addition to my knowledge of core web technologies, I have a keen eye for design and user interface. I am proficient in SCSS, which allows me to write clean and maintainable CSS with the added benefits of variables, mixins, and more. I have also utilized Tailwind CSS, a utility-first CSS framework, to streamline my styling process and create responsive designs efficiently. Furthermore, I have experience with Framer Motion, a popular animation library, which adds delightful and engaging motion effects to user interfaces. As a tech-savvy individual, I am always eager to expand my skill set and stay up to date with the latest trends and tools in the industry. I believe that continuous learning is vital in the fast-paced world of technology. Exploring new technologies, frameworks, and libraries is not only a hobby but also a professional commitment for me. I thrive on the challenges that come with learning and adopting new tech skills, as they allow me to deliver innovative solutions and push the boundaries of what's possible.", 
    p3:"In my quest to become a well-rounded frontend engineer, I have embraced the importance of source control. I understand the value of version control systems such as Git, as they enable collaboration, provide a safety net for code changes, and facilitate seamless deployment workflows. I am proficient in using Git and platforms like GitHub, allowing me to effectively manage code repositories and contribute to team projects. Outside of my professional life, you'll often find me exploring the tech community, attending meetups, and participating in hackathons. I believe in the power of networking and collaborating with like-minded individuals to foster growth and create meaningful connections. I'm always excited to contribute to open-source projects and engage in discussions on various tech forums.",
    p4:"Thank you for taking the time to learn about me and my journey as a frontend engineer. If you have any exciting opportunities, collaboration ideas, or just want to chat about technology, feel free to reach out. I'm looking forward to connecting with you!",
    }
}