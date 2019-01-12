import React, { Component } from 'react';
import styles from './candidateCard.scss';

class CandidateCard extends Component {

  componentDidMount() {
    console.log("styles ", styles);

  }

  render() {
    return (
      <section>
        Card de Candidatos
      </section>
    )
  }
}

CandidateCard.defaultProps = {
}

export default CandidateCard;
