class TargetPoint {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.counter = 0;
    }

    countGreenState(color){
      if( color === "1"){
        this.counter++;
      }
    }

    getGreenCounter (){
      return this.counter;
    }
  }
  
  module.exports = TargetPoint;