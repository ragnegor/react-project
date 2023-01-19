import React from "react";
import style from "./Footer.module.css";
import Button from "./Button/Button";
import SocialMedia from "./SocialMedia/SocialMedia";
import common from "../../common/common.module.css";

function Footer() {
  return (
    <footer id="Contacts">
      <div className={common.container}>
        <h2>Contacts</h2>
        <p className={style.subheader}>Want to know more or just chat?<br/>You are welcome!</p>
        <Button text={"Send message"}/>
        <SocialMedia/>
        <p className={style.media}>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
      </div>
    </footer>
  )
}

export default Footer;