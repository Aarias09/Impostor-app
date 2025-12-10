import React from 'react'
import PlayerInput from '../components/PlayerInput'
import PlayerList from '../components/PlayerList'
import ExcelLoader from '../components/ExcelLoader'
import { useGameStore } from '../store/GameContext'
import Button from '../components/Shared/Button'
import EndScreen from '../components/EndScreen'

export default function Home(){
  const players = useGameStore(s => s.players)
  const startGame = useGameStore(s => s.startGame)

  return (
    <div className="w-full max-w-2xl mx-auto">
      
      {<div className="bg-card p-10 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2 sm:mt-4 text-center">NOCHE DE IMPOSTOR</h1>


        <section className="mb-4 sm:mb-5">
         <PlayerInput />
        </section>

        <section className="mb-4 sm:mb-6">
          <PlayerList />
        </section>

        <section className="mb-6 sm:mb-10">
          <ExcelLoader />
        </section>

        <div className="flex justify-center">
          <Button className={` ${players.length >= 3 ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 cursor-not-allowed'}`} onClick={() => players.length >= 3 && startGame()} disabled={players.length < 3}>Iniciar Juego</Button>
        </div>
      </div> }

      <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 text-center">© Alejo Arias</div>
    </div>
  )
}
