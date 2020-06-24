import React from "react";
import "./GamePage.css";
import CharacterBar from "../CharacterBar/CharacterBar";
import Monster from "../Monster/Monster";
const GamePage = () => {
  return (
    <div className="gamePageWrapper">
      <div className="characterBar-wrapper">
        <CharacterBar />
      </div>
      <div className="mainField">
        <div className="monster">
          <Monster />
        </div>
      </div>
      <div className="skillsBar">Skills</div>
    </div>
  );
};

export default GamePage;
