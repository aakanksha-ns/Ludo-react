import Coin from "./Coin";
var React = require("react");

class Square extends React.Component {
  render() {
    if (this.props.square.squarePlayer) {
      return (
        <div
          className={"square square-" + this.props.square.squareColor}
          id={this.props.square.squareId}
        >
          <Coin color={this.props.square.squarePlayerColor} />
        </div>
      );
    } else {
      return (
        <div
          className={
            "square square-" +
            this.props.square.squareColor +
            (this.props.square.clickable ? " clickable-token" : " ")
          }
          id={this.props.square.squareId}
        />
      );
    }
  }
}

export default Square;
