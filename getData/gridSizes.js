const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input from  terminal
const  validations = require('../validationsFolder/validations.js'); // validate inputs from terminal

function gridSizes() {   

  let width, height; // declare variables
  let gridSize = prompt("Enter positive width and height of the grid:  "); // get the user input from terminal - grid size
  let splited = gridSize.split(", "); // split the input by comma and space

// check is input correct --> expected array with two elements separated with ", "
  while (true) {
    // if splited array dont have 2 elements the program ask for correct input 
    if (splited.length !== 2) {    
      gridSize = prompt("Please input number comma space number(3, 3):  ");
      splited = gridSize.split(", ");
    } else {    
        // if  splited array has 2 elements, we check are the numbers real 
      if (      
        !validations.isNumber(splited[0]) ||
        !validations.isNumber(splited[1]) ||
        Number(splited[0]) < 0 ||
        Number(splited[1]) < 0 ||
        Number(splited[0]) > 999 ||
        Number(splited[1]) > 999
        
      ) {       
        //if some of the validations fail, we ask for correct input
        gridSize = prompt("Enter a real positive numbers width, height < 1000:  ");
        splited = gridSize.split(", ");

      } else {
        //if validations are good, assigning values and stop the loop
        width = Number(splited[0]); 
        height = Number(splited[1]);
        break;
      }
    }
  }

  return [width, height]; // return validated  width and height
}

module.exports = gridSizes;
