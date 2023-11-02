import { Button } from "@/components/ui/button";
import { Project } from "@/lib/SiteData";
import Image from "next/image";
import Link from "next/link";
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'

const DynamicProjectPage= ( { params } : { params: { id: number}}) =>{

    const {id} = params;

    const project = Project.find((item)=>item.id == id);

    return(
        <div className="h-full overflow-auto py-5 px-10 flex flex-col gap-7 object-cover object-center bg-[url(/images/3252880.jpg)] dark:bg-[url(/images/59276.jpg)]">
            <div className="w-full">
                <Link className="" href="/project">
                    <Button className="w-fit">Back</Button>
                </Link>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">

                <div className="">
                    <Image
                        src={project?.images|| '...'}
                        alt={project?.title|| 'empty image'}
                        width={120}
                        height={120}
                        className=" object-cover lg:w-full lg:h-[20rem] xl:w-[74rem] xl:h-[30rem] "
                    />
                </div>
                <div className="flex flex-col gap-4">

                    <div className=" text-xl font-bold w-full flex justify-center">
                        {project?.title}
                    </div>
                    <div className="text-xl flex flex-col">
                        <span className="font-bold">Description</span>
                        {project?.description}
                    </div>
                    <div className="text-xl flex flex-col">
                        <span className="font-bold">Key Feature</span>
                        {project?.keyFeature}
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-[6rem] flex-wrap">
                <div className="flex items-center gap-5 flex-wrap">

                    <div className=" flex gap-3 flex-wrap">{project?.stack.map((item, index)=>{
                        return(
                            <div key={index} className="p-3 hover:bg-gray-400 bg-gray-300 rounded-lg text-xl font-bold">{item}</div>
                        )
                    })}</div>
                    <div className="flex items-center gap-5 flex-wrap">{project?.skills.map((item, index)=>{
                        return(
                            <div key={index} className="w-10 h-10 rounded-full">
                                <Image 
                                    src={item}
                                    alt={`skill ${index}`}
                                    width={120}
                                    height={120}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                            </div>
                        )
                    })}</div>
                </div>
                <div className="flex items-center gap-5">

                    <div className=" p-2 bg-white rounded-full hover:bg-gray-300">
                        <Link href={project?.Github || '_blank'}>
                            <BsGithub size={60}/>
                        </Link>                    
                    </div>
                    <div className="p-2 bg-white rounded-full hover:bg-gray-300">
                        <Link href={project?.LiveSite || '_blank' }>
                            <AiOutlineLink size={60}/>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicProjectPage