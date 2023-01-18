import React from "react";
import style from "./short-info.module.css";

function ShortInfo () {
  return (
    <div className={style.shortInfo}>
      <h1 className={style.name}>Denis<br/>Novik</h1>
      <p className={style.info}>UX | UI designer<br/>24 years old, Minsk</p>
      <ol className={style.languages} >
        <li><a href="my-app/src/components/Header/short-info#">RU</a></li>
        <li>|</li>
        <li><a href="my-app/src/components/Header/short-info#">ENG</a></li>
      </ol>
    </div>
  )
}

export default ShortInfo;