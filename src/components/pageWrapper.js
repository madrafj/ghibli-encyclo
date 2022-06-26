export default function GridWrapper({children}) {
  return (
    <div className="container is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-start py-4">
      {children}
    </div>
  )
}