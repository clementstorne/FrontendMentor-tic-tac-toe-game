import PropTypes from "prop-types";

// import { useDispatch } from "react-redux";
// import { openModal } from "../store/modalSlice";

export default function ResetButton(props) {
  // const handleClick = () => {
  //   props.onClick();
  // };

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
