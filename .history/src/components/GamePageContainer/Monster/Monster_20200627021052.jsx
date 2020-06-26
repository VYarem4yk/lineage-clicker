import React from "react";
import monster from "../../../images/monster.png";
import "./Monster.css";
import MonsterHP from "./MonsterHP";
import adena from "../../../images/adena.png";

const Monster = (props) => {
  let atackMonster = (e) => {
    epreventDefault();
    let characterAtackPower = Math.ceil(
      props.characterDMG + 10 * Math.random()
    );
    if (props.monster.curentMonsterHP >= characterAtackPower) {
      props.monsterAtacked(characterAtackPower);
    } else {
      props.xpGain(props.monster.monsterXP);
      props.monsterKilled();
      props.pickAdenaUp(Math.ceil(props.monster.dropAdena * Math.random()));
      setTimeout(function () {
        props.nextEnemy();
      }, 500);
    }
  };

  return (
    <div className="monsterClickArea">
      {props.monster.isMonsterDead ? (
        <div className="drop">
          <div className="adenaDrop-wrapper">
            <img src={adena} className="adenaDrop"></img>
          </div>
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
