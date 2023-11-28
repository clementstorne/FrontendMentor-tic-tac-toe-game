import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeEndOfRoundModal } from "../store/endOfRoundModalSlice.js";
import { quitGame } from "../store/gameSlice.js";
import { newRound } from "../store/gameSlice.js";

import SmallButton from "./SmallButton.jsx";

export default function EndOfRoundModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector((state) => state.endOfRoundModal.isOpen);
  const typeOfGame = useSelector((state) => state.game.typeOfGame);
  const player1 = useSelector((state) => state.game.player1.mark);
  const winner = useSelector((state) => state.game.turn);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      dispatch(closeEndOfRoundModal());
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div
        className={`modal pt-10 pb-12 px-[35px] md:py-[67px] ${
          isOpen ? "show" : ""
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-describedby="modal-text"
      >
        <h4 className="mb-4">
          {typeOfGame === "vsPlayer"
            ? winner === player1
              ? "Player 1 wins!"
              : "Player 2 wins"
            : winner === player1
            ? "You won!"
            : "Oh no, you lost…"}
        </h4>
        <h2
          className={`flex flex-row flex-nowrap md:text-3xl md:leading-[50px] md:tracking-[2.5px] ${
            winner === "x" ? "text-light-blue" : "text-light-yellow"
          }`}
        >
          {winner === "x" ? (
            <img src="./icon-x.svg" alt="x" width="28" height="28" />
          ) : (
            <img src="./icon-o.svg" alt="o" width="28" height="28" />
          )}
          <span className="ml-2">takes the round</span>
        </h2>
        <div className="w-[306px] mx-auto flex flex-row flex-nowrap justify-center items-center pt-6 md:pt-[31px]">
          <SmallButton
            text="Quit"
            color="silver"
            spaceAfter={true}
            onClick={() => {
              dispatch(closeEndOfRoundModal());
              dispatch(quitGame());
              navigateHome();
            }}
          />
          <SmallButton
            text="Next round"
            color="yellow"
            onClick={() => {
              dispatch(newRound());
              dispatch(closeEndOfRoundModal());
            }}
          />
        </div>
      </div>
    </div>
  );
}
