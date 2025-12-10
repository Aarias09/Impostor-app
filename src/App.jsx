import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import RevealFlow from './pages/RevealFlow'
import Final from './pages/Final'
import { useGameStore } from './store/GameContext'

export default function App() {
  const view = useGameStore(state => state.view)

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-6">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <Home />
          </motion.div>
        )}

        {view === 'reveal' && (
          <motion.div key="reveal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <RevealFlow />
          </motion.div>
        )}

        {view === 'final' && (
          <motion.div key="final" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <Final />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
