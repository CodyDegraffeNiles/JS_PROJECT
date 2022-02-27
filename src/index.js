import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";
import GridView from "./scripts/grid_view.js"
import Cover from "./scripts/cover.js";

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")
  window.Grid = Grid;
  window.Unit = Unit;
  window.GridView = GridView;
  window.cover
  const grid = new Grid()
  const gridView = new GridView(grid);
  gridView.start();
  grid.loadLevelOneUnits();
  grid.draw();
  // gridView.step();

})