import { useState } from "react";
import Board from "./components/Board/Board";
import History from "./components/History/History";
import {
  checkWinner,
  PLAYER_COUNT,
  PLAYERS,
  INITIAL_SQUARES,
} from "./constants";
import S from "./Game.module.css";
import "./styles/main.css";

export function Game() {
  const [gameHistory, setHistory] = useState(INITIAL_SQUARES);
  const [gameCount, setGameCount] = useState(0);

  const nextGameCount = gameCount + 1;

  const gameIndex = gameHistory.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const nextPlayer = isPlayerOneTurn ? PLAYERS.ONE : PLAYERS.TWO;

  const handleClick = (index: number) => () => {
    const winnerInfo = checkWinner(gameHistory);
    if (winnerInfo) {
      alert("게임끝 그만 누르세요~~");
      return;
    }

    setHistory(
      gameHistory.map((square, squaresIndex) => {
        return squaresIndex === index ? nextPlayer : square;
      })
    );

    setGameCount(nextGameCount);
    console.log(gameHistory);
  };

  const winnerInfo = checkWinner(gameHistory);
  const isDraw = !winnerInfo && gameHistory.every(Boolean);
  return (
    <div className={S.component}>
      <Board
        nextPlayer={nextPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
        squares={gameHistory}
        onClick={handleClick}
      />
      <History />
    </div>
  );
}
