import React, { Component } from 'react';
import styles from './chart.module.scss';
import * as d3 from 'd3';
import * as topojson from "topojson-client";
import { geoMercator, geoPath } from "d3-geo"

class Chart extends Component {
  constructor() {
    super()
    this.state = {
      rioData: [],
    }
  }
  projection() {
    return geoMercator()
      .center([0, 0])
      .scale(100)
      .translate([800 / 2, 450 / 2])
  }
  componentDidMount() {
    // fetch('data/RJ.json',
    fetch('data/baseMap.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(rioData => {
          this.setState({
            rioData: topojson.feature(rioData, rioData.objects.counties).features,
            // rioData: topojson.feature(rioData, rioData.objects.collection).features,
          })



          // svg.append("g")
          //     .attr("class", "counties")
          //     .selectAll("path")
          //     .data(this.state.rioData)
          //     .enter().append("path")
          //     .attr("d", path);

          // svg.append("path")
          //     .attr("class", "county-borders")
          //     .attr("fill", "#000")


          console.log(rioData)
          // this.projection(rioData.transform.scale, rioData.transform.translate)

          // svg.selectAll("path")
          //     .data(this.state.rioData)
          //     .enter().append("path")
          //     .attr("d", path);
        })
      })

  }

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div className="chart-container">
          <svg width={800} height={450} viewBox="0 0 800 450">
            <g className="countries">
              {
                this.state.rioData.map((d, i) => (
                  <path
                    key={`path-${i}`}
                    d={geoPath().projection(this.projection())(d)}
                    className="country"
                    fill={`rgba(38,50,56,${1 / this.state.rioData.length * i})`}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                  />
                ))
              }
            </g>
          </svg>
        </div>
      </section>
    )
  }
}

Chart.defaultProps = {
  title: "Grafico do estado do rio de janeiro"
}

export default Chart
