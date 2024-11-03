import Image from "next/image"


const ProfileMenu: React.FC = () =>{
    return(
        <div className='flex gap-4  p-[1] lg:px-4 py-2 rounded-xl xl:border-[3px] lg:border-cyan-950 dark:border-white items-center justify-between'>
            <div className="p-1 dark:bg-white bg-cyan-950 rounded-full flex items-center justify-center">
                <Image 
                    src="/images/261337704_4111895672243644_37450072772510855_n.jpg"
                    width={120}
                    height={120}
                    alt="profile pic"
                    className=" rounded-full w-10 h-10"
                />
            </div>
            <div className=" hidden  xl:flex flex-col">
                <div className="">@MarvelGarra</div>
                <div className="">Marvellous Obatale</div>
            </div>
        </div>
    )
}
export default ProfileMenu