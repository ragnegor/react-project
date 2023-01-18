import React from "react";
import Container from "../../Container/Container";
import style from "./SectionPortfolio.module.css";
import PortfolioItems from "./PortfoliItems/PortfolioItems";

function SectionPortfolio () {
  return (
    <div id="SectionPortfolio" className={style.sectionPortfolio}>
      <Container>
        <h2 className={style.header}>Portfolio</h2>
        <PortfolioItems/>
      </Container>
    </div>
  )
}

export default SectionPortfolio;