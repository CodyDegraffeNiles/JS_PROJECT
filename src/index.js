import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";
import GridView from "./scripts/grid_view.js"
import Cover from "./scripts/cover.js";
import AI from "./scripts/AI.js";

document.addEventListener("DOMContentLoaded", () =>{
  // Loads up the grid, ai, and the grid view.
  const grid = new Grid();
  const ai = new AI(grid);
  const gridView = new GridView(grid, ai);
  gridView.start();
  grid.loadLevelOneUnits();
  grid.draw();
  // start on Player's turn
  grid.swapTurn();
});