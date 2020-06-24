import React from "react";
import monster from "../../images/monster.png";
import "./Monster.css";
import MonsterHP from "./MonsterHP";
class Monster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsterHP: 100,
      curentMonsterHP: 100,
    };
  }

  arackMonster = () => {
    if (this.state.curentMonsterHP > 10) {
      this.setState({
        curentMonsterHP: this.state.curentMonsterHP - 10,
      });
    } else {
      this.setState({
        monsterHP: this.state.monsterHP * 2,
        curentMonsterHP: this.state.monsterHP * 2,
      });
    }
  };
  render() {
    return (
      <div className="monsterWrapper">
        <MonsterHP
          monsterHP={this.state.monsterHP}
          curentMonsterHP={this.state.curentMonsterHP}
        />
        <img
          src={monster}
          className="monsterSkin"
          onClick={this.arackMonster}
        ></img>
      </div>
    );
  }
}

export default Monster;
