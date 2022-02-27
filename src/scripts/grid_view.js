import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
  };

  start(){
    this.grid.draw();
  }

  step(){
    this.grid.erase();
    this.grid.draw();
  }

}


export default GridView;