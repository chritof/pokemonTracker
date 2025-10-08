export default function FeatureTiles(){
  const tiles = [
    { title: 'Track Card Values', desc: "See how your cards' worth changes over time.", icon: '📈', bg: 'from-poke.blue/30 to-transparent' },
    { title: 'Build Collections', desc: 'Organize privately or share with the world.', icon: '🗂️', bg: 'from-poke.yellow/30 to-transparent' },
    { title: 'Follow Users', desc: 'Stay updated on public collections.', icon: '⭐', bg: 'from-poke.pink/30 to-transparent' },
  ]
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-3">
      {tiles.map((t)=> (
        <div key={t.title} className={`glass p-6 bg-gradient-to-br ${t.bg}`}>
          <div className="text-3xl">{t.icon}</div>
          <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
          <p className="text-white/80 text-sm mt-1">{t.desc}</p>
        </div>
      ))}
    </section>
  )
}