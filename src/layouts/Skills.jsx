import { motion } from "framer-motion";


function Skills(){
    return(
        <>
        <div className="h-screen w-full flex flex-col p-4 border-t border-[#050a0f] ">
                <div className='h-[15%] w-full flex flex-col items-center gap-2 bg-red-500'>
                    <motion.p 
                        className='text-[1.2rem] lg:text-[1.4rem] font-bold'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6 }}
                    >
                        What I do
                    </motion.p>
                    <motion.p 
                        className='text-[.6rem]  lg:text-[.8rem] md:text-[.7rem] text-center w-[90%] lg:w-[70%]'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6 }}
                    >
                        I’m a graduating student with a passion for web development, seeking an internship to sharpen my skills and gain hands-on industry experience.                    
                    </motion.p>
                </div>

                <div className="bg-red-100 h-[85%] flex-col w-full">
                    <div className="h-[50%] w-full bg-fuchsia-50">
                       
                    </div>
                    <div className="h-[50%] w-full bg-amber-700">

                    </div>
                </div>
        </div>
        </>
    )
}

export default Skills;