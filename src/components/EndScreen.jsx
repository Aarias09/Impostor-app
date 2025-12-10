import React from 'react'
import { useGameStore } from '../store/GameContext'
import Button from './Shared/Button'

export default function EndScreen(){
  const reset = useGameStore(s => s.resetGame)
  const goHome = useGameStore(s => s.goToHome)

  return (
    <div className="bg-card p-20 sm:p-20 md:p-20 lg:p-55 rounded-2xl sm:rounded-3xl shadow-lg text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10">Juego terminado</h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3 sm:space-y-0 justify-center">
        <Button className="bg-primary text-white" onClick={reset}>Reiniciar</Button>
        <Button className="bg-white/5 text-white" onClick={goHome}>Volver al inicio</Button>
      </div>
    </div>
  )
}
