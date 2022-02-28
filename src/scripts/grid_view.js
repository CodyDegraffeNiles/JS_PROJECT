import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
    this.boundClick = this.handleClick.bind(this);
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
    canvas.addEventListener("click", this.boundClick);
  }

  handleClick(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let x = e.pageX - cavansLeft;
    let y = e.pageY - canvasRight;
    if(this.findUnit(x,y)){
      console.log("boboLand");
    }
  };
  // On click determines if a unit was clicked
  findUnit(x,y){
    let foundUnit = false;
    this.grid.units.forEach(unit => {
      if (x > unit.pos[0] * 80 && x < unit.pos[0] * 80 + 80 &&
        y > unit.pos[1] * 80 && y < unit.pos[1] * 80 + 80) {
        alert("clicked a unit!")
        foundUnit = true;
      }
    })
    return foundUnit;
  }
}


export default GridView;