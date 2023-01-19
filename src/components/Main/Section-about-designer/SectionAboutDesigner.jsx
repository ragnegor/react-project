import React from "react";
import InfoAboutDesigner from "./InfoAboutDesigner/InfoAboutDesigner";
import style from "./SectionAboutDesigner.module.css";
import common from "../../../common/common.module.css";

function SectionAboutDesigner() {
  return (
    <section id="Section-about-designer" className={style.SectionAboutDesigner}>
      <div className={common.container}>
        <InfoAboutDesigner/>
      </div>
    </section>
  )
}

export default SectionAboutDesigner;

