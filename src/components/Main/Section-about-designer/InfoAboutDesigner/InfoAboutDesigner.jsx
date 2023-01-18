import React from "react";
import style from "./InfoAboutDesigner.module.css";

function InfoAboutDesigner () {
  return (
    <div>
      <h2 className={style.header}>About me</h2>
      <div className={style.info}>
        <p>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.</p>
        <p>I'm studying at courses "Web and mobile design<br/>interfaces" in IT-Academy.</p>
        <p>Ready to implement excellent projects<br/>with wonderful people.</p>
      </div>
    </div>
  )
}

export default InfoAboutDesigner;