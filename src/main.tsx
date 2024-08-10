import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Game } from "./Game";

const container = document.getElementById("root") as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
