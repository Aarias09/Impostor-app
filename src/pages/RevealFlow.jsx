import React from 'react'
import { useGameStore } from '../store/GameContext'
import RevealRole from '../components/RevealRole'

export default function RevealFlow(){
  const players = useGameStore(s => s.players)
  const current = useGameStore(s => s.currentRevealIndex)

  if (!players || players.length === 0) return null

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-6">
      <RevealRole playerName={players[current]} playerIndex={current} />
    </div>
  )
}
