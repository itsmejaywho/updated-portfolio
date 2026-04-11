import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from '../utils/motion';
import { useRef } from 'react';

const timeline = [
    {
        period: '2022 - 2026',
        school: 'Technological University of the Philippines',
        position: 'College',
        location: 'Manila City',
    },
    {
        period: '2019 - 2021',
        school: 'San Felipe Neri Parochial School',
        position: 'Senior High School',
        location: 'Mandaluyong City',
    },
    {
        period: '2015 - 2019',
        school: 'Mandaluyong High School',
        position: 'Junior High School',
        location: 'Mandaluyong City',
    },
    {
        period: '2009 - 2015',
        school: 'Dona Pilar C Gonzaga Elementary School',
        position: 'Elementary',
        location: 'Mandaluyong City',
    },
];

function Education(){
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return(
        <div className="min-h-screen w-full flex flex-col py-16 px-4" style={{ borderTop: '1px solid var(--section-border)' }}>
            <div className='w-full flex flex-col items-center gap-2 mb-16'>
                <motion.h2
                    className='text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-center'
                    {...fadeInUp}
                >
                    Educational Background
                </motion.h2>
                <motion.p
                    className='text-[.8rem] sm:text-[.85rem] md:text-[.95rem] text-center max-w-xl'
                    style={{ color: 'var(--text-secondary)' }}
                    {...fadeInUp}
                >
                    My academic journey reflecting continuous learning and growth
                </motion.p>
            </div>

            <div ref={containerRef} className="relative max-w-4xl mx-auto w-full">
                {/* Center timeline track */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]" style={{ background: 'var(--timeline-track)' }} />
                {/* Animated line */}
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-[#67a3fd] origin-top"
                    style={{ height: lineHeight }}
                />

                <div className="flex flex-col gap-16">
                    {timeline.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={i}
                                className="relative grid grid-cols-[1fr_auto_1fr] items-center"
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Left side */}
                                <div className="pr-8">
                                    {isLeft && (
                                        <div className="rounded-xl p-5 text-right" style={{ background: 'var(--edu-card-bg)', border: '1px solid var(--edu-card-border)' }}>
                                            <p className='text-[.85rem] sm:text-[.95rem] md:text-[1.05rem] font-bold'>{item.school}</p>
                                            <p className="text-[.75rem] sm:text-[.8rem] text-[#d4a373] mt-1">{item.position}</p>
                                            <p className="text-[.7rem] sm:text-[.75rem] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.location}</p>
                                            <p className="text-[.7rem] sm:text-[.75rem] mt-1" style={{ color: 'var(--text-muted)' }}>{item.period}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Center dot */}
                                <motion.div
                                    className="w-4 h-4 rounded-full border-[3px] border-[#67a3fd] z-10"
                                    style={{ background: 'var(--timeline-dot-bg)' }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                />

                                {/* Right side */}
                                <div className="pl-8">
                                    {!isLeft && (
                                        <div className="rounded-xl p-5" style={{ background: 'var(--edu-card-bg)', border: '1px solid var(--edu-card-border)' }}>
                                            <p className='text-[.85rem] sm:text-[.95rem] md:text-[1.05rem] font-bold'>{item.school}</p>
                                            <p className="text-[.75rem] sm:text-[.8rem] text-[#d4a373] mt-1">{item.position}</p>
                                            <p className="text-[.7rem] sm:text-[.75rem] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.location}</p>
                                            <p className="text-[.7rem] sm:text-[.75rem] mt-1" style={{ color: 'var(--text-muted)' }}>{item.period}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;
