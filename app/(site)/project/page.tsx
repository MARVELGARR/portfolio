
import ProjectCard from "@/app/Components/jsx components/project components/projectCard"
import { Project } from "@/lib/SiteData"
import Link from "next/link"

const Projects : React.FC = () =>{
    return (
  
        <div className="h-full">
            <title>Projects</title>
            <div className="  w-full h-full object-cover object-center bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)]">
                <div className="">

                </div>
                <div className=" flex flex-wrap gap-5 p-5">
                    {
                        Project.map((item)=>{
                            return(
                                <Link
                                    href={`/project/${item.id}`}
                                    key={item.id}
                                >
                                    <ProjectCard
                                        id={item.id}
                                        site={item.LiveSite}
                                        title={item.title}
                                        stack={item.stack}
                                        github={item.Github}
                                        image={item.images}
                                        description={item.description}

                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
  
export default Projects