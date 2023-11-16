import { useState } from "react";
import BigButton from "../components/BigButton";

function NewGame() {
  const [isPlayerMarkO, setIsPlayerMarkO] = useState(true);

  const toggleMark = () => {
    setIsPlayerMarkO(!isPlayerMarkO);
  };

  return (
    <div className="h-screen mx-6 flex flex-col flex-nowrap justify-center items-center">
      <header>
        <img src="./logo.svg" alt="Game Logo" />
      </header>
      <main className="tile my-8 ">
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
      </main>
      <footer>
        <BigButton text="New game (vs CPU)" color="yellow" spaceAfter={true} />
        <BigButton text="New game (vs player)" color="blue" />
      </footer>
    </div>
  );
}

export default NewGame;
