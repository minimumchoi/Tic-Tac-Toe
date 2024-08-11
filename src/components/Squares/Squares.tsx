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
interface SquaresProps {
  squares: Array<string>;
  onClick: (index: number) => void;
}

function Squares({ squares, onClick }: SquaresProps) {
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
          <Square style={winnerStyle} key={index} onClick={onClick(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
