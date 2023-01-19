import React from "react";
import style from "./SectionPortfolio.module.css";
import PortfolioItems from "./PortfoliItems/PortfolioItems";
import common from "../../../common/common.module.css";

function SectionPortfolio() {
  return (
    <div id="SectionPortfolio" className={style.sectionPortfolio}>
      <div className={common.container}>
        <h2 className={style.header}>Portfolio</h2>
        <PortfolioItems/>
      </div>

    </div>
  )
}

export default SectionPortfolio;