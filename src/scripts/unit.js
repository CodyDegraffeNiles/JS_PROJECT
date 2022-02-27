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
    let new_x = this.pos[0] + x;
    let new_y = this.pos[1] + y;
    // Check that movement positions are valid on the grid
    if (new_x > 7 ||new_x < 0 || new_y > 7|| new_y < 0 ){
      console.log("invalid move");
    } else {
      this.pos[0] = this.pos[0] + x;
      this.pos[1] = this.pos[1] + y;
    };
  }

  take_damage(amount){
    this.health -= amount;
  }
};

export default Unit;