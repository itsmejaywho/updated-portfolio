import { motion } from "framer-motion";
import SkillsDiv from '../components/SkillsDiv'
import OtherSkills from '../components/OtherSkills'
import TailwindLogo from '../assests/tailwind.svg'
import ReactLogo from '../assests/react.svg'
import SupabaseLogo from '../assests/supabase.svg'
import Mysql from '../assests/mysql.svg'
import HTML from '../assests/html.svg'
import Javascript  from '../assests/javascript.svg'
import Node  from '../assests/node.svg'
import Css  from '../assests/css.svg'
import Git  from '../assests/github.svg'
import Java  from '../assests/java.svg'
import Cplus  from '../assests/c++.svg'

function Skills(){
    return(
        <>
        <div className=" w-full flex flex-col p-4 border-t border-[#050a0f] ">
                <div className='h-[15%] w-full flex flex-col items-center gap-2 '>
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

                <div className=" h-[85%]  flex flex-col lg:justify-center lg:flex-row gap-7 mt-10  w-full">
                    <div className=" w-full  flex  flex-col gap-3 lg:w-[50%] lg:items-end  ">
                        <motion.p
                                className="text-[.9rem] font-bold w-full text-center mb-2"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }} 
                                transition={{ duration: 0.6 }}
                        
                        >Programming / Library Skills</motion.p>
                        <SkillsDiv width='70%' logo={ReactLogo} name='ReactJS'></SkillsDiv>
                        <SkillsDiv width='80%' logo={TailwindLogo} height="h-4" name='TailwindCss'></SkillsDiv>
                        <SkillsDiv width='60%' logo={SupabaseLogo} name='Supabase' height="h-5"></SkillsDiv>
                        <SkillsDiv width='60%' logo={Mysql} name='MySql'></SkillsDiv>
                        <SkillsDiv width='75%' logo={Node} name='NodeJS'></SkillsDiv>
                        <SkillsDiv width='60%' logo={Git} name='Git'></SkillsDiv>
                        <SkillsDiv width='85%' logo={HTML} name='HTML5'></SkillsDiv>
                        <SkillsDiv width='85%' logo={Javascript} name='JavaScript'></SkillsDiv>
                        <SkillsDiv width='85%' logo={Css} name='Css'></SkillsDiv>
                        <SkillsDiv width='25%' logo={Java} name='Java'></SkillsDiv>
                        <SkillsDiv width='25%' logo={Cplus} name='C++' height="h-5"></SkillsDiv>
                    </div>
                    <div className="hidden lg:flex  border-2 border-white">

                    </div>
                    <div className=" w-full lg:w-[50%] flex gap-4 flex-col ">
                        <motion.p
                                className="text-[.9rem] font-bold w-full text-center mb-2"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }} 
                                transition={{ duration: 0.6 }}
                        
                        >Other Skills</motion.p>

                        <OtherSkills></OtherSkills>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Skills;