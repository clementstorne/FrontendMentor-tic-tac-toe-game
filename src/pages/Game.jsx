import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { openResetModal } from "../store/resetModalSlice";
import { openEndOfRoundModal } from "../store/endOfRoundModalSlice";
import { updateGameBoard, quitGame } from "../store/gameSlice";

import Cell from "../components/Cell";
import ResetButton from "../components/ResetButton";
import ScoreDisplay from "../components/ScoreDisplay";
import TurnDisplay from "../components/TurnDisplay";
import RestartModal from "../components/RestartModal";
import EndOfRoundModal from "../components/EndOfRoundModal";

import { hasSomeoneWon } from "../utils/game";

export default function Game() {
  const dispatch = useDispatch();

  const gameBoard = useSelector((state) => state.game.gameBoard);
  const typeOfGame = useSelector((state) => state.game.typeOfGame);
  const player1 = useSelector((state) => state.game.player1);
  const player2 = useSelector((state) => state.game.player2);
  const ties = useSelector((state) => state.game.ties);
  const turn = useSelector((state) => state.game.turn);

  useEffect(() => {
    const numberOfTurns = gameBoard.filter(Boolean).length;
    if (numberOfTurns >= 5) {
      if (hasSomeoneWon(gameBoard)) {
        dispatch(openEndOfRoundModal());
      }
    }
  }, [gameBoard, dispatch]);

  return (
    <>
      {typeOfGame === null && <Navigate to="/" replace={true} />}
      <div>
        <EndOfRoundModal />
        <RestartModal />
        <div className="w-[328px] md:w-[460px] h-screen  my-6 mx-auto md:flex md: flex-col md:justify-center md:items-center">
          <header className="relative w-full grid grid-cols-3 items-center">
            <Link to="/">
              <img
                src="./logo.svg"
                alt="Game Logo"
                onClick={() => dispatch(quitGame())}
              />
            </Link>
            <TurnDisplay turn={turn} />
            <ResetButton onClick={() => dispatch(openResetModal())} />
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
              score={player1.mark === "x" ? player1.score : player2.score}
              typeOfGame={typeOfGame}
              player={player1.mark === "x" ? "player1" : "player2"}
            />
            <ScoreDisplay type="ties" score={ties} />
            <ScoreDisplay
              type="o"
              score={player1.mark === "o" ? player1.score : player2.score}
              typeOfGame={typeOfGame}
              player={player1.mark === "o" ? "player1" : "player2"}
            />
          </footer>
        </div>
      </div>
    </>
  );
}
