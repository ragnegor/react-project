import React from "react";
import style from "./InfoAboutDesigner.module.css";


function InfoAboutDesigner (props) {
  return (
    <div className="container">
      <h2 className={style.header}>{props.data.sectionAboutdesigner.header}</h2>
      <div className={style.info}>
        <p>{props.data.sectionAboutdesigner.info1}</p>
        <p>{props.data.sectionAboutdesigner.info2}</p>
        <p>{props.data.sectionAboutdesigner.info3}</p>
      </div>
    </div>
  )
}

export default InfoAboutDesigner;