import PropTypes from "prop-types";

export default function BigButton(props) {
  return (
    <button
      className={`big-btn ${
        props.color === "blue"
          ? "blue-btn-big-shadow bg-light-blue hover:bg-light-blue-hover"
          : "yellow-btn-big-shadow bg-light-yellow hover:bg-light-yellow-hover"
      }  ${props.spaceAfter ? "mb-4" : ""}`}
    >
      {props.text}
    </button>
  );
}

BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  spaceAfter: PropTypes.bool,
};
