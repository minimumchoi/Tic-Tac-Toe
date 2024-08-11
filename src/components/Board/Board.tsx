import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER_COUNT,
  PLAYERS,
} from "../../constants";
import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const gameIndex = squares.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const nextPlayer = isPlayerOneTurn ? PLAYERS.ONE : PLAYERS.TWO;

  const handleClick = (index: number) => () => {
    const winnerInfo = checkWinner(squares);
    if (winnerInfo) {
      alert("게임끝 그만 누르세요~~");
      return;
    }

    setSquares(
      squares.map((square, squaresIndex) => {
        if (squaresIndex === index) {
          return nextPlayer;
        }
        return square;
      })
    );
  };

  const winnerInfo = checkWinner(squares);
  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className={S.component}>
      <Status nextPlayer={nextPlayer} winner={winnerInfo} isDraw={isDraw} />
      <Squares squares={squares} onClick={handleClick} />
    </div>
  );
}

export default Board;
