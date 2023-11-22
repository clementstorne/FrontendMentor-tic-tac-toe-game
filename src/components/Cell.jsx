import PropTypes from "prop-types";

export default function Cell(props) {
  return (
    <div
      className={`cell w-24 h-24 md:w-[140px] md:h-[140px] pt-6 px-7 pb-8 md:p-[38px] ${
        props.mark === "" ? "cursor-pointer" : ""
      }`}
      data-testid="cell"
      onClick={props.onClick}
    >
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
