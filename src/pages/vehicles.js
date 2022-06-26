import MyCard from "../components/mycard";
import GridWrapper from "../components/pageWrapper";
import { BASE_POINT } from "../libs/constants";
import { useFetcherFiltered } from "../libs/hooks";
import { getKeyPair, shuffle } from "../libs/utils";

export default function Vehicles() {
  const datas = useFetcherFiltered(BASE_POINT + 'vehicles/', ['name'])

  const randColors = shuffle()

  return (
    <GridWrapper>
      {datas && datas.map((v, i) => (
        <MyCard
          title={v.name}
          description={v.description}
          details={getKeyPair(v, ['vehicle_class', 'pilot', 'length', 'films'])}
          color={randColors[i%5]}
          key={i}
        />
      ))}
    </GridWrapper>
  )
}
