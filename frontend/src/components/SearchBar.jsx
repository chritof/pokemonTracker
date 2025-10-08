import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')
  const submit = (e) => {
    e.preventDefault()
    onSearch?.(value.trim())
  }
  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Enter card name (e.g. Pikachu)"
        className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-poke.blue"
      />
      <button className="rounded-xl px-5 py-3 bg-gradient-to-br from-poke.yellow via-poke.orange to-poke.pink text-black font-semibold hover:brightness-110 transition">Find card value</button>
    </form>
  )
}