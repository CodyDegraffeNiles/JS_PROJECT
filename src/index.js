import Grid from "./scripts/grid.js";
import GridView from "./scripts/grid_view.js"
import AI from "./scripts/AI.js";

document.addEventListener("DOMContentLoaded", () =>{
  // Loads up the grid, ai, and the grid view.
  const grid = new Grid();
  const ai = new AI(grid);
  const gridView = new GridView(grid, ai);
  gridView.start();
  grid.loadLevelOneUnits();
  // start on Player's turn
  grid.swapTurn();
  // Timeout before drawing grid to allow images to properly load
  grid.draw = grid.draw.bind(grid)
  setTimeout(grid.draw, 500)
});