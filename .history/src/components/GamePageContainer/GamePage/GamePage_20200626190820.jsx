import React from "react";
import "./GamePage.css";
import CharacterBar from "../CharacterBar/CharacterBar";
import Monster from "../Monster/Monster";
const GamePage = (props) => {
  return (
    <div className="gamePageWrapper">
      <div className="characterBar-wrapper">
        <CharacterBar character={props.character} monster={props.monster} />
      </div>
      <div className="mainField">
        <div className="monster">
          <Monster
            monster={props.monster}
            monsterAtacked={props.monsterAtacked}
            xpGain={props.xpGain}
            characterDMG={props.character.characterDMG}
            monsterKilled={props.monsterKilled}
          />
        </div>
      </div>
      <div className="skillsBar">Skills</div>
    </div>
  );
};

export default GamePage;
