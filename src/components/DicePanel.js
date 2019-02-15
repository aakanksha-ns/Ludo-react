import PlayerInfo from "./PlayerInfo";
import Dice from "./Dice";
var React = require("react");

class DicePanel extends React.Component {
  render() {
    return (
      <div className="row dice-panel">
        <div className="col-sm-12 dice-center-align">
          <Dice diceValue={this.props.diceValue} />
        </div>
        <div>
          <PlayerInfo
            currentPlayer={this.props.currentPlayer}
            rollDice={this.props.rollDice}
          />
        </div>
      </div>
    );
  }
}

export default DicePanel;
