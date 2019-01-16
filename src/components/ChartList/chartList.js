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

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
}

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
    }

    projection() {
        return geoMercator()
            .center([-42.5,-22.2])
            // .center([-43,-22])
            .scale(9700)
    }

    componentDidMount() {

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
