export default function Footer(){
  return (
    <footer className="mt-12 py-10 text-center text-white/60">
      <div className="container mx-auto px-4">
        <div className="text-sm">© {new Date().getFullYear()} PokeValue • Built with ❤️ in React</div>
      </div>
    </footer>
  )
}
