import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeResetModal } from "../store/resetModalSlice.js";
import { newRound } from "../store/gameSlice.js";

import SmallButton from "./SmallButton";

export default function RestartModal() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.resetModal.isOpen);

  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      dispatch(closeResetModal());
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div
        className={`modal py-[61px] px-[35px] md:py-[67px] ${
          isOpen ? "show" : ""
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-describedby="modal-text"
      >
        <h2 className="md:text-3xl md:leading-[50px] md:tracking-[2.5px]">
          Restart game?
        </h2>
        <div className="w-[306px] mx-auto flex flex-row flex-nowrap justify-between items-center pt-6 md:pt-[31px]">
          <SmallButton
            text="No, cancel"
            color="silver"
            onClick={() => dispatch(closeResetModal())}
          />
          <SmallButton
            text="Yes, restart"
            color="yellow"
            onClick={() => {
              dispatch(newRound());
              dispatch(closeResetModal());
            }}
          />
        </div>
      </div>
    </div>
  );
}
