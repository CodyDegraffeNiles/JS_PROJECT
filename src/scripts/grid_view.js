import Cover from "./cover.js"

class GridView {
  constructor(grid, ai){
    this.grid = grid;
    this.ai = ai;
    this.boundFirstClick = this.handleFirstClick.bind(this);
    this.boundMove = this.handleMove.bind(this)
    this.boundShot = this.handleShot.bind(this);
    this.boundSelectMove = this.selectMove.bind(this);
    this.boundSelectShot = this.selectShot.bind(this);
    this.boundDeselectUnit = this.deselectUnit.bind(this);
    this.boundAiTurn = this.aiTurn.bind(this);
    this.selectedUnit = undefined;
  };

  // sets up intial clicks
  start(){
    this.bindFirstClick();
    this.addDeslectOption();
  };

  // Does an action and checks if it is the end of the turn/end of match.
  action(){
    // Checks if any units were eliminated
    this.grid.checkUnits();
    this.grid.erase();
    this.grid.draw();
    // checks if game is over
    if (this.gameOver()) { 
      console.log("YOU WIN!")
      return;}
    // Checks if the humanPlayers turn is over. If so run the AI's turn after
    // a three second delay.
    if (this.grid.actionableUnits.length < 1) { 
      setTimeout(this.boundAiTurn, 3000);
    };
  };

  // Performs an Ai's turn by getting its unit, movinging them, checking for AI victory
  // And if necessary handing it back over to the player.
  aiTurn(){
    this.grid.swapTurn();
    this.selectedUnit = undefined;
    this.populateStats();
    this.ai.addUnits();
    this.ai.takeTurn();
    if (this.gameOver()) { console.log("YOU LOSE!") };
    this.grid.swapTurn();
    this.ai.emptyUnits();
  }

  gameOver(){
    if (this.grid.alliesDestroyed() || this.grid.enemiesDestroyed()){ return true;}
    return false;
  }

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
        if (!(unit instanceof Cover)){ 
          this.selectUnit(unit)
          canvas.removeEventListener("click", this.boundFirstClick);
          this.addActionEventListeners();
          this.populateStats()
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
      canvas.removeEventListener("click", this.boundMove);
      canvas.addEventListener("click", this.boundFirstClick);
      canvas.style.cursor = 'pointer';
      this.action();
      this.populateStats();
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
      canvas.removeEventListener("click", this.boundShot);
      canvas.addEventListener("click", this.boundFirstClick);
      canvas.style.cursor = "pointer";
      this.action();
      this.populateStats();
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

  //Activates eventListener for move.
  selectMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.addEventListener("click", this.boundMove);
    canvas.style.cursor = "move";
  };

  // Activates eventlistener for shot.
  selectShot(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.addEventListener("click", this.boundShot);
    canvas.style.cursor = "crosshair";
  };

  // Deslects unit as to allow person to reset unit selection.
  deselectUnit(e){
    e.preventDefault();
    e.stopPropagation();
    this.selectedUnit = undefined;
    this.populateStats();
    this.removeActionEventListeners();
    this.removeMoveShootEvent();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.addEventListener("click", this.boundFirstClick);
    canvas.style.cursor = "pointer";
  };


  // Helper method to populate the descrptive list with current unit stats
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
      let acted = document.getElementById("unit-avaliable");
      unitName.innerHTML = this.selectedUnit.name;
      health.innerHTML = this.selectedUnit.health + " Points";
      movementRange.innerHTML = this.selectedUnit.movementRange + " Tiles";
      shootingRange.innerHTML = this.selectedUnit.shootingRange + " Tiles";
      damage.innerHTML = this.selectedUnit.shootingPower + " Damage";
      this.selectedUnit.actionLeft ? acted.innerHTML = "Has Action" : acted.innerHTML = "Can't Act";
      acted.innerHTML === "Has Action" ? acted.style.color = "#39FF14" : acted.style.color = "red";
    }
  };
}


export default GridView;