import React from "react";
import "./CharacterBar.css";

const CharacterXP = (props) => {
  debugger;
  if (props.characterXP > props.experienceForLvl.1) {
    props.levelUp();
  } else {
    return (
      <div className="characterXP">
        {props.characterXP}/{props.experienceForLvl}
      </div>
    );
  }
};

export default CharacterXP;
