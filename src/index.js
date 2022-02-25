

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")

  const gameGrid = document.getElementById("game-grid")
  let ctx = gameGrid.getContext('2d');
  window.ctx = ctx;
  ctx.fillStyle = "peachpuff";
  ctx.fillRect(50,50,100,100);
})