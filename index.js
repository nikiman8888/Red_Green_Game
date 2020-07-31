//accept Grid width and height from terminal and return array with validated width and height
const gridSizes = require("./getData/gridSizes.js");
//aceppt rows from terminal and return array valid data (rows)
const getRows = require("./getData/getRows.js");
//accept coordinates and generations count from terminal and return valid data(x1,y1,generations)
const coordAndGeneration = require("./getData/coordAndGeneration.js");
// import Matrix class
const Matrix = require('./classFolder/Matrix.js')
//import TargetPoint class 
const TargetPoint = require('./classFolder/TargetPoint.js'); 

function startGame() {
  //Accept and validate Grid size arguments from terminal 
  let sizes = gridSizes(); 
  let width = sizes[0];
  let height = sizes[1];

  //Accept and validate rows of the Grid from terminal
  let validatedRows = getRows(height, width); 
  let matrix = new Matrix(height,width); 
 
  //Start to create Generation Zero state in matrix.gameGrid property
    for (let row = 0; row < validatedRows.length; row++) {
        let currentRow = validatedRows[row];
        for (let col = 0; col < currentRow.length; col++) {
            let currentChar = currentRow[col];
            matrix.createCellValue(currentChar,row,col); //fill each cell of the gameGrid prop with values           
        }     
    }
    
  //Accept and validate last arguments (x1,y1,generations) from terminal
  let validArgs = coordAndGeneration(matrix.gameGrid); 
  let targetPointX = validArgs[0];
  let targetPointY = validArgs[1];
  let generations = validArgs[2];

  let targetedPoint = new TargetPoint(targetPointX,targetPointY); //create targeted Point 
  
  console.log(`Generation Zero`);  // print the Generation Zero state
  console.log(matrix.printGameGrid());

// start iterate generations
  for (let generationZero = 0; generationZero < generations; generationZero++) {
    //create a new Matrix obj to fill with new generation state
    let cloneMatrix = new Matrix(height,width) 
     
    // iterate each cell of current generation state(gameGrid) and fill cloneMatrix with new generation values
    for (let row = 0; row < matrix.gameGrid.length; row++) {
        let gridCurrentRow =  matrix.gameGrid[row];
      for (let col = 0; col < gridCurrentRow.length; col++) {
        let greenNeighbours = matrix.countGreenNeighboursCell( row, col) 
        let transformedCell = matrix.transformColorCell(greenNeighbours,row,col);
        cloneMatrix.createCellValue(transformedCell,row,col);            
      }
    }
    // assign the new generation state to current state
    matrix.gameGrid = cloneMatrix.gameGrid; 
    // be aware that x mean horizontal (columns), y mean  vertical (row) of Grid  on condition
    let getTargetedCellValue = matrix.gameGrid[targetedPoint.y][targetedPoint.x];
    //count every time the cell has green color
    targetedPoint.countGreenState(getTargetedCellValue);

    console.log(`${generationZero + 1} Generation`); 
    console.log(matrix.printGameGrid());
  }

  console.log(
    `The targeted point with coordinates [${targetedPoint.x},${targetedPoint.y}](column, row) becomes green ${targetedPoint.getGreenCounter()} times for ${generations} generations.\n`
  ); 
  //'If you count the Generation Zero state and the Targeted Point(cell) is green, the result will be + 1
}
startGame();
