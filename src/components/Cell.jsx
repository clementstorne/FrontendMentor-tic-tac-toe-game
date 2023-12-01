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
      }
      ${
        props.winningCell
          ? props.mark === "x"
            ? "bg-light-blue"
            : "bg-light-yellow"
          : "bg-semi-dark-navy"
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
          <img src="icon-x-outline.svg" alt="X" />
        ) : (
          <img src="icon-o-outline.svg" alt="O" />
        )
      ) : (
        ""
      )}
      {props.mark === "x" ? (
        props.winningCell ? (
          <img src="icon-x-darkNavy.svg" alt="X" />
        ) : (
          <img src="icon-x.svg" alt="X" />
        )
      ) : props.mark === "o" ? (
        props.winningCell ? (
          <img src="icon-o-darkNavy.svg" alt="O" />
        ) : (
          <img src="icon-o.svg" alt="O" />
        )
      ) : (
        ""
      )}
    </div>
  );
}

Cell.propTypes = {
  mark: PropTypes.oneOf(["x", "o", ""]),
  onClick: PropTypes.func.isRequired,
  winningCell: PropTypes.bool.isRequired,
};
