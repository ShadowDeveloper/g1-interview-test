import React, { Component } from 'react';
import styles from './listCadidate.module.scss';
import CandidateCard from './CandidateCard/candidateCard';

class ListCandidate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      county: [],
      idCounty: this.props.selectedCounty,
      actualCounty: {},
      candidatesCounty: [],
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

          this.setState((prevState, props) => ({
            county: countyData.municipios[props.selectedCounty].candidatos,
          }));

        })
      })
  }


  componentWillReceiveProps() {
    if (this.props.selectedCounty !== "") {
      this.setState({ candidate: this.state.county.candidatos });
    }
  }


  render() {
    return (
      <section className={styles.listCandidate}>
        <span className={styles.listCandidate__title}>{this.props.titleLista}</span>
        {this.state.county.map((c, i) =>
          <CandidateCard key={i} candidato={c} />
        )}
      </section>
    )
  }
}

ListCandidate.defaultProps = {
  titleLista: "Candidatos"
}

export default ListCandidate
