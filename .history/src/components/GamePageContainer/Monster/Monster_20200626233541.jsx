import React from "react";
import monster from "../../../images/monster.png";
import "./Monster.css";
import MonsterHP from "./MonsterHP";

const Monster = (props) => {
  let atackMonster = () => {
    if (props.monster.curentMonsterHP >= props.characterDMG) {
      props.monsterAtacked(props.characterDMG);
    } else {
      props.xpGain(props.monster.monsterXP);
      props.monsterKilled();
    }
  };
  return (
    <div>
      {props.monster.isMonsterDead? <div>Кому втащить?</div>: }
     
  );
};

export default Monster;
