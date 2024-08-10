import Board from "./components/Board/Board";
import History from "./components/History/History";
import "./styles/main.css";
import S from "./Game.module.css";

export function Game() {
  return (
    <div className={S.component}>
      <Board />
      <History />
    </div>
  );
}
