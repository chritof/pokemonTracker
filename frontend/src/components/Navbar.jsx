import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Browse cards", "My collection", "Price tracker", "Login"];

  return (
    <nav className="mx-4 lg:mx-12 py-4 lg:py-6 px-6 lg:px-10 mt-6 lg:mt-10 border border-white/10 bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-lg text-white transition-colors duration-300">
      {/* Wrapper */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/pokemonLogo1.png" className="h-8 lg:h-10 w-auto" alt="Pokémon logo" />
        </div>

        {/* Desktop menu (vises først fra lg og oppover) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-base md:text-lg xl:text-xl border-b-2 border-transparent hover:border-white transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Profil-ikon (desktop) */}
        <div className="hidden lg:block">
          <a href="#">
            <img src="/profilLogo2.png" className="h-7 w-auto pl-5" alt="Profile icon" />
          </a>
        </div>

        {/* Hamburger (mobil + mellomstore skjermer) */}
        <button
          className="lg:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4 pb-4">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg border-b border-transparent hover:border-white transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#" className="mt-2" onClick={() => setMenuOpen(false)}>
            <img src="/profilLogo2.png" className="h-8 w-auto" alt="Profile icon" />
          </a>
        </div>
      )}
    </nav>
  );
}