import React from 'react';
import {pack,select,hierarchy,sum,scaleOrdinal} from 'd3';
import {formatLocale} from 'd3-format';
import {schemeCategory20c,schemeCategory20} from 'd3-scale';
import {connect} from 'react-redux';
import styles from '../../styles/chart.css'

export default class BubbleChart extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.planets == 'object') {
      select("svg").remove();
      this.createChart(nextProps.planets);
    }
}
  render () {
    return <div id="chart" className={styles.chart}></div>
  }

  createChart(planets){
    var dataset = {
        "children": []
    };
    var planets = planets.map((planet) => {
      planet.population = planet.population == 'unknown'? 0:parseInt(planet.population)

      return planet;
    })
    var totalPopulation = planets.reduce((sum,obj) => {return sum+parseInt(obj.population)},0);
    planets = planets.map((planet) => {
        planet.population = ((planet.population/totalPopulation)*100).toFixed(2);

      return planet;
    })

    dataset.children = planets;
    var diameter = 400;
     var color = scaleOrdinal(schemeCategory20);
      var colors = ['#99C1DB','#FB9892','#BD93AB','#BAE57D','#FDC47E']
     var bubble = pack(dataset)
             .size([diameter, diameter])
             .padding(1.5);
     var svg = select("#chart")
             .append("svg")
             .attr("width", 1000)
             .attr("height", diameter)
             .attr("class", "bubble");

     var nodes = hierarchy(dataset)
             .sum(function(d) { return d.population; });

     var node = svg.selectAll(".node")
             .data(bubble(nodes).descendants())
             .enter()
             .filter(function(d){
                 return  !d.children
             })
             .append("g")
             .attr("class", "node")
             .attr("transform", function(d) {
                 return "translate(" + d.x + "," + d.y + ")";
             })
             

     node.append("title")
             .text(function(d) {
                 return d.name + ": " + d.population;
             });

     node.append("circle")
             .attr("r", function(d) {
               console.log(d.r);
                 return d.r;
             })
             .style("fill", function(d) {
                 return colors[Math.floor(Math.random() * colors.length)];
             });

     node.append("text")
             .attr("dy", ".3em")
             .attr("fill", "white")
             .style("text-anchor", "middle")
             .text(function(d) {
                 return d.data.name.substring(0, d.r / 3) + ": " + d.data.population;
             });

     select(self.frameElement)
             .style("height", diameter + "px");  }

}
//https://jsfiddle.net/r24e8xd7/9/
