import React, { Component } from 'react';
import styles from './candidateCard.module.scss';

class CandidateCard extends Component {

  constructor() {
    super()
    this.formatarPercentual = this.formatarPercentual.bind(this)
  }

  componentDidMount() { }

  formatarPercentual(percentual) {
    let percentualFormatado = percentual.replace(",", ".")
    return percentualFormatado;
  }

  render() {
    return (
      <section className={styles.candidateCard}>

        {this.props.idMunicipio === 0 ? (
          <span className={styles.selectCandidate}>{this.props.selectCandidateText}</span>
        ) : (
            <div className={`d-flex ${styles.card}`}>
              <div className="col-2 col-md-3">
                <div className={styles.candidateImage}></div>
              </div>
              <div className="col-6 col-md-5">
                <span className={styles.candidateName}>
                  {this.props.candidato.nome_candidato}
                </span>
                <span className={`d-flex align-items-center ${styles.candidatePoliticalParty}`}>
                  {this.props.candidato.sigla_partido} <div className={styles.candidateStatusTag}>{this.props.candidato.eleito === true ? "eleito" : "2° turno"}</div>
                </span>
                <div className={styles.candidateVotesBar}>
                  <div style={{ backgroundColor: this.props.candidato.cor_partido, width: this.formatarPercentual(this.props.candidato.total_percentual), height: "100%" }}></div>
                </div>
              </div>
              <div className="col-4 col-md-4 text-center">
                <span className={styles.cadidateVotesPercent}>
                  {this.props.candidato.total_percentual}
                </span>
                <span className={styles.cadidateTotalVotes}>
                  {this.props.candidato.total_votos_validos}<br />votos
                </span>
              </div>
            </div>
          )}

      </section>
    )
  }
}

CandidateCard.defaultProps = {
  selectCandidateText: "Escolha a cidade para ver a lista de candidatos"
}

export default CandidateCard;
