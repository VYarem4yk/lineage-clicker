import React from "react";
import "./Monster.css";

const MonsterHP = (props) => {
  return (
    <div className="monsterHP">
      100
      <div
        className="hpBG"
        style={({ background: "red" }, { width: `${props.curentMonsterHP}%` })}
      ></div>
      <div>|</div>
    </div>
  );
};

export default MonsterHP;
