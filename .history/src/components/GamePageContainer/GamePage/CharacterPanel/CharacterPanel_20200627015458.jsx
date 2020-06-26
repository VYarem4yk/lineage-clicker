import React from "react";
import "./CharacterPanel.css";

const CharacterPanel = (props) => {
  return (
    <div>
      <div className="characterCharacteristic-wrapper">
        <div className="characterCharacteristic">Increase Damage</div>
        <div className="increaceCharacteristic">+</div>
        <div>Cost: 50-adena (+5DP</div>
      </div>
    </div>
  );
};

export default CharacterPanel;
