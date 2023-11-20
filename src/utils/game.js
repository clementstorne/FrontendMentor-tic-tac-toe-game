const selectCell = (grid, index, mark) => {
  if (grid[index] !== "") {
    throw new Error("That cell is already taken");
  } else {
    grid.splice(index, 1, mark);
  }
};

export { selectCell };
