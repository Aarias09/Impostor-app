import React from 'react'
import { useGameStore } from '../store/GameContext'

export default function PlayerList(){
  const players = useGameStore(s => s.players)
  const remove = useGameStore(s => s.removePlayerAt)

  return (
    <div className="grid gap-2">
      {players.map((p, i) => (
        <div key={i} className="flex items-center justify-between bg-card p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm">
          <div className="font-medium text-sm sm:text-base truncate pr-2">{p}</div>
          <button onClick={() => remove(i)} className="text-xs sm:text-sm text-gray-400 hover:text-white whitespace-nowrap">Eliminar</button>
        </div>
      ))}
    </div>
  )
}
