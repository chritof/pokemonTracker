export default function NavBar() {
  return (
    <nav className="mx-12 py-6 px-10 mt-10 border border-white/10 bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-lg text-white transition-colors duration-300">
      {/* this make the space between the three main functions in the navbar:
      pokemon logo, links and profile logo */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/pokemonLogo1.png" className="h-10 w-auto" alt="Pokémon logo" />
        </div>

        {/* Menu links */}
        <ul className="hidden md:flex gap-7 items-center">
          {["Home", "Browse cards", "My collection", "Price tracker", "Login"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-xl border-b-2 border-transparent hover:border-white transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Profile icon */}
        <div>
          <a href="#">
            <img src="/profilLogo2.png" className="h-7 w-auto pl-5" alt="Profile icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}