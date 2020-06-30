import CanvasJSReact from '../../lib/canvasjs.react';


import React from 'react'

export default function StatsChart2(props) {
    const pokemonStatData = props.data.map(stat => ({ label: stat.stat.name, y: stat.base_stat}))

    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        title: {
          text: "Stats"
        },
        animationEnabled: true, 
        data: [{				
                  type: "column",
                  dataPoints: pokemonStatData
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options={options} />
        </div>
      );
}



