import Cover from "./cover.js";
import Unit from "./unit.js";

const levelUnits = [new Unit({
  pos: [7, 0],
  health: 100,
  movementRange: 2,
  shootingRange: 4,
  shootingPower: 50,
  enemy: false,
  name: "Ajax"
}),

  new Unit({
  pos: [0, 0],
  health: 100,
  movementRange: 2,
  shootingRange: 4,
  shootingPower: 50,
  enemy: false,
  name: "Renektus"
}),

  new Unit({
  pos: [0, 1],
  health: 50,
  movementRange: 2,
  shootingRange: 4,
  shootingPower: 100,
  enemy: true,
  name: "DemonaKilla"
}),

  new Unit({
  pos: [6, 0],
  health: 50,
  movementRange: 2,
  shootingRange: 4,
  shootingPower: 100,
  enemy: true,
  name: "Tuska"
}),

new Cover([0,2]),
new Cover([2,4]),
new Cover([3,4]),
new Cover([7,5])
]

export default levelUnits;