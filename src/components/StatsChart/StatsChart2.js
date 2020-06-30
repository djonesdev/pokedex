import React from 'react'

import CanvasJSReact from '../../lib/canvasjs.react'

export default function StatsChart2(props) {
    const pokemonStatData = props.data.map(stat => ({ label: stat.stat.name, y: stat.base_stat}))
    const CanvasJSChart = CanvasJSReact.CanvasJSChart
    const options = {
        title: {
          text: "Stats"
        },
        data: [{				
                  type: "column",
                  dataPoints: pokemonStatData
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options={options} />
        </div>
      )
}



