var React = require("react");

class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="row no-margin">
        <div className="col-sm-12 player-info">
          <div className="player-name">
            CURRENT PLAYER: {this.props.currentPlayer}
          </div>
          <div className="button-padding row no-margin">
            <button
              className="play-button offset-sm-4 col-sm-4"
              type="button"
              onClick={this.props.rollDice}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;
