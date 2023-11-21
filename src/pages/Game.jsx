import { useDispatch } from "react-redux";
import { openModal } from "../store/modalSlice";

import { createGameBoard } from "../utils/gameBoard";

import Cell from "../components/Cell";
import ResetButton from "../components/ResetButton";
import ScoreDisplay from "../components/ScoreDisplay";
import TurnDisplay from "../components/TurnDisplay";
import RestartModal from "../components/RestartModal";

export default function Game() {
  const dispatch = useDispatch();

  const grid = createGameBoard();

  return (
    <div>
      <RestartModal />
      <div className="w-[328px] md:w-[460px] h-screen  my-6 mx-auto md:flex md: flex-col md:justify-center md:items-center">
        <header className="relative w-full grid grid-cols-3 items-center">
          <img src="./logo.svg" alt="Game Logo" />
          <TurnDisplay turn="x" />
          <ResetButton onClick={() => dispatch(openModal())} />
        </header>
        <main className="h-[328px] md:h-[460px] mt-16 md:mt-5 mb-5 grid grid-cols-3 grid-rows-3 gap-5">
          {grid.map((el, index) => (
            <Cell id={`cell-${index}`} key={index} />
          ))}
        </main>
        <footer className="grid grid-cols-3 gap-5">
          <ScoreDisplay
            type="x"
            score={14}
            typeOfGame="vsCPU"
            player="player1"
          />
          <ScoreDisplay type="ties" score={32} />
          <ScoreDisplay type="o" score={11} typeOfGame="vsCPU" />
        </footer>
      </div>
    </div>
  );
}
