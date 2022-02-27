class Unit{
  constructor(options){
    // Position is in [0,0] - 2d array format, is converted mathmatically
    // into the center of a square on the board.
    this.pos = options.pos;
    this.canvas = options.canvas;
    this.health = options.health;
    this.movementRange = options.movementRange;
    this.shootingRange = options.shootingRange;
    this.enemy = options.enemy;
  }

  draw(){
    let ctx = this.canvas.getContext("2d");
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
    if (new_x > 5 ||new_x < 0 || new_y > 5 || new_y < 0 ){
      console.log("invalid move");
    } else {
      this.pos[0] = this.pos[0] + x;
      this.pos[1] = this.pos[1] + y;
    };

  }
  //creates the units necessary for the level of the game
    initalizeLevel1(){
      let friendly1 = new Unit({
        pos: [5, 4],
        canvas: (document.getElementsByClassName("game-board"))[0],
        health: 100,
        movementRange: 2,
        shootingRange: 2,
        enemy: false,
        name: "Ajax"
      });

      let friendly2 = new Unit({
        pos: [5, 2],
        canvas: (document.getElementsByClassName("game-board"))[0],
        health: 100,
        movementRange: 2,
        shootingRange: 2,
        enemy: false,
        name: "Renektus"
      });

      let enemy1 = Unit({
        pos: [1, 1],
        canvas: (document.getElementsByClassName("game-board"))[0],
        health: 50,
        movementRange: 2,
        shootingRange: 2,
        enemy: true,
        name: "DemonaKilla"
      })

      let enemy2 = new Unit({
        pos: [3, 5],
        canvas: (document.getElementsByClassName("game-board"))[0],
        health: 50,
        movementRange: 2,
        shootingRange: 2,
        enemy: true,
        name: "Tuska"
      })
    }
  };


export default Unit;

/// Example object for testing purposes

new Unit({
  pos: [4,4],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 40,
  movementRange: 2,
  shootingRange: 2,
  enemy: false
})