import React from "react";
import style from "./SkillsItems.module.css";
import Skill from "./Skill/Skill";


function SkillsItems (props) {
  return (
    <div className={style.skillsItems}>
      <Skill link={props.data.sectionSkills.SkillsItems.skill1.link} icon={props.data.sectionSkills.SkillsItems.skill1.icon} alt={props.data.sectionSkills.SkillsItems.skill1.alt} title={props.data.sectionSkills.SkillsItems.skill1.title} quantityStars={4}/>
      <Skill link={props.data.sectionSkills.SkillsItems.skill2.link} icon={props.data.sectionSkills.SkillsItems.skill2.icon} alt={props.data.sectionSkills.SkillsItems.skill2.alt} title={props.data.sectionSkills.SkillsItems.skill2.title} quantityStars={3}/>
      <Skill link={props.data.sectionSkills.SkillsItems.skill3.link} icon={props.data.sectionSkills.SkillsItems.skill3.icon} alt={props.data.sectionSkills.SkillsItems.skill3.alt} title={props.data.sectionSkills.SkillsItems.skill3.title} quantityStars={4}/>
      <Skill link={props.data.sectionSkills.SkillsItems.skill4.link} icon={props.data.sectionSkills.SkillsItems.skill4.icon} alt={props.data.sectionSkills.SkillsItems.skill4.alt} title={props.data.sectionSkills.SkillsItems.skill4.title} quantityStars={4}/>
    </div>
  )
}

export default SkillsItems;

