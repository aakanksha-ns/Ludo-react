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
    squarePlayerColor: ""
  });
}
for (i = 0; i < 5; i++) {
  redHomeSquares.push({
    squareId: "red" + i,
    squareColor: "red",
    squarePlayer: ""
  });
}
for (i = 0; i < 5; i++) {
  blueHomeSquares.push({
    squareId: "blue" + i,
    squareColor: "blue",
    squarePlayer: ""
  });
}
for (i = 0; i < 5; i++) {
  yellowHomeSquares.push({
    squareId: "yellow" + i,
    squareColor: "yellow",
    squarePlayer: ""
  });
}
for (i = 0; i < 5; i++) {
  greenHomeSquares.push({
    squareId: "green" + i,
    squareColor: "green",
    squarePlayer: ""
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
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "green",
        playerId: 1
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "yellow",
        playerId: 2
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "red",
        playerId: 3
      },
      {
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        color: "blue",
        playerId: 4
      }
    ],
    squares: squares,
    redHomeSquares: redHomeSquares,
    yellowHomeSquares: yellowHomeSquares,
    blueHomeSquares: blueHomeSquares,
    greenHomeSquares: greenHomeSquares
  };

  rollDice = () => {
    this.setState({
      diceValue: Math.floor(Math.random() * 6) + 1
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <div className="flex-display">
              <div>
                <PlayerHome
                  info={this.state.players[0]}
                  class="float-right no-padding"
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
                    homeSquares={this.state.yellowHomeSquares}
                    middleStack={true}
                  />
                  <SquareStack data={this.state.squares.slice(0, 6)} />
                </div>
              </div>
              <div>
                <PlayerHome info={this.state.players[1]} />
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
                  homeSquares={this.state.greenHomeSquares}
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
                  homeSquares={this.state.blueHomeSquares}
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
                <PlayerHome info={this.state.players[2]} />
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
                    homeSquares={this.state.redHomeSquares}
                    middleStack={true}
                  />
                  <SquareStack data={this.state.squares.slice(19, 25)} />
                </div>
              </div>
              <div>
                <PlayerHome info={this.state.players[3]} />
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
