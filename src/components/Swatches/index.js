import React from 'react'
import Swatch from '../Swatch'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Swatches({ list, type }) {
  const { monsterType } = useMonsterCreator()
  return (
    <div>
      {list.map(i => {
        return <Swatch key={i.id} id={i.id} url={i.url} type={type} />
      })}
    </div>
  )
}
