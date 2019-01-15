import React, { Component } from 'react'
import SubHeader from '../Subheader/subheader';
import ChartList from '../ChartList/chartList';

class App extends Component {
  render() {
    return (
      <main>
        <SubHeader />
        <section className="container">
          <ChartList />
        </section>
      </main>
    )
  }
}

export default App
