'use client'

import ProjectCard from "@/features/projects/components/ProjectCard"
import { Project } from "@/lib/SiteData"
import Link from "next/link"

const Projects: React.FC = () => {


    const handleClick = (id: number) => {
        window.location.href = `/project/${id}`
    }

    return (

        <div className="h-full overflow-auto">
            <title>Projects</title>
            <div className="  w-full h-full object-cover object-center bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)]">
                <div className="">

                </div>
                <div className=" card-container  gap-5 p-5">
                    {
                        Project.map((item) => {
                            return (

                                <button type="button"
                                    onClick={() => handleClick(item.id)}
                                    key={item.id}
                                >
                                    <ProjectCard
                                        id={item.id}
                                        title={item.title}
                                        stack={item.stack}
                                        image={item.images}
                                        description={item.description}
                                        github={item.Github}
                                        site={item.LiveSite}
                                    />
                                </button>


                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Projects