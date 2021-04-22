import React, { useState } from "react";
import bulbData from "./bulbData";
import TrafficLight from "./TrafficLight";

// console.log('App-bulbData',bulbData)

export default function App() {
  const [bulbOn, setBulbOn] = useState({id: 'bulb', color: 'black'})
  // console.log('App-bulbOn', bulbOn)

  const handleControl = (bulb) => {
    setBulbOn(bulb)
  }

  const controlPanel = bulbData.map((bulb, index) => (
    <h2
      onClick={() => handleControl(bulb)}
      // onClick={() => setBulbOn(bulb)}
      className="button"
      id={bulb.id}
      key={index}
    >
      {bulb.id[0].toUpperCase() + bulb.id.substr(1)}
    </h2>
  ));



	return (
		<div className="App">
			<h1>Traffic Light</h1>
			<section>
				<div id="control-panel">
          {controlPanel}
				</div>
        <TrafficLight 
          data={bulbData} 
          light={bulbOn}
        />
			</section>
		</div>
	);
}
