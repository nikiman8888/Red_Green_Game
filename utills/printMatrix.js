function print (array) {
    let result = '';
    for (let row = 0; row < array.length; row++) {
      result += array[row]+'\n';    
    }
    return result;
}
module.exports = print;