function rowNumbersValidation (numbers) {  // check is aour row of grid is created from 0-1 digits
    let arr = ['0','1']
    for (let index = 0; index < numbers.length; index++) {
        let currentDigit = numbers[index];
        if (!arr.includes(currentDigit)){
            return false
        }        
    }
    return true;
}
module.exports = 
    rowNumbersValidation;
