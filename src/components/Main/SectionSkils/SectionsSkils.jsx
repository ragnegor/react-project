import React from "react";
import style from "./SectionsSkils.module.css";
import SkillsItems from "./SkillsItems/SkillsItems";
import common from "../../../common/common.module.css";


function SectionsSkills() {
  return (
    <section id="SectionsSkills" className={style.sectionSkills}>
      <div className={common.container}>
        <div className={style.header}>Skills</div>
        <p className={style.subHeader}>I work in such programs as</p>
        <SkillsItems/>
      </div>
    </section>
  )
}

export default SectionsSkills;