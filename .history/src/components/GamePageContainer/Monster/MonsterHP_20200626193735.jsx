import React from "react";
import "./Monster.css";

const MonsterHP = (props) => {
  return (
    <div className="monsterHP">
      <div
        className="hpBG"
        style={({ background: "red" }, { width: `${props.curentMonsterHP}%` })}
      >
        {props.curentMonsterHP}
      </div>
      <div>|</div>
    </div>
  );
};

export default MonsterHP;
