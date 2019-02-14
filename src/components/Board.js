import PlayerHome from "./PlayerHome";
import SquareStack from "./SquareStack";
var React = require("react");

var squares = [];
for (var i = 0; i < 72; i++) {
  squares.push({
    squareId: i,
    squareColor: "white",
    sqaurePlayer: ""
  });
}

squares[1].squareColor = "blue";
squares[13].squareColor = "red";
squares[25].squareColor = "green";
squares[37].squareColor = "yellow";

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
        color: "red",
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
        color: "green",
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
    squares: squares
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
              <SquareStack
                data={this.state.squares.slice(0, 6)}
                reverse={true}
              />
              <SquareStack data={this.state.squares.slice(6, 12)} />
              <SquareStack data={this.state.squares.slice(12, 18)} />
            </div>
          </div>
          <div>
            <PlayerHome info={this.state.players[1]} />
          </div>
        </div>
        <div className="flex-display">
          <div>
            <SquareStack data={squares.slice(0, 6)} horizontalStack={true} />
            <SquareStack
              data={squares.slice(0, 6)}
              horizontalStack={true}
              middleStack={true}
            />
            <SquareStack data={squares.slice(0, 6)} horizontalStack={true} />
          </div>
          <div>
            <img
              className="home-center"
              src={"./images/middle_home.png"}
              alt="home"
            />
          </div>
          <div>
            <SquareStack data={squares.slice(0, 6)} horizontalStack={true} />
            <SquareStack data={squares.slice(0, 6)} horizontalStack={true} />
            <SquareStack data={squares.slice(0, 6)} horizontalStack={true} />
          </div>
        </div>
        <div className="flex-display">
          <div>
            <PlayerHome info={this.state.players[2]} />
          </div>
          <div>
            <div className="flex-display">
              <SquareStack data={this.state.squares.slice(0, 6)} />
              <SquareStack data={this.state.squares.slice(6, 12)} />
              <SquareStack data={this.state.squares.slice(12, 18)} />
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

export default Board;
