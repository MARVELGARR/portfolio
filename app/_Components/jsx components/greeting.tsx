
import {PiHandWavingBold} from 'react-icons/pi'

const Greeting = () =>{
    return(
        <div className="h-full text-xl normal">
            <div className=" items-center">
                <span className="art"><PiHandWavingBold/></span>
                Hi, I'm Marvellous, and I'm absolutely passionate about coding!
            </div>
            <div className="">
                As a Frontend Engineer, I'm on a never-ending quest to create remarkable digital experiences.
            </div>
            <p className="">
                I thrive on the excitement of making <span className='art'>fun</span> and <span className='art'>interesting</span> things with <span className="art">code</span>. 
                But my enthusiasm doesn't stop there! I'm also an avid participant in coding <span className="art">challenges</span>, where the thrill of problem-solving pushes me to constantly learn, grow, and push the boundaries of what's possible in the world of programming.
            </p>
        </div>

    )
}

export default Greeting