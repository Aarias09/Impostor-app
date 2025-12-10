import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Shared/Button'
import { useGameStore } from '../store/GameContext'

export default function RevealRole({ playerName, playerIndex }){
  const [revealed, setRevealed] = useState(false)
  const chosenCategory = useGameStore(s => s.chosenCategory)
  const chosenCharacter = useGameStore(s => s.chosenCharacter)
  const impostorIndex = useGameStore(s => s.impostorIndex)
  const nextReveal = useGameStore(s => s.nextReveal)

  const isImpostor = playerIndex === impostorIndex

  return (
    <motion.div className="bg-card p-[55px] sm:p-[55px] md:p-[55px] lg:p-[100px] rounded-2xl sm:rounded-3xl shadow-lg text-center" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
      <div className="text-xl sm:text-xl font-semibold mb-3">Jugador:</div>
      <div className="text-2xl sm:text-2xl font-bold mb-6 sm:mb-6">{playerName}</div>

      {!revealed ? (
        <Button className="bg-primary text-white" onClick={() => setRevealed(true)}>Ver mi rol</Button>
      ) : (
        <div className="space-y-4 sm:space-y-4">
          {isImpostor ? (
            <div className="space-y-3">
              <div className="text-lg sm:text-lg font-bold">Sos el Impostor</div>
              <div className="text-sm sm:text-sm text-gray-300">Categoría en juego: <span className="font-medium">{chosenCategory}</span></div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-lg sm:text-lg">Tu personaje es:</div>
              <div className="text-2xl sm:text-2xl font-bold">{chosenCharacter}</div>
              <div className="text-sm sm:text-sm text-gray-400">Categoría: {chosenCategory}</div>
            </div>
          )}

          <div className="pt-4 sm:pt-4">
            <Button className="bg-white/5 text-white" onClick={() => { setRevealed(false); nextReveal(); }}>Siguiente jugador</Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
