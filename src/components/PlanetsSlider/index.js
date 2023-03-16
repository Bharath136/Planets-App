import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanetItem => (
          <PlanetItem key={eachPlanetItem.id} eachPlanetItem={eachPlanetItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
