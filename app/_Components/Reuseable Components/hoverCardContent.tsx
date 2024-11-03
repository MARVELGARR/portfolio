
import Image from "next/image"

const HoverCardContents: React.FC = () =>{
    return(
        <div className='flex gap-2 dark:text-white dark:bg-cyan-950'>
            <div className="w-fit h-fit rounded-full dark:bg-white flex items-center justify-center ">
                <Image 
                    src='/images/312009889_5052626234837245_1115025583978055687_n.jpg'
                    width={40}
                    height={40}
                    alt="profile pic hover"
                    className=" w-10 h-10 rounded-full"
                />
            </div>
            <div className="">
                <div className=""> @Marvel_Garra</div>
                <div className="">Name: Marvellous</div>
                <div className="">Location: Lagos, Nigeria</div>
                <div className="">Elizade Uni</div>
                <div className=" ">Graduate</div>
            </div>
        </div>
    )
}

export default HoverCardContents
