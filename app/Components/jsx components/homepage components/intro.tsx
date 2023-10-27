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
    return (
        <div className="flex flex-col gap-7 flex-wrap max-w-lg">
            <h1 className=" font-bold text-3xl">{greeting}</h1>
            <h3 className=" font-bold text-xl">{title}</h3>
            <p className=" leading-6">{intro}</p>
            <Button type='button' className=" hover:bg-cyan-950 dark:hover:bg-cyan-950 w-fit p-2">
                <Link href={'/contact'}
                className='flex items-center hover:text-cyan-950 dark:hover:text-white justify-center gap-2'
                >
                    {call}
                    <AiOutlineSend/>
                </Link>
            </Button>
        </div>
    )
}

export default Intro