import Grid from "./grid.js";
import Unit from "./unit.js";

class GridView {
  constructor(grid){
    this.grid = grid;
    this.boundFirstClick = this.handleFirstClick.bind(this);
    this.boundMove = this.handleMove.bind(this)
    this.boundShot = this.handleShot.bind(this);
    this.boundSelectMove = this.selectMove.bind(this);
    this.boundSelectShot = this.selectShot.bind(this);
    this.boundDeselectUnit = this.deselectUnit.bind(this);
    this.boundStats = this.stats.bind(this);
    this.selectedUnit = undefined;
  };

  // sets up intial clicks
  start(){
    this.bindFirstClick();
    this.addDeslectOption();
    this.addStatsOption();
  };

  // Does an action whether it is shooting or moving
  action(){
    this.grid.empty();
    this.grid.draw();
  };

  bindFirstClick(){
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundFirstClick);
  };

  // handles firstClick
  handleFirstClick(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick)/80);
    let y = Math.floor((yClick)/80);
    // Checks if there is a unit at the position clicked
    if (this.grid.getUnit([x,y]) !== undefined){
      let unit = this.grid.getUnit([x, y]);
      // Determine if unit is a friendly. 
        if (!unit.enemy){
          console.log(unit);
          unit.gainAction(); // Extrenous Code used for testings
          console.log("ALLY!")
          this.selectUnit(unit)
          canvas.removeEventListener("click", this.boundFirstClick);
          this.addActionEventListeners();
        }
    };
  };

  handleMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick) / 80);
    let y = Math.floor((yClick) / 80);
    if(this.selectedUnit.move([x,y])){
      this.grid.draw();
      canvas.removeEventListener("click", this.boundMove);
      canvas.addEventListener("click", this.boundFirstClick);
    }
  };

  handleShot(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft;
    let yClick = e.pageY - canvasRight;
    // Convert click into x, y positions
    let x = Math.floor((xClick) / 80);
    let y = Math.floor((yClick) / 80);
    if (this.selectedUnit.shoot([x,y])){
      console.log("WOOSH!")
      this.grid;
      this.grid.draw();
      canvas.removeEventListener("click", this.boundShot);
      canvas.addEventListener("click", this.boundFirstClick);
    }

  };

  // Sets the selected unit so it can be tracked on different event listeners
  selectUnit(unit){
    this.selectedUnit = unit;
  };

  // Add event listeners for the actions list.
  addActionEventListeners(){
    let moveEle = document.getElementById("move-command");
    moveEle.addEventListener("click", this.boundSelectMove);
    let shotEle = document.getElementById("shoot-command");
    shotEle.addEventListener("click", this.boundSelectShot)
  };
  // Remove event listeners for actions list
  removeActionEventListeners(){
    let moveEle = document.getElementById("move-command");
    moveEle.removeEventListener("click", this.boundSelectMove);
    let shotEle = document.getElementById("shoot-command");
    shotEle.removeEventListener("click", this.boundSelectShot)
  };

  // Removes event listeners for moving and shooting. Allowing player to toggle between
  // shot and move commands.
  removeMoveShootEvent() {
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.removeEventListener("click", this.boundShot);
    canvas.removeEventListener("click", this.boundMove)
  };

  //Adds a deselect eventListener on actions list. Will always be present.
  addDeslectOption(){
    let deselectElement = document.getElementById("deselect-command");
    deselectElement.addEventListener("click", this.boundDeselectUnit)
  };

  // Adds a show stats eventListener on actins list. WIll always be present.
  // Show stats of the selected unit.
  addStatsOption(){
    let statsElement = document.getElementById("stats-command");
    statsElement.addEventListener("click", this.boundStats)
  };

  //Activates eventListener for move.
  selectMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.addEventListener("click", this.boundMove);
  };

  // Activates eventlistener for shot.
  selectShot(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.addEventListener("click", this.boundShot);
  };

  // Deslects unit as to allow person to reset unit selection.
  deselectUnit(e){
    e.preventDefault();
    e.stopPropagation();
    this.selectedUnit = undefined;
    this.removeActionEventListeners();
    this.removeMoveShootEvent();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundFirstClick);
  };

  // Populates the stats descriptive list with the current units stats
  stats(e){
    e.preventDefault();
    e.stopPropagation();
    this.populateStats();
  }


  // Helper method to populate the descrptive list with curren unit stats
  populateStats(){
    // If no unit is selected, clear out Stats list
    if (this.selectedUnit === undefined){
      let statsArray = Array.from(document.getElementsByTagName("DD"));
      statsArray.forEach(value => {
        value.innerHTML= "";     
      });
    }
    // If there is a selected unit, update stats list.
    else{
      let unitName = document.getElementById("unit-name");
      let health = document.getElementById("unit-health");
      let movementRange = document.getElementById("unit-movement");
      let shootingRange = document.getElementById("unit-shooting");
      let damage = document.getElementById("unit-damage");
      unitName.innerHTML = this.selectedUnit.name + " Spaces";
      health.innerHTML = this.selectedUnit.health + " Hit Points";
      movementRange.innerHTML = this.selectedUnit.movementRange + " Tiles";
      shootingRange.innerHTML = this.selectedUnit.shootingRange + " Tiles";
      damage.innerHTML = this.selectedUnit.shootingPower + " Damage";
    }
  };
}


export default GridView;