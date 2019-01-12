import React, { Component } from 'react'
// import styles from './App.module.scss'
import SubHeader from '../Subheader/subheader';
import Chart from '../Chart/chart';
import ListCandidate from './../ListCandidate/listCandidate';

class App extends Component {
  render() {
    return (
      <main>
        <SubHeader />
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <Chart />
            </div>
            <div className="col-12 col-md-4">
              <ListCandidate />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
