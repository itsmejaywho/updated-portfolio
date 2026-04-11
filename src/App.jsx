import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AppRoutes from './routes/AppRoutes'
import Loader from './components/Loader'
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
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
