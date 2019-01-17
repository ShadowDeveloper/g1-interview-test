import React, { Component } from 'react';
import * as topojson from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import ListCandidate from './../ListCandidate/listCandidate';
import styles from './chartList.module.scss';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"

class ChartList extends Component {
    constructor() {
        super()
        this.state = {
            rioData: [],
            idCounty: "3300100",
            candidatesCountyData: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState({ idCounty: id });
        console.log(this.state.idCounty);
    }

    projection() {
        return geoMercator()
            .center([-42.5, -22.2])
            // .center([-43,-22])
            .scale(9700)
    }

    getMapData() {
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
                        rioData: topojson.feature(rioData, rioData.objects.collection).features,
                    })
                })
            })
    }

    getCandidatesCountyData() {
        fetch('data/data.json',
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
                response.json().then(data => {
                    this.setState({
                        candidatesCountyData: data
                    })

                    this.state.rioData.map(c => {
                        c.properties.candidato = this.state.candidatesCountyData.municipios[c.properties.id].candidatos[0];
                    })
                })
            })
    }

    componentDidMount() {
        this.getMapData();
        this.getCandidatesCountyData();
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
                                            className={styles.municipio}
                                            fill={`rgba(38,50,56,${1 / this.state.rioData.length * i})`}
                                            // teste={d.properties.candidato}
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
                    <ListCandidate selectedCounty={this.state.idCounty} />
                </div>
            </div>
        )
    }
}

ChartList.defaultProps = {
    title: "Grafico do estado do rio de janeiro"
}

export default ChartList
