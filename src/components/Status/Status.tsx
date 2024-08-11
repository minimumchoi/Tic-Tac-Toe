interface StatusProps {
  nextPlayer: string;
  winner: {
    winner: string;
    condition: number[];
  } | null;
  isDraw: boolean;
}

function Status({ nextPlayer, winner, isDraw }: StatusProps) {
  if (winner) {
    return <h2 className="Status">승자는 바로!!! {winner.winner}</h2>;
  } else if (isDraw) {
    return <h2 className="Status">치열한 승부였다...</h2>;
  }

  return <h2 className="Status">다음 플레이어:{nextPlayer}</h2>;
}

export default Status;
