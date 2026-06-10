import { motion } from "framer-motion";
import { fadeInUp } from '../utils/motion';
import { Link } from 'react-router-dom';
import ReflectiveProjectCard from '../components/ReflectiveProjectCard';

const projects = [
    {
        title: 'Jaytimepieces',
        role: 'E-commerce Website',
        description: 'A modern e-commerce watch store built with React and Vite, featuring product browsing, responsive design, and seamless navigation.',
        tags: ['React', 'Vite', 'React Router'],
        link: 'https://jaytimepieces.vercel.app/',
        color: '#d4a373',
    },
    {
        title: 'MiniX',
        role: 'Social Platform Clone',
        description: 'A social media platform clone inspired by X, featuring user authentication, sign-up/sign-in flows, and a clean modern UI.',
        tags: ['React', 'Supabase', 'Tailwind CSS'],
        link: 'https://mini-x-three.vercel.app/',
        color: '#67a3fd',
    },
    {
        title: 'HackAssist',
        role: 'Job Hunt Assistant',
        description: 'A job-hunting assistant web app built to help users organize opportunities, streamline applications, and move through the search process with a cleaner workflow.',
        tags: ['React', 'Vite', 'Career Tool'],
        link: 'https://jobhunt-psi-one.vercel.app/',
        color: '#78dcca',
    },
    {
        title: 'AboutNeon',
        role: 'Interactive Web Experience',
        description: 'A neon-styled web experience focused on bold visuals, responsive layout, and a polished presentation for an immersive browsing feel.',
        tags: ['React', 'Vite', 'UI Design'],
        link: 'https://aboutneon.vercel.app/',
        color: '#f472b6',
    },
    {
        title: 'RchmnJyDev',
        role: 'Developer Portfolio',
        description: 'A personal developer portfolio built to present projects, skills, and contact details through a focused and responsive web experience.',
        tags: ['React', 'Vite', 'Portfolio'],
        link: 'https://rchmnjydev.vercel.app/',
        color: '#c084fc',
    },
];

function Projects() {
    return (
        <div
            className="min-h-screen px-4 pb-12 pt-8"
            style={{ color: 'var(--text-primary)' }}
        >
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-[.85rem] transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                    Back to Home
                </Link>

                <motion.h1
                    className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold"
                    {...fadeInUp}
                >
                    All Projects
                </motion.h1>
                <motion.p
                    className="text-[.85rem] sm:text-[.95rem] mt-3 max-w-2xl"
                    style={{ color: 'var(--text-secondary)' }}
                    {...fadeInUp}
                >
                    A complete collection of my work — from web apps to full-stack platforms. Each project reflects my growth and passion for building meaningful digital experiences.
                </motion.p>

                <div className="mx-auto mt-7 grid max-w-[66rem] grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ReflectiveProjectCard {...project} accent={project.color} index={i} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
