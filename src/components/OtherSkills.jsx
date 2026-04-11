import Computer from '../assets/computer.png'
import { motion } from "framer-motion";
import { fadeInUp } from '../utils/motion';

function OtherSkills(){
    return(
        <>
        <div className="flex w-full items-center justify-center ">
            <motion.div className="w-[25%] flex items-center justify-center"
                    {...fadeInUp}
            >
                <img src={Computer} alt="Computer"  />
            </motion.div>
            <motion.div className="w-[75%] flex flex-col gap-2"
                    {...fadeInUp}
            >
                <p className='text-[.8rem] font-bold'>Software Applications</p>
                <p className='text-[.6rem] text-justify'>Familiar with Microsoft Office, including Word, Excel, and PowerPoint, and regularly use these tools for documentation, basic data organization, and presentations. I use Microsoft Word to create and format documents, Excel for simple data management, and PowerPoint to prepare clear and organized presentation materials.</p>
            </motion.div>
        </div>
        
        </>
    )
}

export default OtherSkills;