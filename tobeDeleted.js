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

///

// Populates the stats descriptive list with the current units stats
// stats(e){
//   e.preventDefault();
//   e.stopPropagation();
//   this.populateStats();
// }

// Adds a show stats eventListener on actins list. WIll always be present.
// // Show stats of the selected unit.
// addStatsOption(){
//   let statsElement = document.getElementById("stats-command");
//   statsElement.addEventListener("click", this.boundStats)
// };

// Extra instructions 
{/* <li> Even though, the heretics move erratically, they will take every shot they get.</li> */}

// How to Draw Svg on canvas.

// var img = new Image();
// img.onload = function () {
//   ctx.drawImage(img, 0, 0);
// }
// img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
//   }


///  draw(){ old draw for circles
// const canvas = (document.getElementsByClassName('game-board'))[0];
// const ctx = canvas.getContext('2d');
// // Yellow for friendly units and green for enemy forces.
// let color = "yellow";
// if (this.enemy) { color = "green" };
// ctx.fillStyle = color;
// // Get the center of the square of the units position
// let center_x = this.pos[0] * 80 + 40;
// let center_y = this.pos[1] * 80 + 40;
// ctx.beginPath();
// ctx.arc(center_x, center_y, 20, 0, 2 * Math.PI, false);
// ctx.fill();
// var img = new Image();
// img.onload = function () {
//   ctx.drawImage(img, -10, -10);
// };
// img.src = "images/t4.png";
// }