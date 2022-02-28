import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
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

  bindClick(){
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.handleClick);
  }

  handleClick(e){
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    alert("Testing");
  }

}


export default GridView;