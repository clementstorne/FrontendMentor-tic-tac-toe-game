import { createGrid } from "../utils/grid";

import Cell from "../components/Cell";
import ResetButton from "../components/ResetButton";
import Score from "../components/Score";

function Game() {
  const grid = createGrid();
  return (
    <div className="h-screen mx-6 flex flex-col flex-nowrap justify-center items-center">
      <header className="w-full flex flex-row flex-nowrap justify-between items-start">
        <img src="./logo.svg" alt="Game Logo" />
        <ResetButton />
      </header>
      <main className="mt-16 mb-5 grid grid-cols-3 grid-rows-3 gap-5">
        {grid.map((el, index) => (
          <Cell id={`cell-${index}`} key={index} />
        ))}
      </main>
      <footer className="grid grid-cols-3 gap-5">
        <Score type="x" score={14} typeOfGame="vsCPU" player="player1" />
        <Score type="ties" score={32} />
        <Score type="o" score={11} typeOfGame="vsCPU" />
      </footer>
    </div>
  );
}

export default Game;
