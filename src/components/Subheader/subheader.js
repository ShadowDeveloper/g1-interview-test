import React, { Component } from 'react';
import styles from './subheader.module.scss';

class SubHeader extends Component {

  componentDidMount() {
    console.log("styles ", styles);

  }

  render() {
    return (
      <section>

        <div className={styles.subHeader}>
          <h1 className={styles.subHeader__title}>{this.props.title}</h1>
          <span className={styles.subHeader__subtitle}>{this.props.subTitle}</span>
        </div>

        <div className={styles.breadcrumb}>
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-3">
                <h3 className={styles.breadcrumb__title}>{this.props.breadcrumbTitle}</h3>
                <hr className={styles.breadcrumb__marker} />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <h3 className={styles.breadcrumb__subtitle}>{this.props.breadcrumbSubTitle}</h3>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

SubHeader.defaultProps = {
  title: "Mapa da apuração por estado",
  subTitle: "Veja os resultados da eleição em cada um dos estados",
  breadcrumbTitle: "Presidente",
  breadcrumbSubTitle: "Governador"
}

export default SubHeader
