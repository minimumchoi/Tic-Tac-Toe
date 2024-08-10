import Square from "../Square/Square";
import { INITIAL_SQUARES, PLAYER_COUNT, PLAYERS } from "../../constants";
import S from "./Squares.module.css";
import { useState } from "react";

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const gameIndex = squares.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYERS.ONE : PLAYERS.TWO;

  const handleClick = (index: number) => () => {
    console.log(`버튼 넘버는${index}`);
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
        return (
          <Square key={index} onClick={handleClick(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
