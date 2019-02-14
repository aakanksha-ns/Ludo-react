var React = require("react");

class Dice extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 dice-center-align">
          <img
            className="dice"
            src={"./images/dice-" + this.props.diceValue + ".png"}
            alt="dice"
          />
        </div>
      </div>
    );
  }
}

export default Dice;
