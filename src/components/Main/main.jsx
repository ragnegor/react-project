import React from "react";
import "./main.module.css";
import SectionAboutDesigner from "./Section-about-designer/SectionAboutDesigner";
import SectionsSkills from "./SectionSkils/SectionsSkils";
import SectionPortfolio from "./SectionPortfolio/SectionPortfolio";



function Main (props) {
  return (
    <main>
      <SectionAboutDesigner data={props.data}/>
      <SectionsSkills data={props.data}/>
      <SectionPortfolio data={props.data}/>
    </main>
  )
}

export default Main;