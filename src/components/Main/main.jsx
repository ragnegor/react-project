import React from "react";
import "./main.module.css";
import SectionAboutDesigner from "./Section-about-designer/SectionAboutDesigner";
import SectionsSkills from "./SectionSkils/SectionsSkils";
import SectionPortfolio from "./SectionPortfolio/SectionPortfolio";


function Main () {
  return (
    <main>
      <SectionAboutDesigner/>
      <SectionsSkills/>
      <SectionPortfolio/>
    </main>
  )
}

export default Main;