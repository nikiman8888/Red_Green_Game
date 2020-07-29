const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input in the terminal
const printMatrix = require("./printMatrix");   // return grid (matrix)
const counter = require("./countGreenNeighbours"); // count green neighbour cells of given cell
const fillGridClone = require("./fillGridClone"); // fill the grid clone 
const  validations = require('./inputValidations'); // validate inputs from terminal

function startGame() {
   //--------------------- Accept grid size arguments and validate --------------------
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
  } 
  // ----------------------------Accept and create the Generation Zero state of the grid and validate the inputs -------
  let grid = new Array(height); // create the game grid rows    
 
  for (let row = 0; row < grid.length; row++) {    // intialize our Generation zero state of the grid
    //grid[row] = Math.random().toString(2).substr(2, width);
    while(true){
        let currentGridRow = prompt(`Enter a ${row+1} grid row. Numbers should be created with 0-1 with ${width} length:  `);
        if(currentGridRow.length === width){
            if(validations.rowNumbersValidation(currentGridRow)){
                grid[row] = currentGridRow; //triabva i proverka dali za corektni 4isla
            break;
            }else {
                console.log('Wrong length or numbers are not 0-1')
            }
            
        }else{
            console.log('Wrong length or numbers are not 0-1')
        }
    }
  }
    //-------------Accept the last arguments (coordinates and generation count) and validate inputs -----------------

    let arguments = prompt("Enter the x1 and y1 (column,row) of the point and generationCount wth comma and space: ")
    let splitedArgs = arguments.split(", ");
    let x1Col,y1Row,generations;

    while(true){  
                   
      if (splitedArgs.length !== 3){
        
        arguments = prompt("Wrong! Enter correct x1 and y1 (column,row) of the point and generationCount wth comma and space:  ...(3, 3, 9): ");
        splitedArgs = arguments.split(", ");
        console.log('start')
      }else {
        
        x1Col = splitedArgs[0];
        y1Row = splitedArgs[1];
        generations = splitedArgs[2];
        
        console.log(validations.isCoordinatesInGrid(grid,x1Col,y1Row));
        if(validations.isNumber(x1Col) &&   //if all inputs are real numbers and coordPoits is inside the grid
           validations.isNumber(y1Row) &&
           validations.isNumber(generations) &&
           validations.isCoordinatesInGrid(grid,x1Col,y1Row)){
             console.log('corect')
            break;
        }else{   
          if(validations.isCoordinatesInGrid(grid,x1Col,y1Row))   {
            arguments = prompt("Coordinates are not inside the Grid.Enter correct coordinates and generationCount:  ")
          }  else {
            arguments = prompt(" Enter real numbers x1 and y1 (column,row) of the point and generationCount wth comma and space -->  ...(3, 3, 9): ");
          }                                     
          splitedArgs = arguments.split(", ");
        }
      }
    }

    //return;
  let targetPointRow = y1Row;
  let targetPointCol = x1Col;
  let targetPointGreenCounter = 0;
  for (let index = 0; index < generations; index++) {
    // start iterate generations
    let cloneMatrix = new Array(height) //height
      .fill(null)
      .map(() => new Array(width).fill(null)); // create empty clone grid to fill it with next generation values

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        let greenNeighbours = counter(grid, row, col).toString();
        let currentCell = grid[row][col];
        cloneMatrix = fillGridClone(  // we fill cell by cell the empty clone grid
          currentCell,
          cloneMatrix,
          greenNeighbours,
          row,
          col
        ); 
      }
    }

    grid = cloneMatrix; // old grid state get the new generation state from the cloned grid
    console.log(printMatrix(grid));
    if (grid[targetPointRow][targetPointCol] === "1") { // count the targeted point is  green in the current generation
      targetPointGreenCounter++;
    }
  }
  console.log(`The target point with coordinates [${targetPointCol},${targetPointRow}](column,row) become green ${poitGreenCounter} times for ${generations} generations`);
 
}
startGame();
