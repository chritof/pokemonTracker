export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-poke.yellow via-poke.orange to-poke.pink shadow-md" />
          <span className="font-semibold tracking-wide">PokeValue</span>
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-white/90">
          <li className="hover:text-white transition"><a href="#browse">Browse Cards</a></li>
          <li className="hover:text-white transition"><a href="#collection">My Collection</a></li>
          <li className="hover:text-white transition"><a href="#prices">Price Tracker</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">Login</button>
        </div>
      </nav>
    </header>
  )
}