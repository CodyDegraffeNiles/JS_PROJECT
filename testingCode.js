import Grid from "./src/scripts/grid";

let tank2 = new Unit({
  pos: [0, 1],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 40,
  movementRange: 2,
  shootingRange: 2,
  shootingPower: 15,
  enemy: false,
});

let tank = new Unit({
  pos: [0, 2],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 40,
  movementRange: 2,
  shootingRange: 2,
  shootingPower: 15,
  enemy: true,
});

////


const grid = new Grid()
const gridView = new GridView(grid);
gridView.start();
grid.loadLevelOneUnits();
grid.draw();
