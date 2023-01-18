import React from "react";
import Container from "../Container/Container";
import style from "./Footer.module.css";
import Button from "./Button/Button";
import SocialMedia from "./SocialMedia/SocialMedia";


function Footer () {
  return(
    <footer id="Contacts">
      <Container>
        <h2>Contacts</h2>
        <p className={style.subheader}>Want to know more or just chat?<br/>You are welcome!</p>
        <Button text={"Send message"}/>
        <SocialMedia/>
        <p className={style.media}>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
      </Container>
    </footer>
  )
}

export default Footer;