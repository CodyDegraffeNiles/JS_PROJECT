
class Grid{
  constructor(height = 500, width = 500, column = 8, row = 8){
    this.height = height;
    this.width = width;
    this.columnNum = column; 
    this.rowNum = row;
  }

  drawGrid(){
    let canvas = document.createElement("CANVAS");
    canvas.width = this.width;
    canvas.height = this.height;
    let ctx = canvas.getContext("2d");
    canvas.style.border = "2px solid black"
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineStyle = "black";
    for (let x = 0; x < this.height; x += this.height / this.rowNum) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, this.height)
    }
    for (let y = 0; y < this.width; y += this.width / this.columnNum) {
      ctx.moveTo(0, y)
      ctx.lineTo(this.width, y)
    }
    ctx.stroke();
    let gameboard = document.getElementById('play-area')
    gameboard.appendChild(canvas);
  }
};

export default Grid;