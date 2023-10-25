
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin, AiOutlineFacebook} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {SiHashnode, SiFrontendmentor} from 'react-icons/si'
import Link from 'next/link'

const ProfileMenuItems: React.FC = () =>{

    const profileItems = [
        { name: 'github', icon: <BsGithub/>, link: 'https://github.com/MARVELGARR', },
        { name: 'linkedIn', icon: <AiOutlineLinkedin/>, link: 'https://www.linkedin.com/in/marvellous-obatale-960088267/', },
        { name: 'twitter', icon: <CiTwitter/>, link: 'https://twitter.com/MARVEL_GARRA', },
        { name: 'facebook', icon: <AiOutlineFacebook/>, link: 'https://www.facebook.com/marvel.garra/', },
        { name: 'Hashnode', icon: <SiHashnode/>, link: 'https://hashnode.com/@MarvelGarra', },
        { name: 'frontend mentor', icon: <SiFrontendmentor/>, link: 'https://www.frontendmentor.io/profile/MARVELGARR', },
    ]

    return(
        <ul className='md:flex flex-col w-fit flex gap-4 dark:bg-cyan-950 dark:text-white'>
            {profileItems.map((items, index)=>{
                return(
                    <li key={index} className="flex  flex-col gap-3">
                        <Link className='flex gap-5 items-center' target='_blank' href={items.link}>                         
                            <div className="">{items.icon}</div>
                            <div className="hidden md:flex ">{items.name}</div>                         
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
export default ProfileMenuItems