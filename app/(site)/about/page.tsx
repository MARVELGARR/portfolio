'use client'

import ProfileImage from "@/app/Components/jsx components/about me component/profileImage";
import ProfileBody from '@/app/Components/jsx components/about me component/profileBody';

const About: React.FC = () => {


  return (
    <div className=" h-full sm:h-full px-[1rem] py-[1rem] flex gap-2 w-full md:h-full object-cover object-center bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)] ">
      <div className="flex-col md:flex-row flex md:h-full">

        <div className="h-full md:h-full px-2">
          <ProfileImage>
            <div className="absolute px-2 w-full  bottom-0 filter backdrop-blur-sm bg-transparent rounded-lg">
              <div className=" art text-3xl">Marvel Garra</div>
              <div className="text-2xl"> Crafting eye catching design</div>
            </div>
          </ProfileImage>
        </div>
        <ProfileBody/>
      </div>
      
    </div>
  );
};


export default About