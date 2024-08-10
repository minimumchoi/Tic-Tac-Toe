import Square from "../Square/Square";
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER_COUNT,
  PLAYERS,
  WINNER_CONDITIONS,
  WINNERS_COLOR,
} from "../../constants";
import S from "./Squares.module.css";
import { useState } from "react";

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const gameIndex = squares.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYERS.ONE : PLAYERS.TWO;

  const handleClick = (index: number) => () => {
    const winnerInfo = checkWinner(squares);
    if (winnerInfo) {
      alert("게임끝");
      return;
    }

    setSquares(
      squares.map((square, squaresIndex) => {
        if (squaresIndex === index) {
          return currentPlayer;
        }
        return square;
      })
    );
    console.log(squares);
  };

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyle = {
          backgroundColor: null,
        };

        if (checkWinner(squares)) {
          const winnerInfo = checkWinner(squares);
          console.log(winnerInfo?.condition);
          const [x, y, z] = winnerInfo?.condition;
          if (index === x || index === y || index === z) {
            winnerStyle.backgroundColor = WINNERS_COLOR;
          }
        }
        return (
          <Square style={winnerStyle} key={index} onClick={handleClick(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
