import React from "react";
import style from "./SocialMedia.module.css"
import SocialMediaComponent from "./SocialmediaComponent/SocialMediaComponent";



function SocialMedia (props) {
  return(
    <div className={style.socialMedia}>
      <SocialMediaComponent icon={props.data.footer.socMedia.item1.icon} alt={props.data.footer.socMedia.item1.alt}/>
      <SocialMediaComponent icon={props.data.footer.socMedia.item2.icon} alt={props.data.footer.socMedia.item2.alt}/>
      <SocialMediaComponent icon={props.data.footer.socMedia.item3.icon} alt={props.data.footer.socMedia.item3.alt}/>
      <SocialMediaComponent icon={props.data.footer.socMedia.item4.icon} alt={props.data.footer.socMedia.item4.alt}/>
    </div>
  )
}

export default SocialMedia;