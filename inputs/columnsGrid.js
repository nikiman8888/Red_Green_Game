const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input from  terminal
const  validations = require('../dataValidations/inputValidations.js'); // validate inputs from terminal

function createColumnsGrid (grid,width) {
    // initialize our Generation zero state of the grid
    for (let row = 0; row < grid.length; row++) {    
        // loop while not receive correct inputs
        while(true){
            let currentGridRow = prompt(`Enter a ${row+1} grid row. Numbers should be created with 0-1 with ${width} lengths:  `);
            if(currentGridRow.length === width){
                // if valid data break while loop 
                if(validations.rowNumbersValidation(currentGridRow)){
                    grid[row] = currentGridRow; 
                break;
                }else {
                    console.log('Wrong length or numbers are not 0-1')
                }
                
            }else{
                console.log('Wrong length or numbers are not 0-1')
            }
        }
      }
      return grid;  // return full grid(matrix) with valid values
}

module.exports = createColumnsGrid;