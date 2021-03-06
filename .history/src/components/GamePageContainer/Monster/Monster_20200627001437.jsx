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
      setTimeout(function () {
        props.nextEnemy();
      }, 1000);
    }
  };

  let nextTarget = () => {
    props.nextEnemy();
  };
  return (
   
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

  );
};

export default Monster;
