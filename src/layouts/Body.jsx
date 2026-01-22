import { Typewriter, Cursor } from 'react-simple-typewriter'
import BodyButton from '../components/BodyButton'
import Phone from '../assests/phone.svg'
import Location from '../assests/location.svg'
import Message from '../assests/message.svg'
import File from '../assests/file.svg'
import Resume from '../assests/resume.pdf'
import Me from '../assests/me.jpg'
import '../styles/hexagon.css'

function Body(){
    return(
        <>
            <div className="h-screen flex flex-col w-full md:flex-row  ">
                <div className='h-[55%] flex gap-2 flex-col md:h-full md:w-[55%] justify-center md:items-start px-4 md:px-8 md:gap-5'> 
                    <div className='flex flex-col gap-4'>
                        <p className='text-[2rem] sm:text-[2.1rem] md:text-[2.2rem] lg:text-[2.3rem]'>Hi!</p>
                        <div className='flex gap-2 items-baseline'>
                            <p>I'm</p>
                            <p className='text-[#d4a373] text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] font-bold'>Richmon Jay Francisco</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] tracking-[2px]'>                     
                            <Typewriter
                            words={["Aspiring Fullstack Developer"]}
                            loop={true}
                            typeSpeed={90}
                            deleteSpeed={60}
                            delaySpeed={1400}
                            />
                            <Cursor cursorStyle ='|'/>
                        </p>
                        <p className='text-[.7rem] sm:text-[.8rem] md:text-[.9rem] lg:text-[1rem] w-[90%] '>
                            "I am motivated by a profound passion in technology and a strong willingness to learn."
                        </p>
                    </div>

                    <div className='border-l p-1 mt-2 border-white flex flex-col gap-3'>
                        <BodyButton message='85 Rev. Aglipay St. Poblacion Mandaluyong City' source={Location}/>
                        <BodyButton message='63+ 9283487624' source={Phone}/>
                        <BodyButton message='rj.frncsco@gmail.com' source={Message}/>
                    </div>
                    <p className='text-[.5rem] sm:text-[.6rem] md:text-[.7rem] lg:text-[.8rem]'>I created this using Vite React</p>
                    <div className='p-2 flex gap-1 items-center bg-amber-500 w-fit rounded-[10px]'>
                        <img src={File} alt="File" className='h-5 sm:h-6 md:h-7 ' />
                        <a href={Resume} download="Francisco_RichmonJay_Resume.pdf" target="_blank" className='text-[.7rem]'>
                            Download resume
                        </a>
                    </div>
                    

                </div>
                <div className='h-[45%] profile flex items-center justify-center md:h-full md:w-[45%]'>
                    <div className='hexagon'>
                        <img src={Me} alt='Profile Picture' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;