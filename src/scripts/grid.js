import levelUnits from "./level_units.js";

class Grid{
  constructor(height = 640, width = 640, column = 8, row = 8){
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

  draw(){
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

  // add a unit to the units array as well as sets that unit's grid.
  addNewUnit(unit){
    unit.joinGrid(this);
    this.units.push(unit);
  }

  // add level one units
  loadLevelOneUnits(){
    levelUnits.forEach(unit =>{

      this.addNewUnit(unit);
    })
  }

  // Check if any units are dead and then destroy them if they are.
  checkUnits(){
    // let that = this;
    this.units.forEach(unit =>{
      if (unit.health <= 0){
        this.destroy(unit);
      }
    })
  };

  // elminate a unit from the grids array of units. 
  destroy(unit) {
    let deleteIndex = this.units.indexOf(unit);
    let left = this.units.slice(0, deleteIndex);
    let right = this.units.slice(deleteIndex + 1)
    this.units = left.concat(right);
  };

  // takes a position checks if it occupied.
  occupiedPos(pos){
    let check = false;
    this.units.forEach( unit => {
      if (unit.pos[0] === pos[0] && unit.pos[1] === pos[1]){
        check = true;
      }
    });
    return check;
  }
};

export default Grid;