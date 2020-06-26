import React from "react";
import "./GamePage.css";
import CharacterBar from "../CharacterBar/CharacterBar";
import Monster from "../Monster/Monster";
import CharacterPanel from "./CharacterPanel/CharacterPanel";
const GamePage = (props) => {
  return (
    <div className="gamePageWrapper">
      <div className="characterBar-wrapper">
        <div>
          <CharacterBar
            character={props.character}
            monster={props.monster}
            levelUp={props.levelUp}
          />
        </div>
        <div>Adena: {props.character.characterAdena}</div>
      </div>
      <div className="mainField">
        <div className="monster">
          <Monster
            monster={props.monster}
            monsterAtacked={props.monsterAtacked}
            xpGain={props.xpGain}
            characterDMG={props.character.characterDMG}
            monsterKilled={props.monsterKilled}
            nextEnemy={props.nextEnemy}
            pickAdenaUp={props.pickAdenaUp}
          />
        </div>
      </div>
      <div className="characterPanel">
        <CharacterPanel />
      </div>
    </div>
  );
};

export default GamePage;
