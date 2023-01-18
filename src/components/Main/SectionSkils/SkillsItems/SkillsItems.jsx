import React from "react";
import style from "./SkillsItems.module.css";
import Skill from "./Skill/Skill";
import adobePh from "../../../../assets/img/icons/adobe-photoshop.svg";
import adobeIllustration from "../../../../assets/img/icons/adobe-illustration.svg";
import aEffect from "../../../../assets/img/icons/adobe-a-effects.svg";
import figma from "../../../../assets/img/icons/figma.svg";


function SkillsItems () {
  return (
    <div className={style.skillsItems}>
      <Skill link={"#"} icon={adobePh} alt={"adobePh.icon"} title={"Adobe\nPhotoshop"} quantityStars={4}/>
      <Skill link={"#"} icon={adobeIllustration} alt={"adobeIllustration.icon"} title={"Adobe\nIllustration"} quantityStars={3}/>
      <Skill link={"#"} icon={aEffect} alt={"aEffect.icon"} title={"Adobe\nAfter Effects"} quantityStars={4}/>
      <Skill link={"#"} icon={figma} alt={"figma.icon"} title={"Figma"} quantityStars={4}/>
    </div>
  )
}

export default SkillsItems;

