const GRIDSIZE = 9;
let board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function isRowValid(board, row, numberInput) {
  for (let i = 0; i < GRIDSIZE; i++) {
    if (board[row][i] == numberInput) return false;
  }
  return true;
}

function isColumnValid(board, column, numberInput) {
  for (let i = 0; i < GRIDSIZE; i++) {
    if (board[i][column] == numberInput) return false;
  }
  return true;
}

function isBoxValid(board, row, column, numberInput) {
  const rowStartPoint = row - (row % 3);
  const columnStartPoint = column - (column % 3);
  for (let i = rowStartPoint; i < rowStartPoint + 3; i++) {
    for (let j = columnStartPoint; j < columnStartPoint + 3; j++) {
      if (board[i][j] == numberInput) return false;
    }
  }
  return true;
}

function isPlacementValid(board, row, column, numberInput) {
  if (
    isBoxValid(board, row, column, numberInput) &&
    isColumnValid(board, column, numberInput) &&
    isRowValid(board, row, numberInput)
  )
    return true;
  return false;
}

function solve(board, row, column) {
  if (row == GRIDSIZE - 1 && column == GRIDSIZE) {
    return true;
  }
  if (column == GRIDSIZE) {
    row++;
    column = 0;
  }
  if (board[row][column] != 0) {
    return solve(board, row, column + 1);
  }

  for (let numberInput = 1; numberInput < 10; numberInput++) {
    if (isPlacementValid(board, row, column, numberInput)) {
      board[row][column] = numberInput;
      if (solve(board, row, column + 1)) {
        return true;
      }
      board[row][column] = 0;
    }
  }
  return false;
}

function print(board) {
  for (let i = 0; i < GRIDSIZE; i++) {
    if (i % 3 == 0) document.write("-----------------------<br>");
    for (let j = 0; j < GRIDSIZE; j++) {
      if (j % 3 == 0) {
        document.write("|");
      }
      document.write(board[i][j] + " ");
      if (j == 8) {
        document.write("|");
      }
    }
    document.write("<br>");
    if (i == 8) {
      document.write("-----------------------<br>");
    }
  }
}

function main() {
  if (solve(board, 0, 0)) {
    print(board);
  } else document.write("No solution exists!");
}
