import Util from "./utils.js";
import Cover from "./cover.js";

class Unit{
  constructor(options){
    // Position is in [0,0] - 2d array format, is converted mathmatically
    // into the center of a square on the board.
    this.pos = options.pos;
    this.health = options.health;
    this.movementRange = options.movementRange;
    this.shootingRange = options.shootingRange;
    this.shootingPower = options.shootingPower;
    this.enemy = options.enemy;
    this.name = options.name;
    this.actionLeft = false;
    this.grid = "grid"; 
    this.shotSound = new Audio();
    this.shotSound.src = "sounds/shot.wav"
    this.shotSound.volume = .4;
    this.moveSound = new Audio();
    this.moveSound.src = "sounds/move.wav"
    this.moveSound.volume = .4;
  }
  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    // Red tanks for trators
    if (this.enemy){
      let img = document.createElement("IMG");
      let startX = this.pos[0] * 80;
      let startY = this.pos[1] * 80;
      img.onload = function () { ctx.drawImage(img, startX, startY) };;
      img.src = "images/enemy_tank.svg";
    }// Brown tanks for allies
    else{
      let img = document.createElement("IMG");
      let startX = this.pos[0] * 80 - 10;
      let startY = this.pos[1] * 80 - 10
      img.onload = function () { ctx.drawImage(img, startX, startY) };
      img.src = "images/allied_tank.svg";
    };
}
  
  move(pos){
    // Check if a move is valid
    if( this.actionLeft === false){
      alert("Unit has already acted. Deslect this unit (using the button on the right hand side of the grid) and select another.")
      return false;
    }
    let posMoves = this.possibleMoves();
    if (Util.inArray(pos, posMoves)){
      this.moveSound.play();
      this.takeAction();
      this.pos[0] = pos[0];
      this.pos[1] = pos[1];
      return true;
    }
    else{
      alert("Invalid Move. Please select a valid move location");
      return false;
    }
  }

  // Returns an array of possible moves/shoots for the unit
  // Determine which action through the parameter
  possibleMoves(action = "move"){
    let range = action === "move" ? range = this.movementRange : this.shootingRange;
    let posMoves = [];
    directions.forEach(dir => {
      let orgX = this.pos[0];
      let orgY = this.pos[1];
      for (let i = 0; i < range; i++){
        orgX = orgX + dir[0];
        orgY = orgY + dir[1];
        if (this.isValidMove([orgX, orgY]) && !this.grid.occupiedPos([orgX, orgY])){
          // Adds empty position if action is move.
          if (action === "move") { posMoves.push([orgX, orgY]) };
        }
        else if (this.isValidMove([orgX, orgY]) && this.grid.occupiedPos([orgX, orgY])){
        // Adds occupied position if action is shot as well as check for friendly fire/cover 
          let occupyingUnit = this.grid.getUnit([orgX, orgY]);
          if (action === "shoot" && occupyingUnit.enemy !== this.enemy && !(occupyingUnit instanceof Cover))
          {posMoves.push([orgX, orgY])};
          break
        }
        else {
          break;
        }
      };
    })
    return posMoves;
  };

  // Checks to see if move is within the boundries of the gird.
  isValidMove(pos){
    let posX = pos[0];
    let posY = pos[1];
    // Checks if moive is in valid bounds.
    if (posX > 7 || posX < 0 || posY > 7 || posY < 0) {
      return false;
    }
    return true;
  };

  // The unit shoots at target location.
  shoot(pos) {
    // Checks if a unit can act.
    if (this.actionLeft === false) {
      alert("Unit has already acted. Deslect this unit (using the button on  the right hand side of the grid) and select another.")
      return false;
    }
    let posMoves = this.possibleMoves("shoot")
    if (Util.inArray(pos, posMoves)) {
      this.shotSound.play();
      this.takeAction();
      let target = this.grid.getUnit(pos);
      target.takeDamage(this.shootingPower);
      return true;
    }
    else {
      alert("Invalid Shot. Please select a valid shot location.")
      return false;
    }
  };

  // Causes the unit to take damage.
  takeDamage(amount) {
    this.health -= amount;
  };

  // Sets this.grid equal to a specific grid.
  joinGrid(newGrid){
    this.grid = newGrid;
  };

  // Allows for a unit to take an action.
  gainAction(){
    this.actionLeft = true;
    this.grid.actionableUnits.push(this);
  };

  // Disables unit action.
  takeAction() {
    this.actionLeft = false;
    if(this.grid.actionableUnits.includes(this)){
      this.grid.removeFromActionableUnits(this);
    }
  };

  // Checks side of unit.
  isEnemy(){
    return this.enemy === true;
  }

  // Toogle sounds associated with the unit by passing in boolean as a parameter.
  toggleSounds(mute = true){
    this.moveSound.muted = mute;
    this.shotSound.muted = mute;
  }
};

export default Unit;

// Possible directions that an action can be taken in.
const directions = [
  [0,1],
  [0,-1],
  [1,0],
  [-1,0],
  [1,1],
  [-1,-1],
  [1,-1],
  [-1,1]
]