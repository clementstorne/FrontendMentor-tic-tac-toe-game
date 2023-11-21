import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modalSlice.js";

import SmallButton from "./SmallButton";

export default function RestartModal() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);

  function toggleModal() {
    dispatch(closeModal());
  }

  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      dispatch(closeModal());
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
        className={`modal ${isOpen ? "show" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-describedby="modal-text"
      >
        <h2>Restart game?</h2>
        <div className="flex flex-row flex-nowrap justify-between items-center pt-6">
          <SmallButton text="No, cancel" color="silver" onClick={toggleModal} />
          <SmallButton text="Yes, restart" color="yellow" />
        </div>
      </div>
    </div>
  );
}
