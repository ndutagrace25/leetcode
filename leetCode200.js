// Given an m x n 2d map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are surrounded by water.

const dfs = (grid, i, j) => {
  let rows = grid.length;
  let columns = grid[0].length;
  if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === "0") {
    return;
  }

  grid[i][j] = "0"; //mark as visited

  dfs(grid, i - 1, j); //up
  dfs(grid, i + 1, j); //down
  dfs(grid, i, j - 1); //left
  dfs(grid, i, j + 1); //right
};

const numberOfIslands = (grid) => {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let rows = grid.length;
  let columns = grid[0].length;

  let islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(grid, i, j);
      }
    }
  }
  return islands;
};

console.log(
  numberOfIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

console.log(
  numberOfIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
