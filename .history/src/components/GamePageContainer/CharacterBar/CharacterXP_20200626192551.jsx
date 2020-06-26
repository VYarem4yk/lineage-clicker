import React from "react";
import "./CharacterBar.css";

const CharacterXP = (props) => {
  if (props.characterXP >= 100) {
    props.levelUp();
  }

  return <div className="characterXP">{props.characterXP}/100</div>;
};

export default CharacterXP;
