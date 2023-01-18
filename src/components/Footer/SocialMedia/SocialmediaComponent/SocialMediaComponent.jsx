import React from "react";
import "./SocialMediaComponent.module.css";

function SocialMediaComponent ({icon, alt}) {
  return (
    <a href="my-app/src/components/Footer/SocialMedia/SocialmediaComponent#"><img src={icon} alt={alt}/></a>
  )
}

export default SocialMediaComponent;