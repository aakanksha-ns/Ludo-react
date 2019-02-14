import Coin from "./Coin";
var React = require("react");

class PlayerHome extends React.Component {
  render() {
    return (
      <div
        className={
          "player-home col-sm-12 border-" +
          this.props.info.color +
          " " +
          this.props.class
        }
      >
        <div className="row">
          <div className="col-sm-6 player-coin">
            <Coin
              color={
                this.props.info.position1 === 0
                  ? this.props.info.color
                  : "invisible"
              }
            />
          </div>
          <div className="col-sm-6 player-coin">
            <Coin
              color={
                this.props.info.position2 === 0
                  ? this.props.info.color
                  : "invisible"
              }
            />
          </div>
          <div className="col-sm-6 player-coin">
            <Coin
              color={
                this.props.info.position3 === 0
                  ? this.props.info.color
                  : "invisible"
              }
            />
          </div>
          <div className="col-sm-6 player-coin">
            <Coin
              color={
                this.props.info.position4 === 0
                  ? this.props.info.color
                  : "invisible"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerHome;
