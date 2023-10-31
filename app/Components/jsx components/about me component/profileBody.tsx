import ProjectCard from "../project components/projectCard"
import AboutME from "./aboutme"
import Bio from "./bio"
import Education from "./education"
import OthersSkills from "./othersSkills"
import Skill from "./skills"
import {Project} from '@/lib/SiteData'


const ProfileBody = ( ) =>{
    return (
        <div className="w-full h-fit sm:overflow-auto  sm:h-fit md:h-full flex flex-wrap gap-4  md:overflow-auto">
            <div className="flex-wrap  flex gap-4">

                <Bio/>
                <Skill/>
            </div>

            <AboutME/>
            <Education/>
            <OthersSkills/>
            {
                Project.slice(0, 2).map((item)=>{
                    return (
                        <ProjectCard
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