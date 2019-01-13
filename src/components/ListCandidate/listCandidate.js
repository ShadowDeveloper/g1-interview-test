import React, { Component } from 'react';
import styles from './listCadidate.module.scss';
import CandidateCard from './CandidateCard/candidateCard';

class ListCandidate extends Component {

  componentDidMount() {}

  render() {
    return (
      <section className={styles.listCandidate}>
        <span className={styles.listCandidate__title}>{this.props.titleLista}</span>
        <CandidateCard />
      </section>
    )
  }
}

ListCandidate.defaultProps = {
  titleLista: "Candidatos"
}

export default ListCandidate
