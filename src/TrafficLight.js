import React from 'react'
import Bulb from './Bulb'

const TrafficLight = ({data, light}) => {
  // console.log('TrafficLight-props', data, light)
  const bulbs = data.map((bulb, index) => (
    <Bulb 
      data={bulb} 
      light={light} 
      key={index}/>
    )
  )
  return (
    <div id="traffic-lights">
      {bulbs}
      {/* <div 
        className="bulb" 
        id="stopLight" 
        style={{background: light.id === "stop" ? 'red' : 'black'}}
      ></div>
      <div 
        className="bulb" 
        id="slowLight" 
        style={{background: light.id === "slow" ? 'yellow' : 'black'}}
      ></div>
      <div 
        className="bulb" 
        id="goLight" 
        style={{background: light.id === "go" ? 'green' : 'black'}}
      ></div> */}
    </div>
  )
}

export default TrafficLight