import React from "react";
import "./CharacterPanel.css";

const CharacterPanel = (props) => {
  const increaseClick = () => {
      if (props.charracter)
    props.increaseDMG();
  };
  return (
    <div>
      <div className="characterCharacteristic-wrapper">
        <div className="characterCharacteristic">Increase Damage</div>
        <div className="increaceCharacteristic" onClick={increaseClick}>
          +
        </div>
        <div className="increaseCharacteristicInfo">
          Cost: 50 adena (+5 DPS)
        </div>
      </div>
    </div>
  );
};

export default CharacterPanel;
