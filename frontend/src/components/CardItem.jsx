export default function CardItem({ card }) {
  const img = card.bildeStor || card.bildeLiten;
  return (
    <article className="glass p-3 card-hover">
      <div className="aspect-[3/4] w-full bg-black/30 rounded-xl overflow-hidden flex items-center justify-center">
        {img ? (
          <img src={img} alt={card.navn} className="h-full w-full object-cover" />
        ) : (
          <div className="text-white/50 text-sm">No image</div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{card.navn}</h3>
        <div className="text-white/60 text-sm">{card.externalId}</div>
      </div>
    </article>
  );
}