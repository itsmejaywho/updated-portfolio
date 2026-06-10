import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AppRoutes from './routes/AppRoutes'
import Loader from './components/Loader'
import { ShootingStars } from './components/ui/shooting-stars'
import { StarsBackground } from './components/ui/stars-background'
import { ThemeProvider } from './utils/ThemeContext'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader onComplete={() => setLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            className="relative min-h-screen overflow-x-hidden"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="fixed inset-0 pointer-events-none bg-black"
              style={{ zIndex: 0 }}
            >
              <StarsBackground
                starDensity={0.00018}
                allStarsTwinkle
                twinkleProbability={0.85}
                minTwinkleSpeed={0.4}
                maxTwinkleSpeed={1.1}
              />
              <ShootingStars
                minSpeed={12}
                maxSpeed={28}
                minDelay={900}
                maxDelay={2600}
                starColor="#ffffff"
                trailColor="#7dd3fc"
                starWidth={12}
                starHeight={1}
              />
            </div>

            <div className="relative" style={{ zIndex: 1 }}>
              <AppRoutes />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
