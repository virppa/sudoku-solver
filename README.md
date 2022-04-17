# sudoku-solver

## To run:
- use main(); on browser console to solve the sudoku seed that is at the moment hardcoded to main.js

## TODO:
- Add HTML/CSS visualization for the solution, instead of the raw text formating
- Add a way for player to input the solution and DOM handling for submitting. The submit should check against the solved grid and inform the player.
- Add a way to create "new" puzzles by manipulating seeds:
  - Rotate the matrix 1-3 times.
  - Mirror against the centerlines.
  - Map all numbers to other numbers ie. 1 <-- swap all --> 3.
  - Shuffle any 2-3 rows or columns that span the same 3 boxes.
  - Or a random combination of these
- Add more seeds with varying degree of difficulty (easy - medium - hard), allow user to generate new puzzles based on UI selection.
