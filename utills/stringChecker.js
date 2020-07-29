
function checker (array,givenString) {
    for (let index = 0; index < array.length; index++) {
        let currentElement = array[index];

        if(currentElement === givenString){
            return true;
        }  
    }
    return false;
}

module.exports = checker;