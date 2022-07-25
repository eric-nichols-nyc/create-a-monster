import Swatch from '../Swatch'

export default function Swatches({ list, type }) {
  return (
    <div>
      {list.map(i => {
        return <Swatch key={i.id} id={i.id} url={i.url} type={type} />
      })}
    </div>
  )
}
