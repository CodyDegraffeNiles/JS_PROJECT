class Unit{
  constructor(options){
    // Position is in [0,0] - 2d array format, is converted mathmatically
    // into the center of a square on the board.
    this.pos = options.pos;
    this.health = options.health;
    this.movementRange = options.movementRange;
    this.shootingRange = options.shootingRange;
    this.enemy = options.enemy;
    this.name = options.name;
    this.movementLeft = false;
  }
  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    // Yellow for friendly units and green for enemy forces.
    let color = "yellow";
    if (this.enemy){color = "green"};
    ctx.fillStyle = color;
     // Get the center of the square of the units position
    let center_x = this.pos[0] * 80 + 40;
    let center_y = this.pos[1] * 80 + 40;
    ctx.beginPath();
    ctx.arc(center_x, center_y, 20, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  move([x,y]){
    // Check if move is within movement range.]
    if (this.validMove([x,y])){
      this.pos[0] = x;
      this.pos[1] = y;
    }
    else{
      alert("Invalid Move");
    }
  }

  // Returns an array of possible moves for the unit. Will be important for the AI
  posssibleMoves(){
    let posMoves = [];
    directions.forEach(dir =>{
      let orgX = this.pos[0];
      let orgY = this.pos[1];
      for(let i = 0; i < this.movementRange; i++){
        orgX = orgX + dir[0];
        orgY = orgY + dir[1];
        if (orgX <= 7 && orgX >= 0 && orgY <= 7 && orgY >= 0){
          /// Also need To check if position is occupied;
          posMoves.push([orgX, orgY]);
        }
      };
    })
    return posMoves;
  };

  validMove(move){
    let moveX = move[0];
    let moveY = move[1];
    // Check if it is in valid bounds.
    if (moveX > 7 || moveX < 0 || moveY > 7 || moveY < 0){
      return false;
    }
    if (Math.abs(this.pos[0] - moveX) > this.movementRange || Math.abs(this.pos[1] - moveY) > this.movementRange){
      return false;
    }
    return true;
  }

  // Causes the unit to take damage
  takeDamage(amount) {
    this.health -= amount;
  }
};

export default Unit;


// Possible directions that can be taken in movement.
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