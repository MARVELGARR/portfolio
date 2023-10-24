import Image from "next/image"


const ProfileMenu: React.FC = () =>{
    return(
        <div className='flex gap-2 items-center justify-between'>
            <div className="">
                <Image 
                    src="/images/261337704_4111895672243644_37450072772510855_n.jpg"
                    width={120}
                    height={120}
                    alt="profile pic"
                    className=" w-10 h-10"
                />
            </div>
            <div className="">
                <div className="">@MarvelGarra</div>
                <div className="">Marvellous Obatale</div>
            </div>
        </div>
    )
}
export default ProfileMenu