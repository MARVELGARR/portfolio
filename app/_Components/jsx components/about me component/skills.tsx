
import {Skills} from "@/lib/SiteData"
import Image from "next/image"

const Skill = () =>{
    return (
        <div className="flex py-3 dark:bg-cyan-950 dark:text-white shadow-md flex-col gap-3 bg-gray-200 rounded-xl">
            <div className="w-full flex text-xl font-bold justify-center items-center">Skills</div>
            <ul className=" max-w-full flex items-center flex-wrap justify-center">
    
                {Skills.map((skill)=>{
                    return (
                        <li key={skill.id} className=" flex rounded-full p-2 shadow-lg">

                            <Image
                                src={skill.image}
                                alt={skill.name}
                                width={120}
                                height={120}
                                className="w-10 h-10"
                            />

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Skill