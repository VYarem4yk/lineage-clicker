import React from "react";
import "./CharacterBar.css";

const CharacterXP = (props) => {
  if (props.characterXP > experienceForLvl) {
    props.levelUp();
  } else {
    return <div className="characterXP">{props.characterXP}/100</div>;
  }
};

export default CharacterXP;
