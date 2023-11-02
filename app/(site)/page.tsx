'use client'
import Intro from "@/app/Components/jsx components/homepage components/intro";
import UserImage from "@/app/Components/jsx components/homepage components/userImage";
import { easeOut, motion } from "framer-motion";

const introduction ={
  greeting: `Hello, I'm Marvellous`,
  title: `Frontend developer`,
  intro: `
  a passionate Frontend Developer. I specialize in creating modern and engaging web experiences using technologies like HTML, CSS, SCSS, Tailwind, Framer-Motion, JavaScript/TypeScript, React.js, Redux Toolkit and Next.js.
  With a strong foundation in web development, I'm dedicated to delivering clean, responsive, and user-friendly websites and applications that make a lasting impact. You can explore my code and projects on GitHub and connect with me on LinkedIn.
  Let's collaborate to turn your web development ideas into reality. Reach out to me if you have any questions or exciting projects in mind!
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

  return (
    <div className=" w-full  h-full relative px-5 object-cover object-center bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)] ">
      <h1 className="text-white absolute top-3 left-4 dark:text-white text-2xl font-extrabold px-4 pt-3">Marvel<span className="text-cyan-950 dark:text-cyan-950">Garra</span></h1>
      <div className="   w-full h-full flex-col-reverse lg:flex-row flex gap-[4rem] justify-center items-center">
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