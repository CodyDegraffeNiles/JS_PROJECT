import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";
import GridView from "./scripts/grid_view.js"
import Cover from "./scripts/cover.js";

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")
  window.Grid = Grid;
  window.Unit = Unit;
  window.GridView = GridView;
  window.Cover = Cover;
  const grid = new Grid()
  const gridView = new GridView(grid);
  gridView.start();
  grid.loadLevelOneUnits();
  grid.draw();
  grid.b
  // grid.units.forEach( unit => {
  //   console.log(unit.posssibleMoves())
  // })
  // gridView.step();

})