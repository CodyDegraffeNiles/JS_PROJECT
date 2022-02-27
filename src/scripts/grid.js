import Unit from "./unit.js";

class Grid{
  constructor(height = 480, width = 480, column = 6, row = 6){
    this.height = height;
    this.width = width;
    this.columnNum = column; 
    this.rowNum = row;
    this.units = [];
  }

  inital_draw(){
    let canvas = document.createElement("CANVAS");
    canvas.classList.add("game-board");
    canvas.width = this.width;
    canvas.height = this.height;
    let ctx = canvas.getContext("2d");
    canvas.style.border = "2px solid black"
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineStyle = "black";
    for (let x = 0; x < canvas.height; x += canvas.height / this.rowNum) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
    }
    for (let y = 0; y < canvas.width; y += canvas.width / this.columnNum) {
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
    }
    ctx.stroke();
    let gameboard = document.getElementById('play-area')
    gameboard.appendChild(canvas);
  }

  populate(units){
    // units is an array of unit objects that need to be rendered
    units.forEach(unit =>{
      unit.draw();
    })
  }


};

export default Grid;