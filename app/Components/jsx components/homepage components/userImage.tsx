
import Image from "next/image"


interface UserImageProps{
    image: string,
    alt: string,
}



const UserImage: React.FC<UserImageProps> = ({ image, alt}) =>{
    return (
        <div
        className="flex p-2 shadow-xl0 dark:bg-cyan-950 items-center justify-center bg-cyan-950 rounded-t-[6rem] rounded-bl-[8rem] rounded-br-[8rem] transform skew-x-11 "
        >
            <Image
                
                src={image}
                alt={alt}
                width={220}
                height={120}
                className="w-30 bg-black rotate-3 h-30 object-cover rounded-t-[6rem] rounded-bl-[8rem] rounded-br-[8rem] transform skew-x-11"
            />
        </div>
    )
}

export default UserImage