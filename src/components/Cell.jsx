import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Cell(props) {
  const activePlayer = useSelector((state) => state.game.turn);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cell w-24 h-24 md:w-[140px] md:h-[140px] pt-6 px-7 pb-8 md:p-[38px] ${
        props.mark === "" ? "cursor-pointer" : ""
      }`}
      data-testid="cell"
      onClick={() => {
        props.onClick();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && props.mark === "" ? (
        activePlayer === "x" ? (
          <img src="icon-x-hover.svg" alt="X" />
        ) : (
          <img src="icon-o-hover.svg" alt="O" />
        )
      ) : (
        ""
      )}
      {props.mark === "x" ? (
        <img src="icon-x.svg" alt="X" />
      ) : props.mark === "o" ? (
        <img src="icon-o.svg" alt="O" />
      ) : (
        ""
      )}
    </div>
  );
}

Cell.propTypes = {
  mark: PropTypes.oneOf(["x", "o", ""]),
  onClick: PropTypes.func.isRequired,
};
