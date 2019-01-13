import React, { Component } from 'react';
import styles from './candidateCard.module.scss';

class CandidateCard extends Component {

  componentDidMount() {
    console.log("styles ", styles);
  }

  render() {
    return (
      <section className={styles.candidateCard}>
        <div className={`row ${styles.cardPadding}`}>
          <div className="col-2 col-md-3">
            <div className={styles.candidateImage}></div>
          </div>
          <div className="col-6 col-md-5">
            <span className={styles.candidateName}>
              Nome do cadidato
            </span>
            <span className={`d-flex align-items-center ${styles.candidatePoliticalParty}`}>
              LO <div className={styles.candidateStatusTag}>2° turno</div>
            </span>
            <div className={styles.candidateVotesBar}>
              <div style={{ backgroundColor: "red", width: "50%", height: "100%" }}></div>
            </div>
          </div>
          <div className="col-4 col-md-4 text-center">
            <span className={styles.cadidateVotesPercent}>
              12,34%
            </span>
            <span className={styles.cadidateTotalVotes}>
              123.345,90<br />votos
            </span>
          </div>
        </div>
        {/* <span className={styles.selectCandidate}>{this.props.selectCandidateText}</span> */}
      </section>
    )
  }
}

CandidateCard.defaultProps = {
  selectCandidateText: "Escolha a cidade para ver a lista de candidatos"
}

export default CandidateCard;
