
import Link from "next/link"


import {BsGithub} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import Image from "next/image"

interface ProjectCardProps{
    id: number,
    title: string,
    stack?: string[],
    skill?: string[],
    github?: string,
    site?: string,
    image: string,
    description?: string,
    feature?: string
    className?: string
}

const ProjectCard: React.FC <ProjectCardProps> = ({
    id, title, stack, description, feature, github, site, image, skill, className
}) =>{
    return(
        <div className={`max-w-[16rem] dark:bg-cyan-950 dark:text-white shadow-md ${className}  h-fit flex flex-col shadow-md rounded-md p-2 bg-white border border-cyan-950`}>
            <div className="relative w-full h-40 overflow-hidden rounded-md">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className="rounded-lg object-cover"
                />
            </div>
            <h3 className="text-xl font-bold mt-2">{title}</h3>    
            <div className="w-full flex gap-2 justify-end mt-3">
                <Link href={github || '_blank'}>
                    <div className=" cursor-pointer">
                        <BsGithub size={24} />
                    </div>
                </Link>
                <Link href={site || "_blank"}>
                    <div className=" cursor-pointer">
                        <AiOutlineLink size={24} />
                    </div>
                </Link>
            </div>
        </div>
    

    )
}

export default ProjectCard