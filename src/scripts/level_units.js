import Cover from "./cover.js";
import Unit from "./unit.js";



const levelUnits = [new Unit({
  pos: [5, 4],
  health: 100,
  movementRange: 2,
  shootingRange: 4,
  enemy: false,
  name: "Ajax"
}),

  new Unit({
  pos: [1, 5],
  health: 100,
  movementRange: 3,
  shootingRange: 4,
  enemy: false,
  name: "Renektus"
}),

  new Unit({
  pos: [0, 1],
  health: 50,
  movementRange: 2,
  shootingRange: 4,
  enemy: true,
  name: "DemonaKilla"
}),

  new Unit({
  pos: [6, 0],
  health: 50,
  movementRange: 2,
  shootingRange: 4,
  enemy: true,
  name: "Tuska"
}),

new Cover([0,2]),
new Cover([2,4]),
new Cover([3,4]),
new Cover([7,5])
]

export default levelUnits;