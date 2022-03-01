

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

    })
  }

}

export default AI;
