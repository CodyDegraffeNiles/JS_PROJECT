import levelUnits from "./level_units.js";
import Cover from "./cover.js";

class Grid{
  constructor(height = 640, width = 640, column = 8, row = 8){
    this.height = height;
    this.width = width;
    this.columnNum = column; 
    this.rowNum = row;
    this.units = [];
    this.actionableUnits = [];
    this.humanPlayer = false;
  }
  //erases board for cycling between frames.
  erase(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // creates every non-inital iteration of the board.
  draw(){
    let canvas = (document.getElementsByClassName("game-board"))[0];
    let ctx = canvas.getContext("2d");
    this.create_grid(canvas, ctx)
    this.populate();
  };
  // creates the actual grid;
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
  };

  // populate all unit elements
  populate(){
    this.units.forEach(unit =>{
      unit.draw();
    })
  };

  // add a unit to the units array as well as sets that unit's grid.
  addNewUnit(unit){
    unit.joinGrid(this);
    this.units.push(unit);
  };
  

  // add level one units
  loadLevelOneUnits(){
    levelUnits.forEach(unit =>{

      this.addNewUnit(unit);
    })
  };

  // Get the unit at a current position. Only use after using grid.occupiedPos()
  // to confirm that position is occupied.
  getUnit(pos){
    let unitAtPos = undefined;

    this.units.forEach( unit => {
      if (unit.pos[0] === pos[0] && unit.pos[1] === pos[1]){
        unitAtPos = unit;
      }
    });

    return unitAtPos
  };

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

  // removes a unit from the actionableUnits.
  removeFromActionableUnits(unit){
    let deleteIndex = this.actionableUnits.indexOf(unit);
    let left = this.actionableUnits.slice(0, deleteIndex);
    let right = this.actionableUnits.slice(deleteIndex + 1)
    this.actionableUnits = left.concat(right);
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
  };

  // Swaps turns between humanPlayer and computerPlay and loads up their units with
  // an action point while eliminating any moves from the other side.
  swapTurn(){
    if (this.humanPlayer === true) {
      this.humanPlayer = false;
      this.units.forEach( unit => {
        if (unit.isEnemy()){
          unit.gainAction();
        } else{
          unit.takeAction();
        }
      }
        )
    } else {
      this.humanPlayer = true;
      this.units.forEach(unit => {
        if (!unit.isEnemy()) {
          unit.gainAction();
        }else {
          unit.takeAction();
        }
      });
    };
  };

  // Return true all alies are destroyed
  alliesDestroyed(){
    return this.units.every(unit => unit.enemy === true)
  }

  // Returns true if all enemies, execpt for cover, are destroyed.
  enemiesDestroyed(){
    return this.units.every(unit => (unit.enemy === false || unit instanceof Cover) );
  }
};

export default Grid;