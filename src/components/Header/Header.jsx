import React from "react";
import "./header.module.css";
import Navigation from "./Navigation/Navigation";
import ShortInfo from "./short-info/short-info";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";
import common from "../../common/common.module.css";



function Header (props) {
  return (
    <header>
      <div className={common.container}>
        <Navigation data={props.data}/>
        <ShortInfo data={props.data}/>
        <HeaderPhoto data={props.data}/>
      </div>
    </header>
  )
}

export default Header;