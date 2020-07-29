const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input from  terminal
const validations = require("../dataValidations/inputValidations.js"); // validate inputs from terminal

function coordAndGeneration(grid) {
  //recieve data
  let arguments = prompt(
    "Enter the x1 and y1 (column,row) of the point and generationCount wth comma and space: "
  );
  let splitedArgs = arguments.split(", ");
  let x1Col, y1Row, generations; //declare variables

  // loop untill recieve correct inputs
  while (true) {
    if (splitedArgs.length !== 3) {
      arguments = prompt(
        "Wrong! Enter correct x1 and y1 (column,row) of the point and generationCount wth comma and space:  ...(3, 3, 9): "
      );
      splitedArgs = arguments.split(", ");
    } else {
        // pass first validation and assign values
      x1Col = splitedArgs[0]; 
      y1Row = splitedArgs[1];
      generations = splitedArgs[2];

      //if all inputs are valid break the loop
      if (
        validations.isNumber(x1Col) &&
        validations.isNumber(y1Row) &&
        validations.isNumber(generations) &&
        validations.isCoordinatesInGrid(grid, x1Col, y1Row)
      ) {
        break;

      } else {
          // continue to ask for correct data
        if (!validations.isCoordinatesInGrid(grid, x1Col, y1Row)) {
          arguments = prompt(
            "Coordinates are not inside the Grid.Enter correct coordinates and generationCount:  "
          );
        } else {
          arguments = prompt(
            " Enter real numbers x1 and y1 (column,row) of the point and generationCount wth comma and space -->  ...(3, 3, 9): "
          );
        }
        splitedArgs = arguments.split(", ");
      }
    }
  }
  return [x1Col, y1Row, generations]; // return valid data
}

module.exports = coordAndGeneration;
