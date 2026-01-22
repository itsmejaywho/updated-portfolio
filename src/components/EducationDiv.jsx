import { motion } from "framer-motion";
import MockDiv from '../components/MockDiv'

function EducationDiv({ direction,position, school, sy, location, reverse, margin}){
    return(
        <>
            <div className={`w-full h-[25%] text-black  flex overflow-hidden  justify-between sm:justify-center  sm:gap-4 ${reverse} `}>
                <motion.div
                className={`h-full w-[49%] bg-[#d4a373] flex flex-col pl-4  rounded-lg items-start justify-center sm:w-[40%] lg:w-[30%] md:w-[40%] py-5 ${margin} `}
                    initial={{ x: direction, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }} 
                    transition={{ duration: 1 }}
                >
                    <p className="text-[.8rem] sm:text-[.9rem] lg:text-[1.1rem] md:text-[1rem] font-bold">
                        {school}
                    </p>
                    <p className="text-[.6rem] sm:text-[.7rem] md:text-[.8rem] lg:text-[.9rem]">{position}</p>
                    <p className="text-[.6rem] sm:text-[.7rem] md:text-[.8rem] lg:text-[.9rem]">
                        SY: {sy}
                    </p>
                    <p className="text-[.6rem] sm:text-[.7rem] md:text-[.8rem] lg:text-[.9rem]">{location}</p>

                </motion.div>

                <div className="border-2 h-full border-white">

                </div>

                <MockDiv>

                </MockDiv>

            </div>
        </>
    )
}

export default EducationDiv;