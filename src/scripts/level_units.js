import Cover from "./cover.js";
import Unit from "./unit.js";

const levelUnits = [new Unit({
  pos: [2,6],
  health: 100,
  movementRange: 3,
  shootingRange: 4,
  shootingPower: 75,
  enemy: false,
  name: "Tallarn 42nd" 
}),

  new Unit({
  pos: [5, 7],
  health: 100,
  movementRange: 3,
  shootingRange: 4,
  shootingPower: 75,
  enemy: false,
  name: "Catachan 22nd"

}),

  new Unit({
    pos: [1, 4],
    health: 100,
    movementRange: 3,
    shootingRange: 4,
    shootingPower: 75,
    enemy: false,
    name: "Catachan 22nd"
  }),

  new Unit({
    pos: [3, 3],
    health: 75,
    movementRange: 2,
    shootingRange: 5,
    shootingPower: 100,
    enemy: true,
    name: "Tzeentch's Scheme"
}),

  new Unit({
    pos: [2, 0],
    health: 75,
    movementRange: 2,
    shootingRange: 5,
    shootingPower: 100,
    enemy: true,
    name: "Khorne's Glory"
  }),

  new Unit({
    pos: [7, 4],
    health: 75,
    movementRange: 2,
    shootingRange: 5,
    shootingPower: 100,
    enemy: true,
    name: "Nurgle's Love"
  }),

  new Unit({
    pos: [6, 1],
    health: 75,
    movementRange: 2,
    shootingRange: 5,
    shootingPower: 100,
    enemy: true,
    name: "Slaanesh's Desire"
  }),

new Cover([0,2]),
new Cover([2,4]),
new Cover([7,5]),
new Cover([4,6]),
new Cover([6,2])
]

export default levelUnits;