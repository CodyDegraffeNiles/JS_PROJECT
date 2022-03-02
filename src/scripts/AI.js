

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

  // after each turn resest the AI's units so that if they are destroyed they dont linger.
  emptyUnits(){
    this.units = [];
  }
  // Takes a turn with each unit one by one
  takeTurn(){
    this.units.forEach(unit => {
      this.commandUnit(unit);
    })
  };

    // Commands a unit to either shoot at a target or move to a random location
    commandUnit(unit){
      let posShots = unit.posssibleMoves("shoot");
      let posMoves = unit.posssibleMoves("move");
      if (posShots.length >= 1) {
        unit.shoot(posShots[0]);
        this.grid.checkUnits();
      }
      else {
        let randomMove = Math.floor(Math.random() * posMoves.length);
        unit.move(posMoves[randomMove]);
      }
    };

}

export default AI;
