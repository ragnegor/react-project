import React from "react";
import style from "./short-info.module.css";

function ShortInfo (props) {
  return (
    <div className={style.shortInfo}>
      <h1 className={style.name}>{props.data.header.shortInfo.name}<br/>{props.data.header.shortInfo.surname}</h1>
      <p className={style.info}>{props.data.header.shortInfo.profession}<br/>{props.data.header.shortInfo.age}</p>
      <ol className={style.languages} >
        <li><a href="my-app/src/components/Header/short-info#">{props.data.header.shortInfo.langru}</a></li>
        <li>|</li>
        <li><a href="my-app/src/components/Header/short-info#">{props.data.header.shortInfo.lengEng}</a></li>
      </ol>
    </div>
  )
}

export default ShortInfo;