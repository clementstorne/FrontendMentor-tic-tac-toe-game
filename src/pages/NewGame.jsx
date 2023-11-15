import { useState } from "react";

function NewGame() {
  const [isPlayerMarkO, setIsPlayerMarkO] = useState(true);

  const toggleMark = () => {
    setIsPlayerMarkO(!isPlayerMarkO);
  };

  return (
    <main className="h-screen mx-6 flex flex-col flex-nowrap justify-center items-center">
      <img src="./logo.svg" alt="Game Logo" />
      <div className="tile my-8 ">
        <h4>Pick player 1&rsquo;s mark</h4>
        <div
          className="toggle grid grid-cols-2 mt-6 mb-[17px]"
          onClick={toggleMark}
        >
          <div className={`mark-selector ${!isPlayerMarkO ? "bg-silver" : ""}`}>
            {isPlayerMarkO ? (
              <img
                src="./icon-x-silver-full.svg"
                alt="X mark is not selected"
              />
            ) : (
              <img src="./icon-x-silver-empty.svg" alt="X mark is selected" />
            )}
          </div>
          <div className={`mark-selector ${isPlayerMarkO ? "bg-silver" : ""}`}>
            {isPlayerMarkO ? (
              <img src="./icon-o-silver-empty.svg" alt="O mark is selected" />
            ) : (
              <img
                src="./icon-o-silver-full.svg"
                alt="O mark is not selected"
              />
            )}
          </div>
        </div>
        <p className="text-center opacity-50">REMEMBER : X GOES FIRST</p>
      </div>
      <div>
        <button className="big-btn yellow-btn-big-shadow bg-light-yellow hover:bg-light-yellow-hover mb-4">
          New game (vs CPU)
        </button>
        <button className="big-btn blue-btn-big-shadow bg-light-blue hover:bg-light-blue-hover">
          New game (vs player)
        </button>
      </div>
    </main>
  );
}

export default NewGame;
