import Coin from "./Coin";
var React = require("react");

class PlayerHome extends React.Component {
  render() {
    return (
      <div
        className={
          "player-home col-sm-12 border-" +
          this.props.color +
          " " +
          this.props.class
        }
      >
        <div className="row">
          {this.props.tokens.map((token, index) => (
            <div className="col-sm-6 player-coin" key={index}>
              <Coin
                color={token.position === -1 ? this.props.color : "invisible"}
                clickable={token.clickable}
                tokenIndex={index}
                handleTokenClick={this.props.handleTokenClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlayerHome;
