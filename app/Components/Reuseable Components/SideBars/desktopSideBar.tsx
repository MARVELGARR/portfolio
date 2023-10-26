'use client'
import BarItems from "../items/sideBarItems";
import ProfileContainer from "../Profile/profileContainer";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../themeToggle";

import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { LiaToolsSolid } from 'react-icons/lia';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';
import { RiContactsBookLine } from 'react-icons/ri';
import Link from "next/link";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import HoverCardContents from "../hoverCardContent";
import ProfileMenu from "../../profile menu/profileMenu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfileMenuItems from "../../profile menu/profileMenuItems";
import useActive from "@/app/Hooks/useActive";

  
  

export const sidebarItems = [
  { icon: <BiHomeAlt2 />, text: "Home", link: '/' },
  { icon: <AiOutlineUser />, text: "Profile", link: '/about' },
  { icon: <LiaToolsSolid />, text: "Skills", link: '/skills' },
  { icon: <HiOutlineDocumentDuplicate  />, text: "Resume", link: '/resume' },
  { icon: <AiOutlineFundProjectionScreen />, text: "Project", link:'/project' },
  { icon: <RiContactsBookLine />, text: "Contact Me", link:'/contact' },
];

const DesktopSideBar: React.FC = () => {

    const { value, handleChange } =  useActive(0)

  return (
    <aside className=" bg-white h-full dark:text-white dark:bg-cyan-950  shadow-md hidden sm:flex items-center sm:flex-col gap-5 rounded-l-2xl px-3 py-5 lg:min-w-[300px] left-0 flex-grow flex-shrink">
        <div className="w-full">
            <div className=" cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger>
                        <ProfileContainer>
                            <div className="p-1 rounded-full dark:bg-white bg-black flex items-center justify-center">
                                <Image
                                    src="/images/261337704_4111895672243644_37450072772510855_n.jpg"
                                    alt="profile image"
                                    className="w-10 h-10 rounded-full object-cover"
                                    width={140}
                                    height={140}
                                />
                            </div>
                            <div className="hidden lg:flex flex-col mt-4 items-center  justify-center">
                                <h3 className="">Marvellous O</h3>
                                <p className="text-gray-300 ">Software Eng</p>
                            </div>
                        </ProfileContainer>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <HoverCardContents/>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
        <div className="w-full flex items-center md:justify-start"><ModeToggle /></div>
        <div className="sm:flex sm:flex-col w-full sm:gap-3">
            {sidebarItems.map((item, index) => (
                <Link className={``} href={item.link}
                    key={index}
                >
                    <Button
                        onClick={()=>handleChange(index)}
                        className={` ${ value == index ? " " : ''} bg-white dark:text-white dark:bg-cyan-950 dark:hover:text-cyan-950 dark:hover:bg-white hover:text-white hover:bg-black text-md text-black w-full h-14`}
                        
                    >
                        <BarItems className=''>
                            {item.icon}
                            <h3 className="hidden md:flex">{item.text}</h3>
                        </BarItems>
                    </Button>
                </Link>
            ))}
        </div>
        <div className=" ">
            <DropdownMenu >
                <DropdownMenuTrigger><ProfileMenu/></DropdownMenuTrigger>
                <DropdownMenuContent className=' p-2 '>
                    <DropdownMenuLabel className=' hidden md:flex'>My socials </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="w-full border-2 border-cyan-950 dark:border-2 dark:border-cyan-100"><ProfileMenuItems/></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </aside>
  );
};

export default DesktopSideBar;
