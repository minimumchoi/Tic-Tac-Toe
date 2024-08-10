import { ReactNode } from "react";
import S from "./Square.module.css";

interface SquarePropstype {
  children?: ReactNode;
  onClick: () => void;
  style: object;
}

function Square({ children, onClick, style }: SquarePropstype) {
  const isDisabled = !!children;

  return (
    <button
      type="button"
      style={style}
      className={S.component}
      disabled={isDisabled}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Square;
