import React from "react";
import "./CharacterPanel.css";

const CharacterPanel = (props) => {
  return (
    <div>
      <div className="characterCharacteristic-wrapper">
        <div className="characterCharacteristic">Increase Damage</div>
        <div className="increaceCharacteristic" onClick={props.increaseDMG}>+</div>
        <div>Cost: 50-adena (+5 DPS)</div>
      </div>
    </div>
  );
};

export default CharacterPanel;
