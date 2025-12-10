import React, { useState } from 'react'
import Button from './Shared/Button'
import { useGameStore } from '../store/GameContext'

export default function PlayerInput(){
  const [name, setName] = useState('')
  const addPlayer = useGameStore(state => state.addPlayer)
  const players = useGameStore(state => state.players)

  function handleAdd(){
    const trimmed = name.trim()
    if (!trimmed) return
    if (players.some(p => p.toLowerCase() === trimmed.toLowerCase())) {
      alert('Jugador ya agregado')
      return
    }
    addPlayer(trimmed)
    setName('')
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input value={name} onChange={e => setName(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAdd()} placeholder="Agregar jugador" className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl bg-card placeholder:text-gray-400" />
        <Button className="bg-primary text-white w-full sm:w-auto" onClick={handleAdd}>Agregar</Button>
      </div>
    </div>
  )
}
