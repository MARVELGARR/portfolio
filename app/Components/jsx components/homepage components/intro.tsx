import { Button } from "@/components/ui/button"
import Link from "next/link"

import {AiOutlineSend} from 'react-icons/ai'

interface IntroProps{
    greeting: string,
    title:  string,
    intro: string,
    call: string,
}

const Intro: React.FC<IntroProps> = ({greeting, title, intro, call}) =>{

    const emailAddress = 'marvellousobatale@gmail.com'; // Replace with your desired email address

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className="flex overflow-auto flex-col gap-7 flex-wrap max-w-lg">
            <h1 className=" font-bold text-3xl">{greeting}</h1>
            <h3 className=" font-bold text-xl">{title}</h3>
            <p className=" leading-6">{intro}</p>
            <div className="flex items-center gap-4">

                <Button onClick={handleEmailClick} type='button' className=" hover:bg-white hover:border-cyan-950 hover:border-2 hover:text-cyan-950 dark:hover:bg-cyan-950 w-fit p-2">
                    <div
                    className='flex items-center hover:text-cyan-950 dark:hover:text-white justify-center gap-2'
                    >
                        {call}
                        <AiOutlineSend/>
                    </div>
                </Button>
                <Button className="w-fit px-3 py-2 hover:bg-white hover:border-cyan-950 hover:border-2 hover:text-cyan-950 dark:hover:bg-cyan-950">
                    <Link href="https://drive.google.com/file/d/1MdwPZ69ouFc1F3zJjrzgE6gIId_I0YVf/view?usp=drive_link">
                        Resume
                    </Link> 
                </Button>
            </div>
        </div>
    )
}

export default Intro