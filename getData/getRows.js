const prompt = require("prompt-sync")({ sigint: true }); // // with prompt we can read user input from  terminal
const validations = require("../validationsFolder/validations.js"); // validate inputs from terminal

function getRows(height, width) {
  let rowsContainer = [];
    // loop to  "height of Grid " to recieve and validate each row from terminal
  for (let row = 0; row < height; row++) {
     // loop while not receive correct inputs
    while (true) {
      let currentRow = prompt(
        `Enter a ${
          row + 1
        } Grid row. Numbers should be created with 0 or 1, no spaces, with ${width} lengths:  `
      );
      if (currentRow.length === width) {
        // if valid data, fill the rowsContainer and break the  while loop
        if (validations.isRowOneZeroNumbers(currentRow)) {
          rowsContainer.push(currentRow);
          break;
        } else {
          console.log("Wrong length or numbers are not 0 or 1");
        }
      } else {
        console.log("Wrong length or numbers are not 0 or 1");
      }
    }
  }
  return rowsContainer; // return array - validated inputs from terminal
}

module.exports = getRows;
