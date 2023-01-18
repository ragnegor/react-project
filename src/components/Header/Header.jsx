import React from "react";
import Container from "../Container/Container";
import "./header.module.css";
import Navigation from "./Navigation/Navigation";
import ShortInfo from "./short-info/short-info";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";


function Header () {
  return (
    <header>
      <Container>
        <Navigation/>
        <ShortInfo/>
        <HeaderPhoto/>
      </Container>
    </header>
  )
}

export default Header;