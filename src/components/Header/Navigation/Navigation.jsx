import React from "react";
import style from "./Navigation.module.css";



function Navigation (props) {
  return (
    <nav>
      <ol>
        <li><a href={props.data.header.navigation.link1.link}>{props.data.header.navigation.link1.label}</a></li>
        <li><a href={props.data.header.navigation.link2.link}>{props.data.header.navigation.link2.label}</a></li>
        <li><a href={props.data.header.navigation.link3.link}>{props.data.header.navigation.link3.label}</a></li>
        <li><a href={props.data.header.navigation.link4.link}>{props.data.header.navigation.link4.label}</a></li>
        <li><a href={props.data.header.navigation.link5.link}>{props.data.header.navigation.link5.label}</a></li>
      </ol>
      <div className={style.line}/>
    </nav>
  )
}

export default Navigation;