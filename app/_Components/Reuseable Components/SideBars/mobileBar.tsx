'use client'
import Link from "next/link"
import { sidebarItems } from "./desktopSideBar"
import { Button } from "@/components/ui/button"
import BarItems from "../items/sideBarItems"
import { ModeToggle } from "../themeToggle"
import useActive from "@/app/_Hooks/useActive"

const MobileBar: React.FC = () =>{

    const {handleChange, value} = useActive(0)

    return (
        <div className="flex w-full px-5 h-full justify-between  items-center">
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
            
        </div>
    )
}

export default MobileBar