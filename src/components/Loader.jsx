import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const name = 'RICHMON JAY'

const scatteredPositions = [
    { x: -380, y: -70, rotate: -8 },
    { x: -285, y: 40, rotate: 5 },
    { x: -190, y: -85, rotate: -4 },
    { x: -95, y: 60, rotate: 3 },
    { x: -20, y: -55, rotate: 6 },
    { x: 65, y: 55, rotate: -5 },
    { x: 145, y: -85, rotate: 4 },
    { x: 245, y: 20, rotate: -6 },
    { x: 330, y: -95, rotate: 5 },
    { x: 410, y: 45, rotate: -4 },
]

function Loader({ onComplete }) {
    const [showLoader, setShowLoader] = useState(true)
    const loaderDuration = 5900

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false)
            onComplete?.()
        }, loaderDuration)

        return () => clearTimeout(timer)
    }, [onComplete, loaderDuration])

    const letters = name.split('')

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center px-5 text-center"
                        animate={{ scale: [1, 1, 1.03], opacity: [1, 1, 0] }}
                        transition={{
                            duration: loaderDuration / 1000,
                            times: [0, 0.93, 1],
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="loader-name" aria-label={name}>
                            {letters.map((letter, index) => {
                                const isSpace = letter === ' '
                                const scatter = scatteredPositions[index] ?? { x: 0, y: 0, rotate: 0 }

                                return (
                                    <motion.span
                                        aria-hidden="true"
                                        className={isSpace ? 'loader-space' : 'loader-letter'}
                                        key={`${letter}-${index}`}
                                        initial={{
                                            x: scatter.x,
                                            y: scatter.y,
                                            rotate: scatter.rotate,
                                            opacity: isSpace ? 0 : 0.18,
                                        }}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            rotate: 0,
                                            opacity: isSpace ? 1 : [0.22, 0.48, 1],
                                        }}
                                        transition={{
                                            x: { duration: 1.7, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] },
                                            y: { duration: 1.7, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] },
                                            rotate: { duration: 1.7, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] },
                                            opacity: { duration: 1.2, delay: 0.2 + index * 0.08, ease: 'easeOut' },
                                        }}
                                    >
                                        {isSpace ? '\u00A0' : letter}
                                    </motion.span>
                                )
                            })}
                        </div>

                        <motion.p
                            className="loader-subtitle"
                            initial={{ opacity: 0, y: 90 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.05, delay: 2.65, ease: [0.16, 1, 0.3, 1] }}
                        >
                            WEB DEVELOPER
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader
