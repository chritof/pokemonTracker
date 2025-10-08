// src/App.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/CardGrid";
import FeatureTiles from "./components/FeatureTiles";
import Footer from "./components/Footer";
import { getTrendingCards, searchCards } from "./lib/api";

export default function App() {
  // ---- state ----
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [cards, setCards] = useState([]);
  const [total, setTotal] = useState(0);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTrending, setLoadingTrending] = useState(false);
  const [error, setError] = useState("");

  // ---- bootstrap: trending ----
  useEffect(() => {
    (async () => {
      setLoadingTrending(true);
      try {
        const items = await getTrendingCards();
        setTrending(items ?? []);
      } catch (e) {
        console.error("Trending fetch failed:", e);
        setTrending([]);
      } finally {
        setLoadingTrending(false);
      }
    })();
  }, []);

  // ---- search with debounce ----
  const debounceRef = useRef(null);
  const onSearch = (q) => {
    setQuery(q);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      if (!q?.trim()) {
        // tomt søk: nullstill resultater
        setCards([]);
        setTotal(0);
        setPage(0);
        setError("");
        return;
      }

      setLoading(true);
      setError("");
      setPage(0);

      try {
        const res = await searchCards(q.trim(), 0, 24);
        setCards(res.content ?? []);
        setTotal(res.totalElements ?? 0);
      } catch (e) {
        setError(e.message || "Kunne ikke hente kort.");
        setCards([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  // ---- load more ----
  const loadMore = async () => {
    const next = page + 1;
    setLoading(true);
    setError("");
    try {
      const res = await searchCards(query, next, 24);
      setCards((prev) => [...prev, ...(res.content ?? [])]);
      setTotal(res.totalElements ?? total);
      setPage(next);
    } catch (e) {
      setError(e.message || "Kunne ikke hente flere kort.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <Hero />

        {/* Search panel */}
        <section className="mt-10 glass p-5 sm:p-8">
          <div className="flex items-center gap-3">
            <SearchBar onSearch={onSearch} />
            <button
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition"
              onClick={() => onSearch(query)} // trigger søk for knapp
            >
              Find card value
            </button>
          </div>

          {error && (
            <div className="mt-4 text-sm text-red-300 bg-red-900/30 border border-red-400/30 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {/* Trending når det ikke søkes */}
          {!query && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Trending cards</h2>
                {loadingTrending && (
                  <span className="text-white/60 text-sm">Loading…</span>
                )}
              </div>

              {trending?.length > 0 ? (
                <CardGrid cards={trending} />
              ) : !loadingTrending ? (
                <div className="text-white/60 text-sm">
                  Ingen trending cards tilgjengelig.
                </div>
              ) : null}
            </div>
          )}

          {/* Søkresultater */}
          {query && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Search results</h2>
                <span className="text-white/70 text-sm">
                  {loading ? "…" : total} results
                </span>
              </div>

              {loading && cards.length === 0 ? (
                <div className="py-10 text-center text-white/70">Searching…</div>
              ) : (
                <>
                  <CardGrid cards={cards} />
                  {cards.length === 0 && !loading && (
                    <div className="py-10 text-center text-white/60">
                      No cards found for “{query}”.
                    </div>
                  )}
                  {cards.length < total && (
                    <div className="text-center mt-6">
                      <button
                        onClick={loadMore}
                        className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition disabled:opacity-60"
                        disabled={loading}
                      >
                        {loading ? "Loading…" : "Load more"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>

        <FeatureTiles />
      </main>

      <Footer />
    </div>
  );
}