import React from "react";
import "./CharacterBar.css";
import CharacterHP from "./CharacterHP";
import CharacterMP from "./CharacterMP";
import CharacterXP from "./CharacterXP";

const CharacterBar = (props) => {
  return (
    <div className="characterBar">
      <div className="heroSideBar"></div>
      <div className="heroInfo">
        <div className="heroLevel">{props.character.characterLVL</div>
        <div className="heroName">Ange1ok</div>
      </div>

      <div className="bar">
        <div className="barHP">
          <CharacterHP characterHP={props.character.characterHP} />
        </div>
        <div className="barMP">
          <CharacterMP characterMP={props.character.characterMP} />
        </div>
        <div className="barXP">
          <CharacterXP characterXP={props.character.characterXP} />
        </div>
      </div>
    </div>
  );
};

export default CharacterBar;
