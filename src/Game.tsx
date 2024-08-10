import Board from "./components/Board/Board";
import History from "./components/History/History";
import "./styles/main.css";

export function Game() {
  return (
    <div className="Game">
      <Board />
      <History />
    </div>
  );
}
