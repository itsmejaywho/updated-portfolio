import { motion } from "framer-motion";
import { fadeInUp } from '../utils/motion';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Jaytimepieces',
        description: 'A modern e-commerce watch store built with React and Vite, featuring product browsing, responsive design, and seamless navigation.',
        tags: ['React', 'Vite', 'React Router'],
        link: 'https://jaytimepieces.vercel.app/',
        color: '#d4a373',
    },
    {
        title: 'MiniX',
        description: 'A social media platform clone inspired by X, featuring user authentication, sign-up/sign-in flows, and a clean modern UI.',
        tags: ['React', 'Supabase', 'Tailwind CSS'],
        link: 'https://mini-x-three.vercel.app/',
        color: '#67a3fd',
    },
    {
        title: 'Jaytimepieces',
        description: 'A modern e-commerce watch store built with React and Vite, featuring product browsing, responsive design, and seamless navigation.',
        tags: ['React', 'Vite', 'React Router'],
        link: 'https://jaytimepieces.vercel.app/',
        color: '#d4a373',
    },
    {
        title: 'MiniX',
        description: 'A social media platform clone inspired by X, featuring user authentication, sign-up/sign-in flows, and a clean modern UI.',
        tags: ['React', 'Supabase', 'Tailwind CSS'],
        link: 'https://mini-x-three.vercel.app/',
        color: '#67a3fd',
    },
];

function Projects() {
    return (
        <div
            className="min-h-screen py-20 px-4"
            style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[.85rem] mb-10 transition-colors duration-200"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl overflow-hidden flex flex-col"
                            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Preview */}
                            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                <iframe
                                    src={project.link}
                                    title={project.title}
                                    className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3
                                    className="text-[1.05rem] sm:text-[1.15rem] font-bold"
                                    style={{ color: project.color }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-[.75rem] sm:text-[.82rem] mt-2 flex-1"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-[.65rem] sm:text-[.7rem] px-2.5 py-1 rounded-full"
                                            style={{ color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}
                                        >
                                            #{tag.toLowerCase().replace(/\s/g, '_')}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-[.8rem] font-medium w-fit px-4 py-2 rounded-lg transition-colors duration-200"
                                    style={{ border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
                                >
                                    View Project
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
