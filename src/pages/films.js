import MyCard from "../components/mycard";
import GridWrapper from "../components/pageWrapper";
import { BASE_POINT } from "../libs/constants";
import { useFetcherFiltered } from "../libs/hooks";
import { getKeyPair, shuffle } from "../libs/utils";

export default function Films() {
  const datas = useFetcherFiltered(BASE_POINT + 'films/', ['title'])

  const randColors = shuffle()

  return (
      <GridWrapper>
        {datas && datas.map((v, i) => (
          <MyCard
            title={v.title}
            description={v.description}
            details={getKeyPair(v, ['release_date', 'director', 'original_title', 'people'])}
            color={randColors[i%5]}
            key={i}
          />
        ))}
      </GridWrapper>
  )
}
