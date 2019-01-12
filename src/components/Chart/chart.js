import React, { Component } from 'react';
import styles from './chart.module.scss';

class Chart extends Component {

  componentDidMount() {
    console.log("styles ", styles);
  }

  render() {
    return (
      <section>
        Grafico
      </section>
    )
  }
}

Chart.defaultProps = {}

export default Chart
