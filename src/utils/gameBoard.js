const createGameBoard = () => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push("");
  }
  return arr;
};

export { createGameBoard };
