import React from "react";
import "./Monster.css";

const MonsterHP = (props) => {
  return (
    <div className="monsterHP">
      <div
        className="hpBG"
        style={({ background: "red" }, { width: `${props.curentMonsterHP}%` })}
      >
        100
      </div>
      <div>|</div>
    </div>
  );
};

export default MonsterHP;
