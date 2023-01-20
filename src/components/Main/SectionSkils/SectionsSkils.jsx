import React from "react";
import style from "./SectionsSkils.module.css";
import SkillsItems from "./SkillsItems/SkillsItems";
import common from "../../../common/common.module.css";


function SectionsSkills(props) {
  return (
    <section id="SectionsSkills" className={style.sectionSkills}>
      <div className={common.container}>
        <div className={style.header}>{props.data.sectionSkills.header}</div>
        <p className={style.subHeader}>{props.data.sectionSkills.subheader}</p>
        <SkillsItems data={props.data}/>
      </div>
    </section>
  )
}

export default SectionsSkills;