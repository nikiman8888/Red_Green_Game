// check is our row of the grid is created from 0-1 digits
function isRowOneZeroNumbers(numbers) {
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
function isCoordinatesInGrid(grid,x1Col, y1Row) {
  let conditionY = y1Row >= 0 && y1Row <= grid.length - 1 ? true : false; // check  yPoint is inside the gridRows
  let conditionX = x1Col >= 0 && x1Col <= grid[0].length - 1 ? true : false; //check xPoint is inside the gridColumns
    
  if (conditionY && conditionX) {
    return true;
  }
  return false;
}

//check is real digit
function isNumber(number) {
  if (isNaN(number)) {
    return false;
  }
  return true;
}

module.exports = { isRowOneZeroNumbers, isCoordinatesInGrid, isNumber };
