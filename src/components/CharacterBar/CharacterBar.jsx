import React from "react";
import "./CharacterBar.css";
import CharacterHP from "./CharacterHP";
import CharacterMP from "./CharacterMP";
import CharacterXP from "./CharacterXP";

const CharacterBar = (props) => {
  return (
    <div className="characterBar">
      <div className="bar">
        <CharacterHP />
      </div>
      <div className="bar">
        <CharacterMP />
      </div>
      <div className="bar">
        <CharacterXP />
      </div>
    </div>
  );
};

export default CharacterBar;
