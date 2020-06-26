import React, { Component } from "react";
import GamePage from "./GamePage/GamePage";
import {
  monsterAtacked,
  monsterKilled,
  nextEnemy,
} from "../../redux/monsterReducer";
import { xpGain, levelUp, pickAdenaUp } from "../../redux/characterReducer";
import { connect } from "react-redux";

class GamePageContainer extends Component {
  render() {
    return (
      <GamePage
        {...this.props}
        monsterAtacked={this.props.monsterAtacked}
        monsterKilled={this.props.monsterKilled}
        xpGain={this.props.xpGain}
        levelUp={this.props.levelUp}
        nextEnemy={this.props.nextEnemy}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  character: state.character,
  monster: state.monster,
});

export default connect(mapStateToProps, {
  monsterAtacked,
  monsterKilled,
  xpGain,
  levelUp,
  nextEnemy,
  pickAdenaUp,
})(GamePageContainer);
