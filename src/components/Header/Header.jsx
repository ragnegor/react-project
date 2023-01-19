import React from "react";
import style from "./header.module.css";
import Navigation from "./Navigation/Navigation";
import ShortInfo from "./short-info/short-info";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";
import common from "../../common/common.module.css";


function Header () {
  return (
    <header>
      <div className={common.container}>
        <Navigation/>
        <ShortInfo/>
        <HeaderPhoto/>
      </div>
    </header>
  )
}

export default Header;