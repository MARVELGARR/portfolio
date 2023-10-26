'use client'
import Link from "next/link"
import { sidebarItems } from "./desktopSideBar"
import { Button } from "@/components/ui/button"
import useActive from "@/app/Hooks/useActive"
import BarItems from "../items/sideBarItems"

const MobileBar: React.FC = () =>{

    const {handleChange, value} = useActive(2)

    return (
        <div className="flex w-full h-full justify-between items-center">
            {sidebarItems.map((item, index)=>{
                return (
                    <Link key={index} href={item.link} className="" >
                        <Button onClick={()=>handleChange(index)}
                            className={`  ${ value == index ? " p-2 rounded-xl " : ''} bg-white dark:text-white dark:bg-cyan-950 dark:hover:text-cyan-950 dark:hover:bg-white hover:text-white hover:bg-black text-md text-black w-full`}
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