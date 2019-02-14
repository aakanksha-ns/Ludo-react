var React = require("react");

class Square extends React.Component {
  render() {
    return (
      <div
        className={"square square-" + this.props.square.squareColor}
        id={this.props.square.squareId}
      />
    );
  }
}

export default Square;
