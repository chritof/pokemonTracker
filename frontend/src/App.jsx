import NavBar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="">
      <NavBar />
      {/* resten av siden */}
        <h1 className="text-4xl md:text-6xl font-extrabold px-30">
          Find the value of any Pokémon card
        </h1>
    </div>
  )
}

export default App