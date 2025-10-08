export default function Hero() {
  return (
    <section className="pt-10 sm:pt-16">
      <div className="glass px-6 py-10 sm:px-10 sm:py-14 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-poke.yellow/30 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-poke.pink/20 blur-2xl" />
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Find the value of any <span className="text-poke.yellow">Pokémon</span> card</h1>
        <p className="text-white/80 mt-3 max-w-2xl">Search millions of cards, track prices over time, and build your private or public collections — all in one delightful place.</p>
      </div>
    </section>
  )
}