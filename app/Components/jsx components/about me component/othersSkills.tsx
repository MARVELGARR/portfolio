
import { Progress } from "@/components/ui/progress"

const OthersSkills: React.FC = () =>{

    const Skills = [
        { Name:'Html', progress: 80},
        { Name:'Css/Tailwind css', progress: 60},
        { Name:'JavaScript', progress: 50},
        { Name:'ReactJs/Nextjs', progress: 55},
        { Name:'Prisma', progress: 30},
        { Name:'Framrt-motion', progress: 30},
    ]

    return (
        <div className="flex flex-col bg-gray-200 rounded-xl h-fit dark:bg-cyan-950 dark:text-white shadow-md p-2 max-w-[20rem]">
            <h3 className="">All Skills</h3>
            <ul className="flex  gap-2 flex-wrap">
                {
                    Skills.map((skill, index)=>{
                        return(
                            <li key={index} className="">
                                <h4 className="text-lg">{skill.Name}</h4>
                                <Progress value={skill.progress} />

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default OthersSkills