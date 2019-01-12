import React, { Component } from 'react';
import styles from './candidateCard.module.scss';

class CandidateCard extends Component {

  componentDidMount() {
    console.log("styles ", styles);

  }

  render() {
    return (
      <section>
        <span className={styles.selectCandidate}>{this.props.selectCandidateText}</span>
      </section>
    )
  }
}

CandidateCard.defaultProps = {
  selectCandidateText: "Escolha a cidade para ver a lista de candidatos"
}

export default CandidateCard;
