import React, { Component } from "react";
import GamePage from "./GamePage/GamePage";
import { monsterAtacked, monsterKilled } from "../../redux/monsterReducer";
import { xpGain, levelUp } from "../../redux/characterReducer";
import { connect } from "react-redux";

class GamePageContainer extends Component {
  render() {
    return (
      <GamePage
        {...this.props}
        monsterAtacked={this.props.monsterAtacked}
        monsterKilled={this.props.monsterKilled}
        xpGain={this.props.xpGain}
        levelUp={this.props.xpGain}
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
})(GamePageContainer);
