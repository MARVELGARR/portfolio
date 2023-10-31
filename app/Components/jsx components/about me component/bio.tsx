
import {GiNigeria} from 'react-icons/gi'
import {CiLocationOn}  from 'react-icons/ci'

const Bio = () =>{
    return (
        <div className=" rounded-xl bg-gray-200 flex flex-col flex-wrap gap-5 p-3">
            <div className="flex flex-col gap-2">
                <span className='font-bold text-xl'>Role</span> 
                <h3 className='lg:text-lg'> Software Engineer (Frontend Engineer)</h3>
            </div>
            <div className=" flex flex-col gap-2"> 
                <span className='font-bold text-xl'>Name</span> 
                <h3 className='lg:text-lg'>Marvellous Obatale (Marvel_Garra)</h3>
            </div>
            <div className="flex flex-col text-xl gap-2">
                <span className='font-bold text-xl'><CiLocationOn/><h4>Location</h4> </span>
                <div className="flex lg:text-lg items-center">Lagos, <GiNigeria/> Nigeria</div>
            </div>
            <div className="flex flex-col gap-2">
                <span className='font-bold text-xl'>Email</span>
                <div className="">
                    <div className="lg:text-lg">marvellousobatale@gmail.com</div>
                    <div className="lg:text-lg">marvel.emujede@gmail.com</div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className='font-bold text-xl'>Phone</span>
                <div className="">
                    <div className="lg:text-lg"> +234 8152795806</div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Bio