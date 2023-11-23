import PropTypes from "prop-types";

export default function ResetButton(props) {
  return (
    <button
      className="absolute right-0 w-10 h-10 p-3 md:w-[54px] md:h-[54px] md:p-4 reset-btn bg-silver hover:bg-silver-hover"
      onClick={props.onClick}
    >
      <img src="./icon-reset.svg" alt="Restart the round" />
    </button>
  );
}

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
