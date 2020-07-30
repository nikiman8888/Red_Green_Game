class Matrix {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.gameGrid = new Array(height)
      .fill(null)
      .map(() => new Array(width).fill(null)); // create empty game Grid by default
  }

   //fill given cell of gameGridProperty
  createCellValue(digit, row, col) {
    this.gameGrid[row][col] = digit;
  }

  //count green neighbours of cell
  countGreenNeighboursCell(row, col) {
    let rowLimit = this.gameGrid.length - 1; 
    let columnLimit = this.gameGrid[0].length - 1; 
    let countGreenNeigbours = 0;

    //iterate the all neiigbours of the current cell
    for (let x = Math.max(0, row - 1); x <= Math.min(row + 1, rowLimit); x++) {
      for (let y = Math.max(0, col - 1);y <= Math.min(col + 1, columnLimit); y++){
        if (x !== row || y !== col) {
          if (this.gameGrid[x][y] === "1") {
            countGreenNeigbours++;
          }
        }
      }
    }
    return countGreenNeigbours; // return green neighbours count of current cell
  }

  //check the start color of cell and transform to other color if needed
  transformColorCell (countGreenNeigbours,row,col) {
    let redToGreen = [3, 6];  //transform condition red to green 
    let greenToRed = [0, 1, 4, 5, 7, 8]; // transform condition green to red
    let currentCell = this.gameGrid[row][col]; // get the searched cell

    if(currentCell === "0"){     //if start color is red
      redToGreen.includes(countGreenNeigbours)?currentCell= "1":currentCell = "0"; // transform or not transform to green
    }else {                       //if start color is green
      greenToRed.includes(countGreenNeigbours)? currentCell = "0":currentCell = "1";  // transform or not transform to red
    }

    return currentCell; // return transformed color cell
    
  }

   // return string gameGrid prop
  printGameGrid() {
 
    let printGrid = "";
    for (let row = 0; row < this.gameGrid.length; row++) {
      let currentRow = this.gameGrid[row];
      printGrid += currentRow.join("");
      printGrid += "\n";
    }
    return printGrid.trim()+'\n';
  }
}

module.exports = Matrix;
