import { ReactNode } from "react";
import S from "./Squares.module.css";

interface SquarePropstype {
  children?: ReactNode;
  onClick: () => void;
}

function Square({ children, onClick }: SquarePropstype) {
  const isDisabled = !!children;

  return (
    <button
      type="button"
      className={S.component}
      disabled={isDisabled}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Square;
