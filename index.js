const prompt = require("prompt-sync")({ sigint: true }); // // with propmp we can read user input in the terminal
const printMatrix = require("./printMatrix");
const counter = require("./countGreenNeighbours");
const fillGridClone = require("./fillGridClone");
const  rowNumbersValidation = require('./inputValidations');

function startGame() {
    let width,height; 
    let gridSize = prompt("Enter width and height of the grid:  ");  // get the user input grid size
    let splited = gridSize.split(", ");
  while (true) {
    if(splited.length !== 2){      // check is the input correct,expected array with two elements separated with ", "
        gridSize = prompt("Please input: number comma space number(3, 3):  ");
        splited = gridSize.split(", ");
    }else{
        if (isNaN(splited[0]) || isNaN(splited[1])) {  // if array is correct check the values in the array are real numbers
            gridSize = prompt("Enter a real numbers width, height:  ");
            splited = gridSize.split(", ");
        }else{
            width = Number(splited[0]);  // here we get the real width and height of the grid
            height = Number(splited[1]);
            break;
        }
    }
  } // dotuk e gotovo 
  
  let grid = new Array(height); // create the game grid rows       // moje za classa da se iznese
  //let searchedRow = coordinates[1];
  //let searchedCol = coordinates[0];

  for (let row = 0; row < grid.length; row++) {    // intialize our Generation zero state of the grid
    //grid[row] = Math.random().toString(2).substr(2, width);
    while(true){
        let currentGridRow = prompt(`Enter a ${row+1} grid row. Numbers should be created with 0-1 with ${width} length:  `);
        if(currentGridRow.length === width){
            if(rowNumbersValidation(currentGridRow)){
                grid[row] = currentGridRow; //triabva i proverka dali za corektni 4isla
            break;
            }else {
                console.log('Wrong width or numbers are not 0-1')
            }
            
        }else{
            console.log('Wrong width or numbers are not 0-1')
        }
    }
    // get user input for the row //0010
  }
  console.log(printMatrix(grid));
  return;
// DOOTUK TRIABVA DA E VIARNO

  let poitGreenCounter = 0;
  for (let index = 0; index < generation; index++) {
    // start iterate generations
    let cloneMatrix = new Array(3) //height
      .fill(null)
      .map(() => new Array(3).fill(null)); // create empty clone grid to fill it with next generation values

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        let greenNeighbours = counter(grid, row, col).toString();
        let currentCell = grid[row][col];
        cloneMatrix = fillGridClone(
          currentCell,
          cloneMatrix,
          greenNeighbours,
          row,
          col
        ); // here we fill each cell of the cloned grid
      }
    }

    grid = cloneMatrix;
    console.log(printMatrix(grid));
    if (grid[searchedRow][searchedCol] === "1") {
      poitGreenCounter++;
    }
  }
  console.log(poitGreenCounter);

  //console.log( printMatrix(cloneMatrix));
  //console.log(typeof(printMatrix(cloneMatrix)));
}

startGame();
