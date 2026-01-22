import EducationDiv from '../components/EducationDiv'
import MockDiv from '../components/MockDiv'
import { motion } from "framer-motion";

function Education(){
    return(
        <>
            <div className="h-screen w-full flex flex-col gap-8 p-4 border-t border-[#050a0f] ">
                <div className='h-[15%] w-full flex flex-col items-center gap-2 '>
                    <motion.p 
                        className='text-[1.2rem] lg:text-[1.4rem] font-bold mt-5'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6 }}
                    >
                        Educational Background
                    </motion.p>
                    <motion.p 
                        className='text-[.6rem]  lg:text-[.8rem] md:text-[.7rem] text-center w-[90%] lg:w-[70%]'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6 }}
                    >
                        My educational background reflects my commitment to continuous learning and personal growth, equipping me with the knowledge and skills needed to pursue my chosen field in technology.
                    </motion.p>
                </div>
                <div className='h-[85%] w-full flex flex-col '>
                    <EducationDiv direction={-100}  school='Technological University of the Philippines' sy='2022 - 2026' location='Manila City' position='College'/>
                    <EducationDiv direction={100} reverse={'flex-row-reverse'} school='San Felipe Neri Parochial School' sy='2019 - 2021' location='Mandaluyong City' position='Senior High School' />
                    <EducationDiv direction={-100}  school='Mandaluyong High School' sy='2015 - 2019' location='Mandaluyong City' position='Junior High School'/>
                    <EducationDiv direction={100} reverse={'flex-row-reverse'} school='Dona Pilar C Gonzaga Elementary School' sy='2009 - 2015' location='Mandaluyong City' position='Elementary'/>
                </div>
            </div>  
        </>
    )
}

export default Education;