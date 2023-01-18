import React from "react";


function NavigationItem ({link, label }) {
  return (
    <li><a href={link}>{label}</a></li>
  )
}

export default NavigationItem;