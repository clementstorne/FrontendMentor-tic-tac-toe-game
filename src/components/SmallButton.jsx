import PropTypes from "prop-types";

export default function SmallButton(props) {
  return (
    <button
      className={`small-btn ${
        props.color === "silver"
          ? "silver-btn-small-shadow bg-silver hover:bg-silver-hover"
          : "yellow-btn-small-shadow bg-light-yellow hover:bg-light-yellow-hover"
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
