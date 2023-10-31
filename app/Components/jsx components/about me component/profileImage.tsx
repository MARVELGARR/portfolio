import Image from "next/image"
import { ReactNode } from "react"



interface ProfileImageProps{
    children: ReactNode
}

const ProfileImage: React.FC<ProfileImageProps> = ( {children} ) =>{
    return (
        <div className=" w-full h-[5rem] md:w-[9rem] lg:min-w-[19rem]  relative object-cover md:h-full bg-[url('/images/312514694_5052625878170614_8884917318424541241_n.jpg')]  rounded-xl shadow-lg">
            {children}
        </div>
        
    )
}

export default ProfileImage