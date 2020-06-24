import React from "react";
import "./Monster.css";

const MonsterHP = (props) => {
  return (
    <div className="monsterHP">
      {props.curentMonsterHP}/{props.monsterHP}
    </div>
  );
};

export default MonsterHP;
