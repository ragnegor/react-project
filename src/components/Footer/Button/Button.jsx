import React from "react";
import style from "./Button.module.css";


function Button ({text}) {
  return(
    <button className={style.btn}>{text}</button>
  )
}

export default Button;