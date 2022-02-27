import levelUnits from "./level_units.js";

class Grid{
  constructor(height = 480, width = 480, column = 6, row = 6){
    this.height = height;
    this.width = width;
    this.columnNum = column; 
    this.rowNum = row;
    this.units = [];
  }

  //erases board for cycling between frames.
  erase(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // creates the inital board
  create(){
    let canvas = document.createElement("CANVAS");
    canvas.classList.add("game-board");
    canvas.width = this.width;
    canvas.height = this.height;
    let ctx = canvas.getContext("2d");
    canvas.style.border = "2px solid black"
    this.create_grid(canvas, ctx);
    let gameboard = document.getElementById('play-area')
    gameboard.appendChild(canvas)
  };
  // draws an itteration of the intial board.
  draw(){
    this.erase();
    let canvas = (document.getElementsByClassName("game-board"))[0];
    let ctx = canvas.getContext("2d");
    this.create_grid(canvas, ctx)
    this.populate();
  }
  // creates the actuall grid;
  create_grid(canvas, ctx ){
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
  }

  // populate all unit elements
  populate(){
    this.units.forEach(unit =>{
      unit.draw();
    })
  }

  // add a unit to the units array
  addNewUnit(unit){
    this.units.push(unit);
  }

  // add level one units
  loadLevelOneUnits(){
    levelUnits.forEach(unit =>{

      this.addNewUnit(unit);
    })
  }

};


export default Grid;