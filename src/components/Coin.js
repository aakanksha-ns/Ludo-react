var React = require("react");

class Coin extends React.Component {
  render() {
    return <span className={"coin-common coin-" + this.props.color} />;
  }
}

export default Coin;
