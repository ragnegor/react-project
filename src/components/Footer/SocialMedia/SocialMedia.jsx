import React from "react";
import style from "./SocialMedia.module.css"
import SocialMediaComponent from "./SocialmediaComponent/SocialMediaComponent";
import linkedlnIcon from "../../../assets/img/icons/social-media/linkedln.svg";
import instagramIcon from "../../../assets/img/icons/social-media/instagram.svg";
import behanceIcon from "../../../assets/img/icons/social-media/behance.svg";
import dribble from "../../../assets/img/icons/social-media/dribble.svg";


function SocialMedia () {
  return(
    <div className={style.socialMedia}>
      <SocialMediaComponent icon={linkedlnIcon} alt={"linkedln.icon"}/>
      <SocialMediaComponent icon={instagramIcon} alt={"instagram.icon"}/>
      <SocialMediaComponent icon={behanceIcon} alt={"behance.icon"}/>
      <SocialMediaComponent icon={dribble} alt={"dribble.icon"}/>
    </div>
  )
}

export default SocialMedia;