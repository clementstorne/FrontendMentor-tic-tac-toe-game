import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/modalSlice";
import { updateGameBoard } from "../store/gameSlice";

import Cell from "../components/Cell";
import ResetButton from "../components/ResetButton";
import ScoreDisplay from "../components/ScoreDisplay";
import TurnDisplay from "../components/TurnDisplay";
import RestartModal from "../components/RestartModal";

export default function Game() {
  const dispatch = useDispatch();

  const gameBoard = useSelector((state) => state.game.gameBoard);
  const scores = useSelector((state) => state.game.scores);
  const turn = useSelector((state) => state.game.turn);

  return (
    <div>
      <RestartModal />
      <div className="w-[328px] md:w-[460px] h-screen  my-6 mx-auto md:flex md: flex-col md:justify-center md:items-center">
        <header className="relative w-full grid grid-cols-3 items-center">
          <img src="./logo.svg" alt="Game Logo" />
          <TurnDisplay turn={turn} />
          <ResetButton onClick={() => dispatch(openModal())} />
        </header>
        <main className="h-[328px] md:h-[460px] mt-16 md:mt-5 mb-5 grid grid-cols-3 grid-rows-3 gap-5">
          {gameBoard.map((el, index) => (
            <Cell
              id={`cell-${index}`}
              mark={el}
              key={index}
              onClick={() => {
                dispatch(updateGameBoard(index));
              }}
            />
          ))}
        </main>
        <footer className="grid grid-cols-3 gap-5">
          <ScoreDisplay
            type="x"
            score={scores.x}
            typeOfGame="vsCPU"
            player="player1"
          />
          <ScoreDisplay type="ties" score={scores.ties} />
          <ScoreDisplay type="o" score={scores.o} typeOfGame="vsCPU" />
        </footer>
      </div>
    </div>
  );
}
