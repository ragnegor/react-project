import React from "react";
import style from "./Footer.module.css";
import Button from "./Button/Button";
import SocialMedia from "./SocialMedia/SocialMedia";
import common from "../../common/common.module.css";

function Footer(props) {
  return (
    <footer id="Contacts">
      <div className={common.container}>
        <h2>{props.data.footer.header}</h2>
        <p className={style.subheader}>{props.data.footer.subheader}</p>
        <Button text={"Send message"}/>
        <SocialMedia data={props.data}/>
        <p className={style.media}>{props.data.footer.description}</p>
      </div>
    </footer>
  )
}

export default Footer;