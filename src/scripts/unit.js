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
    this.grid = "grid";
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
    // Check if move is valid]
    let posMoves = this.posssibleMoves();
    if (posMoves.includes([x,y])){
      this.pos[0] = x;
      this.pos[1] = y;
    }
    else{
      alert("Invalid Move");
    }
  }

  // Returns an array of possible moves for the unit; Important for the AI
  posssibleMoves(){
    let posMoves = [];
    directions.forEach(dir =>{
      let orgX = this.pos[0];
      let orgY = this.pos[1];
      for(let i = 0; i < this.movementRange; i++){
        orgX = orgX + dir[0];
        orgY = orgY + dir[1];
        // check if in valid bounds and position is not occupied.
        if (this.isValidMove([orgX, orgY]) && !this.grid.occupiedPos([orgX, orgY])){
          posMoves.push([orgX, orgY]);
        }
        else {
          break
        };
      };
    })
    return posMoves;
  };

  isValidMove(move){
    let moveX = move[0];
    let moveY = move[1];
    // Check if it is in valid bounds.
    if (moveX > 7 || moveX < 0 || moveY > 7 || moveY < 0) {
      return false;
    }
    return true;
  }

  // Causes the unit to take damage
  takeDamage(amount) {
    this.health -= amount;
  }

  // sets this.grid equal to a specific grid
  joinGrid(newGrid){
    this.grid = newGrid;
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