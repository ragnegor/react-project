import React from "react";
import style from "./HeaderPhoto.module.css"

function HeaderPhoto (props) {
  return (
   <img className={style.photo} src={props.data.header.shortInfo.picture} alt={props.data.header.shortInfo.alt}/>
  )
}

export default HeaderPhoto;