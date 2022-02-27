import Grid from "./src/scripts/grid";

let tank2 = new Unit({
  pos: [0, 1],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 40,
  movementRange: 2,
  shootingRange: 2,
  shootingPower: 15,
  enemy: false,
});

let tank = new Unit({
  pos: [0, 2],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 40,
  movementRange: 2,
  shootingRange: 2,
  shootingPower: 15,
  enemy: true,
});

let game = new Grid();
game.addNewUnit(tank);
game.addNewUnit(tank2);
game.draw();


         // directions.forEach(dir =>{
    //   let orgX = this.pos[0];
    //   let orgY = this.pos[1];
  //     for(let i = 0; i < range; i++){
  //       orgX = orgX + dir[0];
  //       orgY = orgY + dir[1];
  //       // check if in valid bounds and position is not occupied for move.
  //       if (this.isValidMove([orgX, orgY]) && !this.grid.occupiedPos([orgX, orgY])){
  //         if (action === "move") {posMoves.push([orgX, orgY])};
  //       }
  //       else if (this.isValidMove([orgX, orgY]) && this.grid.occupiedPos()) {
  //         // adds occupied position if action is shot since this is a valid shooting location.
  //         if (action === "shoot"){posMoves.push([orgX, orgY])};
  //         break
  //       }
  //       else {
  //         break
  //       }
  //       };
  //
  //   return posMoves;