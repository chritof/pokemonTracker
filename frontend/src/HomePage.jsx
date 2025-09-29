import React, { useState } from "react";

// Single‑file demo homepage — TailwindCSS styling only
// Drop into your React app (e.g., src/pages/HomePage.jsx) and render <HomePage />
// Replace mock data and handlers with your real APIs later.

const MOCK_FEATURED = [
  {
    id: "pikachu",
    name: "Pikachu",
    price: 2.5,
    // Public sample image from Pokémon TCG image CDN
    img: "https://images.pokemontcg.io/basep/1.png",
  },
  {
    id: "charizard",
    name: "Charizard",
    price: 199.99,
    img: "https://images.pokemontcg.io/base2/4.png",
  },
  {
    id: "blastoise",
    name: "Blastoise",
    price: 45.0,
    img: "https://images.pokemontcg.io/base1/2.png",
  },
  {
    id: "gengar",
    name: "Gengar",
    price: 35.0,
    img: "https://images.pokemontcg.io/neo4/6.png",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    // TODO: route to /search?q=query
    console.log("search:", query);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-blue-600" />
              <span className="text-xl font-bold tracking-tight">PokéTracker</span>
            </div>
            <nav className="hidden gap-8 text-sm md:flex">
              <a className="hover:text-blue-600" href="#browse">Browse</a>
              <a className="hover:text-blue-600" href="#collection">My Collection</a>
              <a className="hover:text-blue-600" href="#community">Community</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
                Log in
              </button>
              <button className="hidden rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 md:inline-block">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-14 sm:pt-20">
        <h1 className="text-center text-4xl font-extrabold leading-tight sm:text-5xl">
          Track Card Prices
          <br className="hidden sm:block" /> &amp; Manage Your Collection
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Søk på Pokémon-kort, se markedspriser og bygg samlinger du kan dele med
          andre.
        </p>

        {/* Search */}
        <form onSubmit={onSearch} className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white p-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <MagnifierIcon className="h-5 w-5 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
              placeholder="Search for a card"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* Featured Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-14 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Cards</h2>
          <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
            View Market
          </button>
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_FEATURED.map((c) => (
            <li
              key={c.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-medium">{c.name}</p>
                <span className="rounded-xl bg-slate-100 px-2 py-1 text-xs font-semibold">
                  ${c.price.toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Two‑up Features */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <FolderIcon className="h-10 w-10" />
              <h3 className="text-xl font-semibold">Build Your Collection</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Legg til kort i din personlige mappe, følg fremdrift per sett og få
              verdiberegning automatisk.
            </p>
            <button className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Start adding cards
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <UsersIcon className="h-10 w-10" />
              <h3 className="text-xl font-semibold">Connect with Others</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Følg andre samlere, oppdag sjeldne kort og del dine highlights med
              et offentlig samlings‑galleri.
            </p>
            <button className="mt-6 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
              Explore community
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} PokéTracker — for demo purposes only.
        </div>
      </footer>
    </div>
  );
}

// --- Minimal inline icons (no extra libs) ---
function MagnifierIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function FolderIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M3 7h5l2 2h11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
