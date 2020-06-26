import React from "react";
import "./CharacterBar.css";

const CharacterXP = (props) => {
  debugger;
  if (
    props.characterXP > props.experienceForLvl[`level_${props.characterLVL}`]
  ) {
    props.levelUp();
  } else {
    return (
      <div className="characterXP">
        {props.characterXP}/
        {props.experienceForLvl[`level_${props.characterLVL}`]}
      </div>
    );
  }
};

export default CharacterXP;
