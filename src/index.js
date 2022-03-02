import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";
import GridView from "./scripts/grid_view.js"
import Cover from "./scripts/cover.js";
import AI from "./scripts/AI.js";

document.addEventListener("DOMContentLoaded", () =>{
  window.Grid = Grid;
  window.Unit = Unit;
  window.GridView = GridView;
  window.Cover = Cover;
  window.AI = AI;
  const grid = new Grid();
  const ai = new AI(grid);
  const gridView = new GridView(grid, ai);
  gridView.start();
  grid.loadLevelOneUnits();
  grid.draw();
  // start on Player's turn
  grid.swapTurn();
});