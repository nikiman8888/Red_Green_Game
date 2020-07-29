function rowNumbersValidation (numbers) {  // check is our row of grid is created from 0-1 digits
    let arr = ['0','1']
    for (let index = 0; index < numbers.length; index++) {
        let currentDigit = numbers[index];
        if (!arr.includes(currentDigit)){
            return false
        }        
    }
    return true;
}

function isCoordinatesInGrid(grid,column,row) { //check for correct insfe grid coordinates
    
    let rowCondition  = row >=0 && row <= grid.length-1? true:false; // check rowPoint is inside the gridRows
    let columnCondition = column >=0 && column <= grid[0].length-1 ? true:false; //check columnPoint is inside the gridColumns

    if(rowCondition && columnCondition) {
        return true;
    }
    return false;
}
function isNumber (number) { 
    //check is number real
    if(isNaN(number)){
        return false;
    }
    return true;
}
module.exports = { rowNumbersValidation,isCoordinatesInGrid, isNumber }
  
