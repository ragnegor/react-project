import React from "react";
import InfoAboutDesigner from "./InfoAboutDesigner/InfoAboutDesigner";
import Container from "../../Container/Container";
import style from "./SectionAboutDesigner.module.css"

function SectionAboutDesigner () {
  return (
    <section id = "Section-about-designer" className={style.SectionAboutDesigner}>
      <Container>
        <InfoAboutDesigner/>
      </Container>
    </section>
  )
}

export default SectionAboutDesigner;

