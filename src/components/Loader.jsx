import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Loader({ onComplete }) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
            onComplete?.();
        }, 4500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const outlineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, delay: i * 0.5, ease: 'easeInOut' },
                opacity: { duration: 0.2, delay: i * 0.5 },
            },
        }),
    };

    const fillVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 2.5, ease: 'easeIn' },
        },
    };

    const hatchVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 0.45,
            transition: {
                pathLength: { duration: 1.2, delay: 2.8 + i * 0.04, ease: 'easeInOut' },
                opacity: { duration: 0.3, delay: 2.8 + i * 0.04 },
            },
        }),
    };

    // Bold serif R — outer shape
    const rOuter = "M 15 145 L 15 15 L 80 15 Q 105 15 115 28 Q 125 42 125 58 Q 125 74 115 85 Q 105 95 85 95 L 55 95 L 125 145 L 95 145 L 35 100 L 35 145 Z";
    // R — inner bowl cutout
    const rInner = "M 35 30 L 35 80 L 78 80 Q 95 80 102 72 Q 108 64 108 58 Q 108 48 102 40 Q 95 30 78 30 Z";

    // Bold serif J — outer shape  
    const jOuter = "M 145 15 L 225 15 L 225 30 L 200 30 L 200 100 Q 200 118 194 128 Q 186 142 170 145 Q 155 145 147 137 Q 140 128 138 115 L 155 110 Q 157 120 161 126 Q 166 132 172 132 Q 180 132 184 124 Q 186 118 186 100 L 186 30 L 145 30 Z";

    // Diagonal hatching lines for R (will be clipped)
    const rHatchLines = [
        "M 20 25 L 40 15", "M 20 40 L 60 15", "M 20 55 L 80 15",
        "M 20 70 L 100 15", "M 20 85 L 115 20", "M 20 100 L 120 35",
        "M 20 115 L 120 50", "M 20 130 L 115 65", "M 20 145 L 110 80",
        "M 30 145 L 105 95", "M 45 145 L 100 110", "M 60 145 L 95 125",
        "M 75 145 L 115 120", "M 90 145 L 120 130",
    ];

    // Diagonal hatching lines for J (will be clipped)
    const jHatchLines = [
        "M 150 20 L 170 15", "M 150 30 L 200 15", "M 150 30 L 220 15",
        "M 190 45 L 198 30", "M 190 60 L 198 45", "M 190 75 L 198 60",
        "M 190 90 L 198 75", "M 188 105 L 198 90", "M 183 120 L 196 100",
        "M 170 135 L 192 110", "M 158 130 L 188 115", "M 148 120 L 180 100",
    ];

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(to right, #1a1a1a, #0d1b2a, #1b263b)',
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <motion.svg
                        viewBox="0 0 260 160"
                        className="w-[65%] max-w-[420px] h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{
                            scale: [1, 1, 1, 2.5],
                            opacity: [1, 1, 1, 0],
                        }}
                        transition={{
                            duration: 4.5,
                            times: [0, 0.75, 0.82, 1],
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <defs>
                            <clipPath id="rClip">
                                <path d={rOuter} />
                                <path d={rInner} clipRule="evenodd" />
                            </clipPath>
                            <clipPath id="jClip">
                                <path d={jOuter} />
                            </clipPath>
                        </defs>

                        {/* 3D shadow behind R */}
                        <motion.path
                            d={rOuter}
                            fill="#6b4a2a"
                            stroke="none"
                            transform="translate(4, 4)"
                            variants={fillVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        {/* 3D shadow behind J */}
                        <motion.path
                            d={jOuter}
                            fill="#6b4a2a"
                            stroke="none"
                            transform="translate(4, 4)"
                            variants={fillVariants}
                            initial="hidden"
                            animate="visible"
                        />

                        {/* Fill R */}
                        <motion.path
                            d={rOuter}
                            fill="#d4a373"
                            stroke="none"
                            variants={fillVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        {/* R inner cutout */}
                        <motion.path
                            d={rInner}
                            fill="#0d1b2a"
                            stroke="none"
                            variants={fillVariants}
                            initial="hidden"
                            animate="visible"
                        />

                        {/* Fill J */}
                        <motion.path
                            d={jOuter}
                            fill="#d4a373"
                            stroke="none"
                            variants={fillVariants}
                            initial="hidden"
                            animate="visible"
                        />

                        {/* Hatching lines R (clipped) */}
                        <g clipPath="url(#rClip)">
                            {rHatchLines.map((d, i) => (
                                <motion.path
                                    key={`rh-${i}`}
                                    d={d}
                                    fill="none"
                                    stroke="#2a1a0a"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    variants={hatchVariants}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                />
                            ))}
                        </g>

                        {/* Hatching lines J (clipped) */}
                        <g clipPath="url(#jClip)">
                            {jHatchLines.map((d, i) => (
                                <motion.path
                                    key={`jh-${i}`}
                                    d={d}
                                    fill="none"
                                    stroke="#2a1a0a"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    variants={hatchVariants}
                                    custom={i + rHatchLines.length}
                                    initial="hidden"
                                    animate="visible"
                                />
                            ))}
                        </g>

                        {/* R outline drawing animation */}
                        <motion.path
                            d={rOuter}
                            fill="none"
                            stroke="#2a1a0a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={outlineVariants}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        />
                        {/* R inner bowl outline */}
                        <motion.path
                            d={rInner}
                            fill="none"
                            stroke="#2a1a0a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={outlineVariants}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        />

                        {/* J outline drawing animation */}
                        <motion.path
                            d={jOuter}
                            fill="none"
                            stroke="#2a1a0a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={outlineVariants}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                        />
                    </motion.svg>

                    {/* Subtle dot indicator */}
                    <div className="absolute bottom-16 flex gap-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-[#d4a373]"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loader;
