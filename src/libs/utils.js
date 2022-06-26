import { COLORS } from "./constants"

// slice entries from object
export function getKeyPair(obj, keys) {
  return Object.entries(obj).filter(v => keys.includes(v[0]))
}

// replace underscore with space
export function remUnderscore(str) {
  return str.replace('_', ' ')
}

// is-str handler
export function isStr(val) {
  return typeof val === 'string'
}

// is-url handler
export function isURL(str) {
  return str.slice(0, 4) === 'http'
}

// name or title fetcher
export async function fetchName(url) {
  let res = await fetch(url)
  let resObj = await res.json()
  if (resObj && resObj.name) {
    return resObj.name
  }
  else if (resObj && resObj.title) {
    return resObj.title
  }
  else {
    return undefined
  }
}

// Generate random color schemes
export function shuffle(arr=COLORS) {
  let n = arr.length
  let indexes = []
  let newIndex

  function getRandIndex() {
    if (indexes.length < n) {
      newIndex = Math.floor(Math.random()*n)
      if (!indexes.includes(newIndex)) {
        indexes.push(newIndex)
      }
      getRandIndex()
    }
  }
  getRandIndex()

  return indexes.map(i => arr[i])
}