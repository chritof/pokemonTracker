import CardItem from './CardItem'

export default function CardGrid({ cards=[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((c)=> <CardItem key={c.id} card={c} />)}
    </div>
  )
}