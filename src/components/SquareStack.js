import Square from "./Square";
var React = require("react");

class SquareStack extends React.Component {
  render() {
    if (this.props.reverse) {
      return (
        <div class={this.props.horizontalStack ? "flex-display" : ""}>
          {this.props.data.reverse().map(square => (
            <Square square={square} />
          ))}
        </div>
      );
    } else {
      return (
        <div class={this.props.horizontalStack ? "flex-display" : ""}>
          {this.props.data.map(square => (
            <Square square={square} />
          ))}
        </div>
      );
    }
  }
}

export default SquareStack;
