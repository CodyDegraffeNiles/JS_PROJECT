/// How to draw cover

// draw_cover(){
//   const canvas = (document.getElementsByClassName('game-board'))[0];
//   const ctx = canvas.getContext('2d');
//   ctx.fillStyle = "black";
//   ctx.beginPath();
//   let top_x = this.pos[0] * 80;
//   let top_y = this.pos[0] * 80 + 20
//   ctx.fillRect(top_x, top_y, 80, 40)
//   ctx.stroke();
// }

/// Example object for testing purposes

// new Unit({
//   pos: [4, 4],
//   canvas: (document.getElementsByClassName("game-board"))[0],
//   health: 40,
//   movementRange: 2,
//   shootingRange: 2,
//   enemy: false,
//   name: "BoboMonkey"
// })

// Valid Move function for Unit
// validMath(move){
//   let moveX = move[0];
//   let moveY = move[1];
//   // Check if it is in valid bounds.
//   if (moveX > 7 || moveX < 0 || moveY > 7 || moveY < 0) {
//     return false;
//   }
//   if (Math.abs(this.pos[0] - moveX) > this.movementRange || Math.abs(this.pos[1] - moveY) > this.movementRange) {
//     return false;
//   }
//   return true;
// }

///---------------------- How I initial Created the Board
// createGrid(){
  // let canvas = document.createElement("CANVAS");
  // canvas.classList.add("game-board");
  // canvas.width = this.width;
  // canvas.height = this.height;
  // let ctx = canvas.getContext("2d");
  // canvas.style.border = "2px solid black"
  // // this.create_grid(canvas, ctx);
  // let gameboard = document.getElementById('play-area')
  // gameboard.prepend(canvas)};

