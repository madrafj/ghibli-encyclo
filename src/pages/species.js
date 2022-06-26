import MyCard from "../components/mycard";
import GridWrapper from "../components/pageWrapper";
import { BASE_POINT } from "../libs/constants";
import { useFetcherFiltered } from "../libs/hooks";
import { getKeyPair, shuffle } from "../libs/utils";

export default function Species() {
  const datas = useFetcherFiltered(BASE_POINT + 'species/', ['name'])

  const randColors = shuffle()

  return (
    <GridWrapper>
      {datas && datas.map((v, i) => (
        <MyCard
          title={v.name}
          description={v.description}
          details={getKeyPair(v, ['classification', 'eye_colors', 'hair_colors', 'people', 'films'])}
          color={randColors[i%5]}
          key={i}
        />
      ))}
    </GridWrapper>
  )
}
