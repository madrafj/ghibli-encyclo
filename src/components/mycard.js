import CardItem from "./carditem";

export default function MyCard({ title, description, details, color }) {
  return (
    <div className="card m-2 pb-2">
      <div className={`card-header has-background-${color}`}>
        <p className="card-header-title has-text-white-ter is-centered">{title}</p>
      </div>
      {description && (
        <div className="card-content">
          <p>{description}</p>
        </div>
      )}
      {details && details.map((v, i) => (
        <CardItem entry={v} key={i} />
      ))}
    </div>
  )
}