var React = require("react");
var ReactDOM = require("react-dom");

var squares = [];
for (var i = 0; i < 72; i++) {
  squares.push({
    squareId: i,
    squareColor: "white",
    sqaurePlayer: ""
  });
}

class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="row no-margin">
        <div className="col-sm-12 player-info">
          <div className="player-name">CURRENT PLAYER: {this.props.player}</div>
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

class Coin extends React.Component {
  render() {
    return <span className={"coin-common coin-" + this.props.color} />;
  }
}

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
                this.props.info.position1 === 0
                  ? this.props.info.color
                  : "invisible"
              }
            />
          </div>
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
                this.props.info.position1 === 0
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

class Square extends React.Component {
  render() {
    return <div className="square" id={this.props.square.squareId} />;
  }
}

class VerticalStack extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(square => (
          <Square square={square} />
        ))}
      </div>
    );
  }
}

class HorizontalStack extends React.Component {
  render() {
    return (
      <div class="flex-display">
        {this.props.data.map(square => (
          <Square square={square} />
        ))}
      </div>
    );
  }
}

class LudoGame extends React.Component {
  state = {
    player: 1,
    diceValue: 1,
    players: [
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "yellow",
        playerId: 1
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "blue",
        playerId: 2
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "green",
        playerId: 3
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "red",
        playerId: 4
      }
    ]
  };

  rollDice = () => {
    this.setState({
      diceValue: Math.floor(Math.random() * 6) + 1
    });
  };

  render() {
    return (
      <div>
        <div className="flex-display">
          <div>
            <PlayerHome
              info={this.state.players[0]}
              class="float-right no-padding"
            />
          </div>
          <div>
            <div className="flex-display">
              <VerticalStack data={squares.slice(0, 6)} />
              <VerticalStack data={squares.slice(6, 12)} />
              <VerticalStack data={squares.slice(12, 18)} />
            </div>
          </div>
          <div>
            <PlayerHome info={this.state.players[1]} />
          </div>
        </div>
        <div className="flex-display">
          <div>
            <HorizontalStack data={squares.slice(0, 6)} />
            <HorizontalStack data={squares.slice(0, 6)} />
            <HorizontalStack data={squares.slice(0, 6)} />
          </div>
          <div>
            <img
              className="home-center"
              src={"./images/middle_home.png"}
              alt="home"
            />
          </div>
          <div>
            <HorizontalStack data={squares.slice(0, 6)} />
            <HorizontalStack data={squares.slice(0, 6)} />
            <HorizontalStack data={squares.slice(0, 6)} />
          </div>
        </div>
        <div className="flex-display">
          <div>
            <PlayerHome info={this.state.players[2]} />
          </div>
          <div>
            <div className="flex-display">
              <VerticalStack data={squares.slice(0, 6)} />
              <VerticalStack data={squares.slice(6, 12)} />
              <VerticalStack data={squares.slice(12, 18)} />
            </div>
          </div>
          <div>
            <PlayerHome info={this.state.players[3]} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<LudoGame />, document.getElementById("root"));
