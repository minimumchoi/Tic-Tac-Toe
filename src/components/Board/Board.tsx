import { checkWinner, PLAYER_COUNT, PLAYERS } from "../../constants";
import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";

interface BoardProps {
  nextPlayer: string;
  winnerInfo: object | null;
  isDraw: boolean;
  squares: Array<string>;
  onClick: (index: number) => void;
}

function Board({
  nextPlayer,
  winnerInfo,
  isDraw,
  squares,
  onClick,
}: BoardProps) {
  return (
    <div className={S.component}>
      <Status nextPlayer={nextPlayer} winner={winnerInfo} isDraw={isDraw} />
      <Squares squares={squares} onClick={onClick} />
    </div>
  );
}

export default Board;
