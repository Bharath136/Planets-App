import './index.css'

const PlanetItem = props => {
  const {eachPlanetItem} = props
  const {name, description, imageUrl} = eachPlanetItem
  console.log(eachPlanetItem)
  return (
    <li className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
