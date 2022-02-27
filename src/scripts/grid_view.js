import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
  };

  start(){
    this.grid.create();
  }

  turn(){
   //Will be a while loop - i.e., while a player has actions or clicks a button.
  }

  action(){
    this.grid.empty();
    this.grid.draw();
  }



}


export default GridView;