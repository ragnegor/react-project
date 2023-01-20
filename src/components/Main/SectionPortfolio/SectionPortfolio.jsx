import React from "react";
import style from "./SectionPortfolio.module.css";
import PortfolioItems from "./PortfoliItems/PortfolioItems";
import common from "../../../common/common.module.css";

function SectionPortfolio(props) {
  return (
    <div id="SectionPortfolio" className={style.sectionPortfolio}>
      <div className={common.container}>
        <h2 className={style.header}>{props.data.sectionPortfolio.header}</h2>
        <PortfolioItems data={props.data}/>
      </div>

    </div>
  )
}

export default SectionPortfolio;