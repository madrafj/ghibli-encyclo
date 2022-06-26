import { useEffect, useState } from "react"
import { fetchName, isStr, isURL, remUnderscore } from "../libs/utils"

export default function CardItem({entry}) {
  const [values, setValues] = useState(undefined)

  useEffect(() => {
    if (isStr(entry[1])) {
      if (isURL(entry[1])) {
        async function fetchItem() {
          let val = await fetchName(entry[1])
          setValues(val)
        }
        fetchItem()
      }
      else setValues(entry[1])
    }
    else {
      async function fetchItems() {
        let arr = await Promise.all(
          entry[1].map(fetchName)
        )
        setValues(arr.join(', '))
      }
      fetchItems()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card-footer px-5 py-1 is-justify-content-space-between">
      <sup>{remUnderscore(entry[0])}</sup>
      <span className="has-text-right">{values}</span>
    </div>
  )
}