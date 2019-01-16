import React, { Component } from 'react';
import styles from './listCadidate.module.scss';
import CandidateCard from './CandidateCard/candidateCard';

class ListCandidate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      county: [],
      actualCounty: {},
      countyReceived: 0
    }
  }

 
  
  componentDidMount() {
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
        response.json().then(countyData => {
          if (this.state.countyReceived !== 0) {
            this.setState((prevState, props) => ({
              county: countyData.collection[props.selectedCounty].candidatos,
            }));
          }
        })
      })
  }


  componentWillReceiveProps() {
    this.setState({
      countyReceived: this.props.selectedCounty
    })

    console.log("this.state.countyReceived ", this.state.countyReceived);
  }

  render() {
    return (
      <section className={styles.listCandidate}>
        <span className={styles.listCandidate__title}>{this.props.titleLista}</span>
        {this.state.county.map((c, i) =>
          <CandidateCard key={i} candidato={c} idMunicipio={this.state.countyReceived} />
        )}
      </section>
    )
  }
}

ListCandidate.defaultProps = {
  titleLista: "Candidatos"
}

export default ListCandidate
