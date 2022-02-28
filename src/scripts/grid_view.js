import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
    this.boundFirstClick = this.handleFirstClick.bind(this);
    this.boundMove = this.handleMove.bind(this)
  };

  // build intital board
  start(){
    this.grid.create();
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
          // canvas.removeEventListener("click", this.boundFirstClick);
          // canvas.addEventListener("click",this.boundMove)
        }
        console.log("test");
    };
  }
  ;
}



export default GridView;