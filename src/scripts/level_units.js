import Unit from "./unit.js";

const levelUnits = [new Unit({
  pos: [5, 4],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 100,
  movementRange: 2,
  shootingRange: 2,
  enemy: false,
  name: "Ajax"
}),
  new Unit({
  pos: [5, 2],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 100,
  movementRange: 2,
  shootingRange: 2,
  enemy: false,
  name: "Renektus"
}),

, new Unit({
  pos: [1, 1],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 50,
  movementRange: 2,
  shootingRange: 2,
  enemy: true,
  name: "DemonaKilla"
})

, new Unit({
  pos: [3, 5],
  canvas: (document.getElementsByClassName("game-board"))[0],
  health: 50,
  movementRange: 2,
  shootingRange: 2,
  enemy: true,
  name: "Tuska"
})]

export default levelUnits;