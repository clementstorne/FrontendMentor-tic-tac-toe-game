import PropTypes from "prop-types";

export default function ScoreDisplay(props) {
  const defineTitle = (type, typeOfGame, player) => {
    if (type === "x") {
      if (typeOfGame === "vsCPU") {
        if (player === "player1") {
          return "X (YOU)";
        } else {
          return "X (CPU)";
        }
      }
      if (typeOfGame === "vsPlayer") {
        if (player === "player1") {
          return "X (P1)";
        } else {
          return "X (P2)";
        }
      }
    } else if (type === "o") {
      if (typeOfGame === "vsCPU") {
        if (player === "player1") {
          return "O (YOU)";
        } else {
          return "O (CPU)";
        }
      }
      if (typeOfGame === "vsPlayer") {
        if (player === "player1") {
          return "O (P1)";
        } else {
          return "O (P2)";
        }
      }
    } else {
      return "TIES";
    }
  };
  const title = defineTitle(props.type, props.typeOfGame, props.player);

  return (
    <div
      className={`score text-dark-navy py-2 px-5 md:py-3 md:px-11 ${
        props.type === "x"
          ? "bg-light-blue "
          : props.type === "o"
          ? "bg-light-yellow "
          : "bg-silver"
      }  `}
    >
      <p className="block"> {title}</p>
      <h3>{props.score}</h3>
    </div>
  );
}

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["x", "o", "ties"]),
  typeOfGame: PropTypes.oneOf(["vsCPU", "vsPlayer"]),
  player: PropTypes.oneOf(["player1", "player2"]),
};
