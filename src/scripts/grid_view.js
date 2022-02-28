import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
    this.boundFirstClick = this.handleFirstClick.bind(this);
    this.boundMove = this.handleMove.bind(this)
    this.boundShot = this.handleShot.bind(this);
    this.boundSelectMove = this.selectMove.bind(this);
    this.boundSelectShot = this.selectShot.bind(this);
    this.selectedUnit = "";
  };

  // build intital board
  start(){
    this.grid.createGrid();
  }

  // Does an action whether it is shooting or moving
  action(){
    this.grid.empty();
    this.grid.draw();
  }

  bindfirstClick(){
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundFirstClick);
  }

  // handles firstClick
  handleFirstClick(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick)/80);
    let y = Math.floor((yClick)/80);
    // Checks if there is a unit at the position clicked
    if (this.grid.getUnit([x,y]) !== undefined){
      let unit = this.grid.getUnit([x, y]);
      // Determine if unit is a friendly. 
        if (!unit.enemy){
          console.log(unit);
          unit.gainAction(); // Extrenous Code used for testings
          console.log("ALLY!")
          this.selectUnit(unit)
          canvas.removeEventListener("click", this.boundFirstClick);
          this.addActionEventListeners();
        }
    };
  };

  handleMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick) / 80);
    let y = Math.floor((yClick) / 80);
    if(this.selectedUnit.move([x,y])){
      this.grid.draw();
      canvas.removeEventListener("click", this.boundMove);
      canvas.addEventListener("click", this.boundFirstClick);
    }
  }

  handleShot(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick) / 80);
    let y = Math.floor((yClick) / 80);
    console.log("HI");
    if (this.selectedUnit.shoot([x,y])){
      console.log("WOOSH!")
      this.grid;
      this.grid.draw();
      canvas.removeEventListener("click", this.boundShot);
      canvas.addEventListener("click", this.boundFirstClick);
    }

  }

  // sets the selected unit so it can be tracked on different event's.
  selectUnit(unit){
    this.selectedUnit = unit;
  }

  addActionEventListeners(){
    let moveEle = document.getElementById("move-command");
    moveEle.addEventListener("click", this.boundSelectMove);
    let shotEle = document.getElementById("shoot-command");
    shotEle.addEventListener("click", this.boundSelectShot)
  }

  removeActionEventListeners(){
    let moveEle = document.getElementById("move-command");
    moveEle.removeEventListener("click", this.boundSelectMove);
    let shotEle = document.getElementById("shoot-command");
    shotEle.removeEventListener("click", this.boundSelectShot)
  }

  selectMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundMove);
    this.removeActionEventListeners();
  }

  selectShot(e){
    console.log("Test");
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundShot);
    this.removeActionEventListeners();
  }

}



export default GridView;