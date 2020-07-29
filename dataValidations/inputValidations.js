// check is our row of the grid is created from 0-1 digits
function rowNumbersValidation(numbers) {
  let arr = ["0", "1"];
  for (let index = 0; index < numbers.length; index++) {
    let currentDigit = numbers[index];
    if (!arr.includes(currentDigit)) {
      return false;
    }
  }
  return true;
}

//check for correct inside grid coordinates
function isCoordinatesInGrid(grid, column, row) {
  let rowCondition = row >= 0 && row <= grid.length - 1 ? true : false; // check rowPoint is inside the gridRows
  let columnCondition =
    column >= 0 && column <= grid[0].length - 1 ? true : false; //check columnPoint is inside the gridColumns

  if (rowCondition && columnCondition) {
    return true;
  }
  return false;
}

//check is number real
function isNumber(number) {
  if (isNaN(number)) {
    return false;
  }
  return true;
}

module.exports = { rowNumbersValidation, isCoordinatesInGrid, isNumber };
