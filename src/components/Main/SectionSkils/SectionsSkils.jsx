import React from "react";
import style from "./SectionsSkils.module.css";
import Container from "../../Container/Container";
import SkillsItems from "./SkillsItems/SkillsItems";


function SectionsSkills () {
  return (
    <section id="SectionsSkills" className={style.sectionSkills}>
      <Container>
        <div className={style.header}>Skills</div>
        <p className={style.subHeader}>I work in such programs as</p>
        <SkillsItems/>
      </Container>
    </section>
  )
}

export default SectionsSkills;