export default function TurnDisplay(props) {
  return (
    <div className="turn w-24 h-10 md:w-[140px] md:h-[52px] pt-2.5 md:pt-[13px] px-[15px] md:px-[30px] pb-3.5 md:pb-[19px] ">
      <img
        src={
          props.turn === "x"
            ? "icon-x-silver-small.svg"
            : "icon-o-silver-small.svg"
        }
        alt={`${props.turn === "x" ? "X" : "O"}`}
        className="mr-[9px]"
      />
      <p className="uppercase">turn</p>
    </div>
  );
}

TurnDisplay.propTypes = {
  turn: "x" | "o",
};
