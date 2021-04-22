import React from 'react'

const Bulb = ({data, light}) => {
  return (
    <div 
        className="bulb" 
        id={data.id + "Light"} 
        style={{background: light.id === data.id ? light.color : 'black'}}
  ></div>
  )
}

export default Bulb