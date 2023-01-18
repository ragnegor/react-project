import React from "react";
import style from "./PortfolioItems.module.css";
import PortfolioComponent from "./PortfolioComponent/PortfolioComponent";
import fashionPic from "../../../../assets/img/portfilio/fashion_web.svg";
import reebokPic from "../../../../assets/img/portfilio/reebok_web.svg";
import braunPic from "../../../../assets/img/portfilio/braun_web.svg";




function PortfolioItems () {
  return (
    <div className={style.portfolioItems}>
      <PortfolioComponent picture={fashionPic} alt={"fashionPic.img"} text={"Online fashion store - Homepage"}/>
      <PortfolioComponent picture={reebokPic} alt={"reebokPic.img"} text={"Reebok Store - Concept"}/>
      <PortfolioComponent picture={braunPic} alt={"braunPic.img"} text={"Braun Landing Page - Concept"}/>
    </div>
  )
}

export default PortfolioItems;