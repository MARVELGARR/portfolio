
import {IoSchoolOutline} from 'react-icons/io5'
import {MdEngineering} from 'react-icons/md'
import {AiOutlineCalendar} from 'react-icons/ai'

const Education: React.FC = () =>{
    return (
        <div className="flex h-fit flex-col gap-2 shadow-md w-fit p-2 rounded-lg bg-gray-300">
            <h3 className="font-bold"> Education</h3>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2"><span className=""><IoSchoolOutline/></span> Elizade University</div>
                <div className="flex gap-2 items-center"> <span className=''><MdEngineering/></span>Falculty of Engineering</div>
                <div className=" break-words max-w-[15rem]">Department of I.C.T (Information Communication Technology)</div>
                <div className=" break-words max-w-[15rem] flex items-center gap-2"> <span className=''><AiOutlineCalendar/></span>2016/2017 - 2020/2021</div>
            </div>

        </div>
    )
}

export default Education