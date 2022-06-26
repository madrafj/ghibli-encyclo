import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// fetcher hook
export function useFetcherFiltered(url, filterKeys) {
  const [datas, setDatas] = useState(undefined)
  const [isFulfilled, setIsFulfilled] = useState(false)
  const [filteredDatas, setFilteredDatas] = useState(undefined)
  const keyword = useSelector(state => state.search)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setDatas(data)
      setIsFulfilled(true)
    })
    .catch(err => console.log(err.message))
  }, [])

  useEffect(() => {
    if (isFulfilled && keyword === '') {
      setFilteredDatas(datas)
    }
    else if (isFulfilled && keyword !== '') {
      let tmpDatas = datas && datas.filter(v => (
        filterKeys.map(key => v[key]).join(' ').toLowerCase().includes(keyword.toLowerCase())
      ))
      setFilteredDatas(tmpDatas)
    }
    else {
      setFilteredDatas(undefined)
    }
  }, [keyword, datas, setFilteredDatas])

  return filteredDatas
}