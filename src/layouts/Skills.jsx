import { motion } from "framer-motion";
import { fadeInUp } from '../utils/motion';
import TailwindLogo from '../assets/tailwind.svg'
import ReactLogo from '../assets/react.svg'
import SupabaseLogo from '../assets/supabase.svg'
import Mysql from '../assets/mysql.svg'
import HTML from '../assets/html.svg'
import Javascript from '../assets/javascript.svg'
import Node from '../assets/node.svg'
import Css from '../assets/css.svg'
import Git from '../assets/github.svg'
import Java from '../assets/java.svg'
import Cplus from '../assets/c++.svg'
import ML from '../assets/machinelearning.svg'
import Postgres from '../assets/postgresql.svg'
import FastAPI from '../assets/fastapi.svg'
import Flask from '../assets/flask.svg'

const skills = [
    { name: 'React', logo: ReactLogo },
    { name: 'JavaScript', logo: Javascript },
    { name: 'HTML5', logo: HTML },
    { name: 'CSS', logo: Css },
    { name: 'Tailwind CSS', logo: TailwindLogo },
    { name: 'Node.js', logo: Node },
    { name: 'Supabase', logo: SupabaseLogo },
    { name: 'MySQL', logo: Mysql },
    { name: 'Git', logo: Git },
    { name: 'Java', logo: Java },
    { name: 'C++', logo: Cplus },
    { name: 'Machine Learning', logo: ML },
    { name: 'PostgreSQL', logo: Postgres },
    { name: 'FastAPI', logo: FastAPI },
    { name: 'Flask', logo: Flask },
];

function Skills(){
    return(
        <div className="w-full flex flex-col items-center py-16 px-4">
            <motion.h2
                className='text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-center'
                {...fadeInUp}
            >
                Technical Expertise
            </motion.h2>
            <motion.p
                className='text-[.8rem] sm:text-[.85rem] md:text-[.95rem] text-center mt-3 max-w-xl'
                style={{ color: 'var(--text-secondary)' }}
                {...fadeInUp}
            >
                A refined selection of my proficiency in modern development tools and technologies
            </motion.p>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-12 sm:gap-14 mt-12 max-w-4xl">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 w-20 h-20 sm:w-24 sm:h-24 justify-center rounded-lg cursor-pointer transition-colors duration-200 hover:bg-[var(--skill-hover)]"
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                    >
                        <img src={skill.logo} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12" />
                        <span className="text-[.65rem] sm:text-[.75rem] text-center" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className='text-[.75rem] sm:text-[.8rem] italic text-center mt-12'
                style={{ color: 'var(--text-muted)' }}
                {...fadeInUp}
            >
                Constantly refining and expanding my technical skillset
            </motion.p>
        </div>
    )
}

export default Skills;
