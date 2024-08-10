import { INITIAL_SQUARES } from "@/constants";
import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";
import { useState } from "react";

function Board() {
  return (
    <div className={S.component}>
      <Status />
      <Squares />
    </div>
  );
}

export default Board;
