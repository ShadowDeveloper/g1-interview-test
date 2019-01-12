import React, { Component } from 'react';
import styles from './listCadidate.module.scss';
import CandidateCard from './CandidateCard/candidateCard';

class ListCandidate extends Component {

  componentDidMount() {
    console.log("styles ", styles);

  }

  render() {
    return (
      <section>
        Lista de Candidatos
        <CandidateCard />
      </section>
    )
  }
}

ListCandidate.defaultProps = {

}

export default ListCandidate
