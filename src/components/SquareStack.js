import Square from "./Square";
var React = require("react");

class SquareStack extends React.Component {
  render() {
    if (this.props.middleStack) {
      if (this.props.reverse) {
        return (
          <div class={this.props.horizontalStack ? "flex-display" : ""}>
            {this.props.homeSquares.reverse().map(square => (
              <Square square={square} />
            ))}
            <Square square={this.props.data} />
          </div>
        );
      } else {
        return (
          <div class={this.props.horizontalStack ? "flex-display" : ""}>
            <Square square={this.props.data} />
            {this.props.homeSquares.map(square => (
              <Square square={square} />
            ))}
          </div>
        );
      }
    } else if (this.props.reverse) {
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
