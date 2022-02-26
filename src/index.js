import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")

  const grid = new Grid()
  grid.draw();
  let canvas_array = document.getElementsByClassName("game-board");
  let canvas = canvas_array[0];
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(200,200);
  ctx.lineTo(240,240);
  ctx.stroke();

})