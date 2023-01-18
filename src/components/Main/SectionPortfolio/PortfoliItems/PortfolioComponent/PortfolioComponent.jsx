import React from "react";
import style from "./PortfolioComponent.module.css";

function PortfolioComponent ({picture, alt, text}) {
  return (
    <div className={style.portfolioComponent}>
      <img src={picture} alt={alt}/>
      <a href={"#"}>{text}</a>
    </div>
  )
}

export default PortfolioComponent;