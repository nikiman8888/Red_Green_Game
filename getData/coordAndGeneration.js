const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input from  terminal
const validations = require("../validationsFolder/validations.js"); // validate inputs from terminal

function getCoordGeneration(grid) {
  let x1Col, y1Row, generations; //declare variables

  // loop untill recieve correct inputs
  while (true) {
      let arguments = prompt(
        "Enter correct x1 and y1 of the target point and generation with comma and space -->3, 3, 9<--sample: "
      );
      let splitedArgs = arguments.split(", ");

    if (splitedArgs.length !== 3) {
      continue;

    } else {
      // pass first validation and assign values
      x1Col = splitedArgs[0];
      y1Row = splitedArgs[1];
      generations = splitedArgs[2];

      //validate all arguments 
      if (
        validations.isNumber(x1Col) &&
        validations.isNumber(y1Row) &&
        validations.isNumber(generations) &&
        validations.isCoordinatesInGrid(grid, x1Col, y1Row)
      ) {
        break;
      } else {
        // if not valid continue to accept data from terminal
        if (!validations.isCoordinatesInGrid(grid, x1Col, y1Row)) {
          arguments = prompt(
            "Coordinates are not inside the Grid.Enter correct coordinates and generation with comma and space between:  "
          );
        } else {
          arguments = prompt(
            "Enter real numbers x1 and y1 of the target point and generation wth comma and space-->3, 3, 9<--sample: "
          );
        }
      }
    }
  }
  return [x1Col, y1Row, generations]; // return array of valid data 
}

module.exports = getCoordGeneration;
