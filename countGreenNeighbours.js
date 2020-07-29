function counter (grid,row,col) {
    let rowLimit = grid.length-1; //because the start index is 0 
    let columnLimit = grid[0].length-1;  //because the start index is 0
    let countGreenNeigbours = 0;
   // console.log(grid.length-1)

    for(let x = Math.max(0, row-1); x <= Math.min(row+1, rowLimit); x++) {   // here we find the all neiigbours of the current cell 
      for(let y = Math.max(0, col-1); y <= Math.min(col+1, columnLimit); y++) {
        if(x !== row || y !== col) {
            if(grid[x][y] === '1'){
                countGreenNeigbours++;
            }
          //console.log(grid[x][y]);
        }
      }   
    }
    return countGreenNeigbours;
}

module.exports = counter;