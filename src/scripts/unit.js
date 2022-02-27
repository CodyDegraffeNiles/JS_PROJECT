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
    // Check if slot is within movement range.
    let possMoves = this.posMoves();
    let new_x = this.pos[0] + x;
    let new_y = this.pos[1] + y;
    if (possMoves.includes([new_x, new_y])){
      this.pos[0] = this.pos[0] + x;
      this.pos[1] = this.pos[1] + y;
    }
    else{
      alert("Invalid Move");
    }
  }

  // Causes the unit to take damage
  takeDamage(amount){
    this.health -= amount;
  }

  // Returns an array of possible moves for the unit.
  possMoves(){
    let posMoves = [];
    let orgX = this.pos[0];
    let orgY = this.pos[1];
    directions.forEach(dir =>{
      for(let i = 0; i < this.movementRange; i++){
        let newX = orgX + dir[0];
        let newY = orgY + dir[1];
        if (newX <= 7 && newX >= 0 && newY <= 7 && newY >= 0){
          posMoves.push([newX, newY]);
        }
      };
    })
    console.log(posMoves);
  }
};

export default Unit;


//
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