import PlayerHome from "./PlayerHome";
import SquareStack from "./SquareStack";
import DicePanel from "./DicePanel";
var React = require("react");

var squares = [],
  redHomeSquares = [],
  blueHomeSquares = [],
  yellowHomeSquares = [],
  greenHomeSquares = [];
for (var i = 0; i < 52; i++) {
  squares.push({
    squareId: "white" + i,
    squareColor: "white",
    squarePlayer: "",
    squarePlayerColor: "",
    clickable: false
  });
}
for (i = 0; i < 5; i++) {
  redHomeSquares.push({
    squareId: "red" + i,
    squareColor: "red",
    squarePlayer: "",
    clickable: false
  });
}
for (i = 0; i < 5; i++) {
  blueHomeSquares.push({
    squareId: "blue" + i,
    squareColor: "blue",
    squarePlayer: "",
    clickable: false
  });
}
for (i = 0; i < 5; i++) {
  yellowHomeSquares.push({
    squareId: "yellow" + i,
    squareColor: "yellow",
    squarePlayer: "",
    clickable: false
  });
}
for (i = 0; i < 5; i++) {
  greenHomeSquares.push({
    squareId: "green" + i,
    squareColor: "green",
    squarePlayer: "",
    clickable: false
  });
}

squares[1].squareColor = "yellow";
squares[14].squareColor = "blue";
squares[27].squareColor = "red";
squares[40].squareColor = "green";

class Board extends React.Component {
  state = {
    currentPlayer: 1,
    diceValue: 1,
    players: [
      {
        tokens: [
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          }
        ],
        color: "green",
        playerId: 1,
        startPosition: 40,
        homeSquares: greenHomeSquares
      },
      {
        tokens: [
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            squaresMoved: 0,
            homeSquarePosition: -1
          }
        ],
        color: "yellow",
        playerId: 2,
        startPosition: 1,
        homeSquares: yellowHomeSquares
      },
      {
        tokens: [
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          }
        ],
        color: "red",
        playerId: 3,
        startPosition: 27,
        homeSquares: redHomeSquares
      },
      {
        tokens: [
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          },
          {
            position: -1,
            clickable: false,
            homeSquarePosition: -1
          }
        ],
        color: "blue",
        playerId: 4,
        startPosition: 14,
        homeSquares: blueHomeSquares
      }
    ],
    squares: squares,
    currentlyHighlightedSquare: -1
  };

  highlightToken = diceVal => {
    var index = this.state.currentPlayer - 1;
    var player = this.state.players[index];
    if (diceVal === 6) {
      var { players } = this.state;
      var newPlayers = [...players];
      newPlayers[index] = { ...players[index] };
      for (var i = 0; i < 4; i++) {
        if (player.tokens[i].position === -1) {
          newPlayers[index].tokens[i] = {
            ...players[index].tokens[i],
            clickable: true
          };
        }
      }
      this.setState({ players: newPlayers });
    }
  };

  toggleSquareHighlight = (i, squareType) => {
    if (!squareType) {
      var { squares } = this.state,
        newSquares = [...squares];
      newSquares[i] = { ...squares[i], clickable: !squares[i].clickable };
      this.setState({ squares: newSquares });
    } else {
    }
  };

  rollDice = () => {
    var diceVal = Math.floor(Math.random() * 6) + 1;
    this.setState({
      diceValue: diceVal
    });
    this.highlightToken(diceVal);
  };

  handleTokenClick = i => {
    var currToken = this.state.players[this.state.currentPlayer - 1].tokens[i];
    var currHomePosition = this.state.players[this.state.currentPlayer - 1]
      .tokens[i].homeSquarePosition;
    if (currToken.position === -1) {
      this.toggleSquareHighlight(
        this.state.players[this.state.currentPlayer - 1].startPosition
      );
    } else if (currToken.squaresMoved + this.state.diceVal < 51) {
      this.toggleSquareHighlight((currToken + this.state.diceVal) % 52);
    } else if (
      currToken.squaresMoved < 51 &&
      currToken.squaresMoved + this.state.diceVal > 51
    ) {
      this.toggleSquareHighlight(
        this.state.diceVal - (51 - currToken.squaresMoved) - 1,
        "home"
      );
    } else {
      this.toggleSquareHighlight(this.state.diceVal + currHomePosition, "home");
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <div className="flex-display">
              <div>
                <PlayerHome
                  tokens={this.state.players[0].tokens}
                  color={this.state.players[0].color}
                  class="float-right no-padding"
                  handleTokenClick={this.handleTokenClick}
                />
              </div>
              <div>
                <div className="flex-display">
                  <SquareStack
                    data={this.state.squares.slice(45, 51)}
                    reverse={true}
                  />
                  <SquareStack
                    data={this.state.squares[6]}
                    homeSquares={this.state.players[1].homeSquares}
                    middleStack={true}
                  />
                  <SquareStack data={this.state.squares.slice(0, 6)} />
                </div>
              </div>
              <div>
                <PlayerHome
                  tokens={this.state.players[1].tokens}
                  color={this.state.players[1].color}
                  handleTokenClick={this.handleTokenClick}
                />
              </div>
            </div>
            <div className="flex-display">
              <div>
                <SquareStack
                  data={this.state.squares.slice(39, 45)}
                  horizontalStack={true}
                />
                <SquareStack
                  data={this.state.squares[38]}
                  middleStack={true}
                  homeSquares={this.state.players[0].homeSquares}
                  horizontalStack={true}
                />
                <SquareStack
                  data={this.state.squares.slice(32, 38)}
                  horizontalStack={true}
                  reverse={true}
                />
              </div>
              <div>
                <img
                  className="home-center"
                  src={"./images/middle_home.png"}
                  alt="home"
                />
              </div>
              <div>
                <SquareStack
                  data={this.state.squares.slice(6, 12)}
                  horizontalStack={true}
                />
                <SquareStack
                  data={this.state.squares[12]}
                  horizontalStack={true}
                  middleStack={true}
                  homeSquares={this.state.players[3].homeSquares}
                  reverse={true}
                />
                <SquareStack
                  data={squares.slice(13, 19)}
                  horizontalStack={true}
                  reverse={true}
                />
              </div>
            </div>
            <div className="flex-display">
              <div>
                <PlayerHome
                  tokens={this.state.players[2].tokens}
                  color={this.state.players[2].color}
                  handleTokenClick={this.handleTokenClick}
                />
              </div>
              <div>
                <div className="flex-display">
                  <SquareStack
                    data={this.state.squares.slice(26, 32)}
                    reverse={true}
                  />
                  <SquareStack
                    data={this.state.squares[25]}
                    reverse={true}
                    homeSquares={this.state.players[2].homeSquares}
                    middleStack={true}
                  />
                  <SquareStack data={this.state.squares.slice(19, 25)} />
                </div>
              </div>
              <div>
                <PlayerHome
                  tokens={this.state.players[3].tokens}
                  color={this.state.players[3].color}
                  handleTokenClick={this.handleTokenClick}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <DicePanel
              diceValue={this.state.diceValue}
              currentPlayer={this.state.currentPlayer}
              rollDice={this.rollDice}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
