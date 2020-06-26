import React from "react";
import monster from "../../../images/monster.png";
import "./Monster.css";
import MonsterHP from "./MonsterHP";
import adena from '../../../'

const Monster = (props) => {
  let atackMonster = () => {
    if (props.monster.curentMonsterHP >= props.characterDMG) {
      props.monsterAtacked(props.characterDMG);
    } else {
      props.xpGain(props.monster.monsterXP);
      props.monsterKilled();
      setTimeout(function () {
        props.nextEnemy();
      }, 200);
    }
  };

  return (
    <div className="monsterClickArea">
      {props.monster.isMonsterDead ? (
        <div className="drop">
          <img src={adena}></img>
        </div>
      ) : (
        <div className="monsterWrapper">
          <div className="monsterInfo">
            <div className="monsterSideBar"></div>
            <div className="monsterName">Imp</div>
            <div className="monsterHP-wrapper">
              <MonsterHP
                monsterHP={props.monster.monsterHP}
                curentMonsterHP={props.monster.curentMonsterHP}
              />
            </div>
          </div>

          <img
            src={monster}
            className="monsterSkin"
            onClick={atackMonster}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Monster;
