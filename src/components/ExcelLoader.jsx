import React, { useRef } from 'react'
import Button from './Shared/Button'
import { readExcelFile } from '../utils/readExcel'
import { useGameStore } from '../store/GameContext'

export default function ExcelLoader(){
  const inp = useRef(null)
  const setDatabase = useGameStore(s => s.setDatabase)

  async function handleFile(e){
    const f = e.target.files[0]
    if (!f) return
    try{
      const parsed = await readExcelFile(f)
      if (!parsed || parsed.length === 0) throw new Error('No hay filas válidas')
      setDatabase(parsed)
      alert('Base de datos cargada correctamente')
    }catch(err){
      alert('Error: ' + err.message)
    }
  }

  return (
    <div className="space-y-2">
      <input ref={inp} type="file" accept=".xlsx,.xls" onChange={handleFile} className="hidden" />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button className="bg-white/5 text-white w-full sm:w-auto" onClick={() => inp.current && inp.current.click()}>Cargar Excel</Button>
        <div className="text-xs sm:text-sm text-gray-300 self-center text-center sm:text-left">(Formato: Categoria | Personaje)</div>
      </div>
    </div>
  )
}
