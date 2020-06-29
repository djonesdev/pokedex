import React from 'react';
import * as d3 from 'd3';

import './StatsChart.css'

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
       }
        
        componentDidMount() {                
          console.log(this.props.data, 'data')
            const chartWidth = 500;
            const chartHeight = 300;
        
            const svg = d3.select("body")
                          .append("svg")
                          .attr("width", chartWidth)
                          .attr("height", chartHeight);

                          const padding = 1;

                          const xScale = d3.scaleLinear()
                                           .domain([0, d3.max(this.props.data, (d) => d[0])])
                                           .range([padding, chartWidth - 200]);
                      
                          const yScale = d3.scaleLinear()
                                           .domain([0, d3.max(this.props.data, (d) => d[1])])
                                           .range([chartHeight - padding, padding]);
        
            svg.selectAll("rect")
               .data(this.props.data)
               .enter()
               .append("rect")
               .attr("x", (d, i) => i * 30)
               .attr("y", (dataPoint, index) => {
                    return chartHeight - 3 * dataPoint
               })
               .attr("width", 25)
               .attr("height", (d, i) => {
                return d * 3
               })
                .attr('fill', 'blue')
                

               svg.selectAll("text")
               .data(this.props.data)
               .enter()
                .append('text')
                .attr("x", (d, i) => i * 30)
               .attr("y", (d, i) => chartHeight - 3 * d - 3)
               .text((d) => d)

               svg.selectAll("text")
               .data(this.props.data)
               .enter()
                .append('text')
                .attr("x", (d, i) => i * 30)
               .attr("y", (d, i) => chartHeight - d)
               .text((d) => 'attack')

               const xAxis = d3.axisBottom(xScale);
    
               const yAxis = d3.axisLeft(yScale);

            //    svg.selectAll("text")
            //     .data(this.props.data)
            //     .enter()
            //     .append("text")
            //     .text((d) =>  (d[0] + "," + d[1]))
            //     .attr("x", (d) => xScale(d[0] + 10))
            //     .attr("y", (d) => yScale(d[1]))
               
               svg.append("g")
                  .attr("transform", "translate(0," + (chartHeight - padding) + ")")
                  .call(xAxis);
               svg.append("g")
                  .attr("transform", "translate(" + padding + ",0)")
                  .call(yAxis)
        }   

        componentWillUnmount() {
            d3.select("svg").remove()
        }
          
        render() {
            const styles = {
              container: {
                // display: "grid",
                // justifyItems: "center",
                // marginl: 50
              }
            }    
            
            return (
                <div ref="chart" style={styles.container}>
                
                </div>
           )
        }
}

export default BarChart