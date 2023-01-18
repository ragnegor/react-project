import React from "react";
import style from "./Skill.module.css";
import StarBlack from "./Stars/StarBlack";
import StarGray from "./Stars/StarGray";


function Skill ({icon, alt, title, quantityStars}) {
  const rating = [];
  for (let i = 0; i < 5; i++) {
    if (i < quantityStars) {
      rating.push(<StarBlack/>);
    }  else {
      rating.push(<StarGray/>);
    }
  }
  return (
    <div className={style.skillContainer}>
      <img className={style.icon} src={icon} alt={alt}/>
      <div className={style.item}>{title}</div>
      <div className={style.stars}>
        {rating}
        {/*{quantityStars > 0*/}
        {/*  ? <StarBlack/>*/}
        {/*  : <StarGray/>*/}
        {/*}*/}
        {/*{quantityStars > 1*/}
        {/*  ? <StarBlack/>*/}
        {/*  : <StarGray/>*/}
        {/*}*/}
        {/*{quantityStars > 2*/}
        {/*  ? <StarBlack/>*/}
        {/*  : <StarGray/>*/}
        {/*}*/}
        {/*{quantityStars > 3*/}
        {/*  ? <StarBlack/>*/}
        {/*  : <StarGray/>*/}
        {/*}*/}
        {/*{quantityStars > 4*/}
        {/*  ? <StarBlack/>*/}
        {/*  : <StarGray/>*/}
        {/*}*/}

      </div>
    </div>
  )
}

export default Skill;