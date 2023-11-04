'use client'
import Link from "next/link"
import { sidebarItems } from "./desktopSideBar"
import { Button } from "@/components/ui/button"
import useActive from "@/app/Hooks/useActive"
import BarItems from "../items/sideBarItems"
import { ModeToggle } from "../themeToggle"

const MobileBar: React.FC = () =>{

    const {handleChange, value} = useActive(2)

    return (
        <div className="flex w-full relative px-5 h-full justify-between  items-center">
            {sidebarItems.map((item, index)=>{
                return (
                    <Link key={index} href={item.link} className="" >
                        <Button onClick={()=>handleChange(index)}
                            className={`  ${ value == index ? " p-2 rounded-xl bg-cyan-950 text-white dark:bg-white dark:text-cyan-950" : 'text-cyan-950 bg-white dark:bg-cyan-950 dark:text-white'} dark:hover:text-cyan-950 dark:hover:bg-white hover:text-white hover:bg-cyan-950 w-full`}
                        >
                            <BarItems className=''>
                                {item.icon}
                                <h3 className={`  ${ value == index ? " " : 'hidden'}`}>{item.text}</h3>
                            </BarItems>
                        </Button>
                    </Link>
                )
            })}
            <div draggable={true} className=" absolute w-fit h-full top-3 sm:hidden left-[5rem]"><ModeToggle/></div>
        </div>
    )
}

export default MobileBar