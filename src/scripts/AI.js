

class AI{
  constructor(grid){
    this.grid = grid;
    this.units = [];
  }

  // adds units for the AI to command
  addUnits(){
    let units = this.grid.units.filter(unit => (unit.enemy === true && !(unit instanceof Cover)));
    units.forEach(unit => {this.units.push(unit)});
  }
  // Takes a turn by either shooting at a target or moving to a random location
  takeTurn(){
    this.units.forEach(unit => { 
      let posShots = unit.posssibleMoves("shoot");
      let posMoves = unit.posssibleMoves("move");
      // console.log(posShots);
      // console.log(posMoves);
      // console.log(unit);
      if(posShots.length >= 1){
        unit.shoot(posShots[0]);
      }
      else{
        let randomMove = Math.floor(Math.random() * posMoves.length);
        unit.move(posMoves[randomMove]);
      }
    })
    this.grid.draw();
  };

}

export default AI;
