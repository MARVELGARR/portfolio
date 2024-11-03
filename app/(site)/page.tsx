'use client'

import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { SiFrontendmentor, SiHashnode } from "react-icons/si";
import Intro from "../_Components/jsx components/homepage components/intro";
import UserImage from "../_Components/jsx components/homepage components/userImage";


const introduction ={
  greeting: `Hello, I'm Marvellous`,
  title: `Frontend developer`,
  intro: `
  I’m a passionate full-stack developer dedicated to creating modern and engaging web experiences. With expertise in Next.js, I specialize in building dynamic applications that seamlessly integrate frontend and backend technologies. My toolkit includes HTML, CSS, SCSS, Tailwind, Framer Motion, JavaScript/TypeScript, React.js, and Redux Toolkit, allowing me to deliver clean, responsive, and user-friendly solutions that leave a lasting impact.

Driven by a commitment to excellence, I’m always eager to tackle new challenges and turn innovative ideas into reality. Explore my projects on GitHub and connect with me on LinkedIn—I’d love to collaborate on exciting ventures and answer any questions you may have. Let’s bring your web development vision to life!
  `,
  call: `Email me`
}

const userImage = {
  image: '/images/bg.png',
  alt:'user image'
}

const Home: React.FC = () => {

  const variant ={
    initial:{
      y: 0

    },
    final:{
        y: [0, 30, 0],
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease:easeOut,

        },
    }
  }

  const profileItems = [
    { name: 'github', icon: <BsGithub/>, link: 'https://github.com/MARVELGARR', },
    { name: 'linkedIn', icon: <AiOutlineLinkedin/>, link: 'https://www.linkedin.com/in/marvellous-obatale-960088267/', },
    { name: 'twitter', icon: <CiTwitter/>, link: 'https://twitter.com/MARVEL_GARRA', },
    { name: 'facebook', icon: <AiOutlineFacebook/>, link: 'https://www.facebook.com/marvel.garra/', },
    { name: 'Hashnode', icon: <SiHashnode/>, link: 'https://hashnode.com/@MarvelGarra', },
    { name: 'frontend mentor', icon: <SiFrontendmentor/>, link: 'https://www.frontendmentor.io/profile/MARVELGARR', },
  ]

  return (
    <div className=" pb-[5rem] sm:pb-[1px] overflow-auto w-full  h-full relative px-5 sm:object-cover object-center ob bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)] ">
      <h1 className="text-white flex items-center absolute top-3 left-4 dark:text-white text-2xl font-extrabold px-4 pt-3">Marvel<span className="text-cyan-950 dark:text-cyan-950">Garra</span> <div className="flex ml-7 gap-3 flex-wrap">{profileItems.map((items, index)=>{
                return(
                  <div key={index} className="flex  gap-3">
                    <Link className='flex hover:border-2 w-fit dark:hover:bg-cyan-950 hover:bg-white hover:p-2 hover:rounded-full gap-5 items-center' target='_blank' href={items.link}>                         
                      <div className=" text-cyan-950 dark:text-white">{items.icon}</div>
                      <div className="hidden">{items.name}</div>                         
                    </Link>
                    
                  </div>
                )
            })}</div>
      </h1>

      <div className=" pt-[5rem] w-full h-full flex-col-reverse lg:flex-row flex gap-[4rem] justify-center items-center">
        <Intro greeting={introduction.greeting} title={introduction.title} intro={introduction.intro} call={introduction.call}/>
        <motion.div
          variants={variant}
          initial="initial"
          animate="final"
          className=""
        >
          <UserImage image={userImage.image} alt={userImage.alt} />
        </motion.div>
        
      </div>
    </div>
  );
};


export default Home