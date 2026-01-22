import { motion } from "framer-motion";
import ReactLogo from '../assests/react.svg'

function SkillsDiv({width, logo, height='h-7 lg:h-10', name}){
    return(
        <>

        <div className="w-full flex items-center lg:w-[70%]">
            <motion.div className="flex items-center justify-start w-[40%] gap-2"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6 }}
            >
                <img src={logo} alt="React Logo" className={height}  />
                <p className="text-[.7rem] lg:text-[1rem]">{name}</p>
            </motion.div>

            <motion.div className="w-[60%]  border border-white rounded-[30px] text-[.7rem]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }} 
                    transition={{ duration: 0.6 }}

            >
                <motion.div className="p-1 h-full bg-[#67a3fd] rounded-[30px] flex items-center justify-center"
                        initial={{ width: 0 }}
                        whileInView={{ width }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 5, ease: "easeOut" }}
                >  
                    <p className="text-[.7rem] lg:text-[.9rem]">{width}</p>             
                </motion.div>
            </motion.div>
        </div>
        </>
    )
}

export default SkillsDiv;