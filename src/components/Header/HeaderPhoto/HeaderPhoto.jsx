import React from "react";
import photo from "../../../assets/img/header-photo.svg";
import style from "./HeaderPhoto.module.css"

function HeaderPhoto () {
  return (
   <img className={style.photo} src={photo} alt="designer_photo"/>
  )
}

export default HeaderPhoto;