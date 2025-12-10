import * as XLSX from 'xlsx'

// Lee un archivo File (xlsx) y devuelve array de { category, character }
export async function readExcelFile(file) {
  const data = await file.arrayBuffer()
  const workbook = XLSX.read(data)
  const firstSheetName = workbook.SheetNames[0]
  const sheet = workbook.Sheets[firstSheetName]
  const json = XLSX.utils.sheet_to_json(sheet, { defval: '' })

  // Buscar columnas que contengan 'categoria' y 'personaje' (case-insensitive)
  const normalizedKeys = Object.keys(json[0] || {}).map(k => k.toLowerCase())
  const hasCategoria = normalizedKeys.find(k => k.includes('categoria') || k.includes('category'))
  const hasPersonaje = normalizedKeys.find(k => k.includes('personaje') || k.includes('character') || k.includes('person') )

  if (!hasCategoria || !hasPersonaje) {
    throw new Error('El archivo debe contener columnas "Categoria" y "Personaje"')
  }

  const categoryKey = Object.keys(json[0]).find(k => k.toLowerCase().includes('categoria') || k.toLowerCase().includes('category'))
  const characterKey = Object.keys(json[0]).find(k => k.toLowerCase().includes('personaje') || k.toLowerCase().includes('character') || k.toLowerCase().includes('person'))

  const out = json.map(row => ({
    category: String(row[categoryKey]).trim(),
    character: String(row[characterKey]).trim()
  })).filter(r => r.category && r.character)

  return out
}
