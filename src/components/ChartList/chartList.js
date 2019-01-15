import React, { Component } from 'react';
import * as topojson from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import ListCandidate from './../ListCandidate/listCandidate';
import styles from './chartList.module.scss';

class ChartList extends Component {
    constructor() {
        super()
        this.state = {
            rioData: [],
            idCounty: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState({ idCounty: id });
        console.log("this.state.idCounty ", this.state.idCounty);
    }

    projection() {
        return geoMercator()
            .center([0, 0])
            .scale(100)
            .translate([800 / 2, 450 / 2])
    }

    componentDidMount() {

        console.log(styles);

        fetch('data/RJ.json',
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
                        rioData: topojson.feature(rioData, rioData.objects.municipios).features,
                    })
                })
            })

    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className={styles.chartContainer}>
                        <svg width="100%" height={450} viewBox="0 0 800 450">
                            <g className="countries">
                                {
                                    this.state.rioData.map((d, i) => (
                                        <path
                                            key={`path-${i}`}
                                            d={geoPath().projection(this.projection())(d)}
                                            className="municipio"
                                            fill={`rgba(38,50,56,${1 / this.state.rioData.length * i})`}
                                            stroke="#000"
                                            strokeWidth={0.5}
                                            onClick={() => this.handleClick(d.properties.id)}
                                        />
                                    ))
                                }
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <ListCandidate selectedCounty="3305901" />
                </div>
            </div>
        )
    }
}

ChartList.defaultProps = {
    title: "Grafico do estado do rio de janeiro"
}

export default ChartList
