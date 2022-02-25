import Grid from "./grid.js";

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")

  const grid = new Grid()
  grid.drawGrid();

  // grid.drawGrid(100, 200)

  // const gameGrid = document.getElementById("game-grid")
  // let ctx =sd gameGrid.getContext('2d');
  // window.ctx = ctx;
  // ctx.fillStyle = "peachpuff";
  // ctx.fillRect(50,50,100,100);
})