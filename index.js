const printMatrix = require("./utills/printMatrix"); // return grid (matrix)
const countGreenNeighbours = require("./utills/countGreenNeighbours"); // count green neighbour cells of given cell
const fillGridClone = require("./utills/fillGridClone"); // fill the grid clone

//accept Grid width and height from terminal and return validated width and height
const inputGrid = require("./inputs/gridSize.js");
//aceppt rows from terminal and return filled Grid
const createColumnsGrid = require("./inputs/columnsGrid.js");
//accept coordinates and generations count from terminal and return valid data(x1,y1,generations)
const coordAndGeneration = require("./inputs/coordAndGeneration.js");

function startGame() {
  //--------------------- Accept Grid size arguments and validate --------------------

  let sizes = inputGrid();
  let width = sizes[0];
  let height = sizes[1];

  // ----------------------------Accept and create the Generation Zero state(Grid) and validate -------

  let grid = new Array(height); // create the game grid rows
  grid = createColumnsGrid(grid, width); // returned validated grid(matrix);

  //-------------Accept the last arguments (coordinates and generation count) and validate inputs -----------------

  let validArgs = coordAndGeneration(grid); // return valid args
  let x1Col = validArgs[0];
  let y1Row = validArgs[1];
  let generations = validArgs[2];

  let targetPointRow = y1Row;
  let targetPointCol = x1Col;
  let targetPointGreenCounter = 0;
  // print Generation Zero state
  console.log(`Generation Zero`);
  console.log(printMatrix(grid));

  for (let generationZero = 0; generationZero < generations; generationZero++) {
    // start iterate generations
    let cloneMatrix = new Array(height) // create empty clone grid to fill it with next generation values
      .fill(null)
      .map(() => new Array(width).fill(null));

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        let greenNeighbours =  countGreenNeighbours(grid, row, col).toString();
        let currentCell = grid[row][col];
        cloneMatrix = fillGridClone(
          // we fill cell by cell the empty clone grid
          currentCell,
          cloneMatrix,
          greenNeighbours,
          row,
          col
        );
      }
    }
    // old Grid state get the new generation state from the cloned grid
    grid = cloneMatrix;
    console.log(`${generationZero + 1} Generation`); // print each generation state
    console.log(printMatrix(grid));

    // count the targeted point is  green in the current generation
    if (grid[targetPointRow][targetPointCol] === "1") {
      targetPointGreenCounter++;
    }
  }
  console.log(
    `The target point with coordinates [${targetPointCol},${targetPointRow}](column, row) becomes green ${targetPointGreenCounter} times for ${generations} generations.\n`
  );
  
  //'If you want to count the Generation Zero state and the Targeted Point(cell) is green, the result will be + 1
 
}
startGame();
