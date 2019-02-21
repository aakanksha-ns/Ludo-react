var React = require("react");

class Coin extends React.Component {
  render() {
    return (
      <span
        className={
          "coin-common coin-" +
          this.props.color +
          (this.props.clickable ? " clickable-token" : " ")
        }
      />
    );
  }
}

export default Coin;
