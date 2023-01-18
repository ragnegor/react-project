import React from "react";
import style from "./Navigation.module.css";
import NavigationItem from "./NavigationItem";


function Navigation () {
  return (
    <nav>
      <ol>
        <NavigationItem link={"#"} label={"Home"}/>
        <NavigationItem link={"#Section-about-designer"} label={"About me"}/>
        <NavigationItem link={"#SectionsSkills"} label={"Skills"}/>
        <NavigationItem link={"#SectionPortfolio"} label={"Portfolio"}/>
        <NavigationItem link={"#Contacts"} label={"Contacts"}/>
      </ol>
      <div className={style.line}/>
    </nav>
  )
}

export default Navigation;