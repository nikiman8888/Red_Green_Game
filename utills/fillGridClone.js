const stringChecker = require("./stringChecker"); // check the is array include given string

function fillGridClone(currentCell, gridClone,greenNeighbours,row,col) {

      let redToGreen = ['3', '6'];
      let redToRed = ['0', '1', '2', '4', '5', '7', '8'];
      let greenToRed = ['0', '1', '4', '5', '7', '8'];
      let greenToGreen = ['2', '3', '6'];
      let cloneCell = "";

      if (currentCell === "0") {  // red case
        if (stringChecker(redToGreen,greenNeighbours)){  // if the array includes greenNeigbours we change the cell
          cloneCell = "1";

        }else {
          cloneCell = "0";
        }
       
      } else { //green case
        
        if(stringChecker(greenToRed,greenNeighbours)){
          cloneCell = "0"
        }else{
          cloneCell = "1";
        }
        
      }
      gridClone[row][col] = cloneCell;

      return gridClone;
}

module.exports = fillGridClone;