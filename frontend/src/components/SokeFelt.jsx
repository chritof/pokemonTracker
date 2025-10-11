export default function SokeFelt() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 mx-4">
      <h1 className="text-white text-center font-extrabold drop-shadow-lg pb-4 sm:pb-6
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
        Find the value of any Pokémon card
      </h1>

      <form
        className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="cardSearch" className="sr-only">
          Enter card name
        </label>

        <input
          id="cardSearch"
          type="text"
          placeholder="Enter card name"
          className="w-full sm:w-[26rem] md:w-[32rem]
                     px-5 sm:px-6 py-4 sm:py-5 rounded-2xl
                     bg-white/95 text-blue-700 placeholder-blue-500
                     text-base sm:text-lg shadow
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/80"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-5 sm:px-8 py-4 rounded-2xl
                     bg-gradient-to-b from-yellow-300 to-yellow-400
                     hover:from-yellow-400 hover:to-yellow-500
                     text-black font-semibold text-base sm:text-lg
                     shadow-md transition"
        >
          Find card value
        </button>
      </form>

      {/* valgfritt hint under feltet */}
      <p className="text-white/70 text-center text-sm mt-3">
        Try “Charizard 4/102”
      </p>
    </section>
  );
}