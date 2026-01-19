import ProjectCard from "@/features/projects/components/ProjectCard"
import AboutME from "./AboutMe"
import Bio from "./Bio"
import Education from "./Education"
import OthersSkills from "./OthersSkills"
import Skill from "./Skills"
import { Project } from '@/lib/SiteData'


const ProfileBody = () => {
    return (
        <div className="w-full h-fit sm:overflow-auto  sm:h-fit md:h-full flex flex-wrap gap-4  md:overflow-auto">
            <div className="flex-wrap  flex gap-4">

                <Bio />
                <Skill />
            </div>

            <AboutME />
            <Education />
            <OthersSkills />
            {
                Project.slice(0, 2).map((item) => {
                    return (
                        <ProjectCard
                            className="hidden sm:flex"
                            key={item.id}
                            id={item.id}
                            site={item.LiveSite}
                            title={item.title}
                            github={item.Github}
                            image={item.images}
                        />
                    )
                })
            }

        </div>
    )
}

export default ProfileBody