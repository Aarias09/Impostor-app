import create from 'zustand'
import { DEFAULT_DB } from '../data/defaultDatabase'

export const useGameStore = create(set => ({
  players: [],
  database: DEFAULT_DB,
  chosenCategory: null,
  chosenCharacter: null,
  impostorIndex: null,
  currentRevealIndex: 0,
  view: 'home',

  // actions
  setDatabase: (db) => set(() => ({ database: db })),
  addPlayer: (name) => set(state => ({ players: [...state.players, name] })),
  removePlayerAt: (i) => set(state => ({ players: state.players.filter((_, idx) => idx !== i) })),
  resetGame: () => set(() => ({ players: [], chosenCategory: null, chosenCharacter: null, impostorIndex: null, currentRevealIndex: 0, view: 'home', database: DEFAULT_DB })),
  startGame: () => set(state => {
    const categories = Array.from(new Set(state.database.map(r => r.category)))
    const chosenCategory = categories[Math.floor(Math.random() * categories.length)]
    const candidates = state.database.filter(r => r.category === chosenCategory)
    const chosenCharacter = candidates[Math.floor(Math.random() * candidates.length)].character

    const impostorIndex = Math.floor(Math.random() * state.players.length)

    return ({ chosenCategory, chosenCharacter, impostorIndex, currentRevealIndex: 0, view: 'reveal' })
  }),
  nextReveal: () => set(state => {
    const next = state.currentRevealIndex + 1
    if (next >= state.players.length) {
      return { view: 'final', currentRevealIndex: next }
    }
    return { currentRevealIndex: next }
  }),
  goToHome: () => set(() => ({ view: 'home' }))
}))
