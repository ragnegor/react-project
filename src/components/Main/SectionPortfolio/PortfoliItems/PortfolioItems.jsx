import React from "react";
import style from "./PortfolioItems.module.css";
import PortfolioComponent from "./PortfolioComponent/PortfolioComponent";





function PortfolioItems (props) {
  return (
    <div className={style.portfolioItems}>
      <PortfolioComponent picture={props.data.sectionPortfolio.portfolioItems.item1.picture} alt={props.data.sectionPortfolio.portfolioItems.item1.alt} text={props.data.sectionPortfolio.portfolioItems.item1.text}/>
      <PortfolioComponent picture={props.data.sectionPortfolio.portfolioItems.item2.picture} alt={props.data.sectionPortfolio.portfolioItems.item2.alt} text={props.data.sectionPortfolio.portfolioItems.item2.text}/>
      <PortfolioComponent picture={props.data.sectionPortfolio.portfolioItems.item3.picture} alt={props.data.sectionPortfolio.portfolioItems.item3.alt} text={props.data.sectionPortfolio.portfolioItems.item3.text}/>
    </div>
  )
}

export default PortfolioItems;