import Cover from "./cover.js"
import Util from "./utils.js";

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
    this.boundAiTurnEvent = this.aiTurnEvent.bind(this);    
    this.boundEndOption = this.addEndTurnOption.bind(this);
    this.boundShowGrid = this.showGrid.bind(this);
    this.boundShowInstructions = this.showInstructions.bind(this);
    this.boundMute = this.mute.bind(this);
    this.boundunMute = this.unMute.bind(this);
    this.selectedUnit = undefined;
  };

  // sets up intial clicks
  start(){
    this.selectGrid();
    this.bindFirstClick();
    this.addDeselectOption();
    this.addRestartOption();
    this.addEndTurnOption();
    this.muteSounds();
  };

  // Does an action and checks if it is the end of the turn/end of match.
  action(){
    // Remove all event listenrers until the action is done
    let canvas = (document.getElementsByClassName("game-board")[0]);
    canvas.removeEventListener("click", this.boundFirstClick);
    this.removeMoveShootEvent();
    this.removeActionEventListeners();
    // Checks if any units were elminated
    this.grid.checkUnits();
    this.grid.erase();
    this.grid.draw();
    // checks if game is over
    if (this.gameOver()) { 
      Util.showPlayersTurn("endScreen");
      Util.displayEndScreen("human");
      return; }
    // Checks if the humanPlayers turn is over. If so run the AI's turn after
    // a three second delay and then select a unit for the player.
    if (this.grid.actionableUnits.length < 1) { 
      this.selectedUnit = undefined;
      this.populateStats();
      // this.boundDeselectUnit();
      Util.showPlayersTurn("computer")
      setTimeout(this.boundAiTurn, 2000);
    } else {
      // Add back firstClick event listener;
      this.bindFirstClick();
    }
  };


  // Performs an Ai's turn by getting its unit, movinging them, checking for AI victory
  // And if necessary handing it back over to the player.
  aiTurn(){
    this.grid.swapTurn();
    this.selectedUnit = undefined;
    this.populateStats();
    this.ai.addUnits();
    this.ai.takeTurn();
    if (this.gameOver()) {
      Util.showPlayersTurn("endScreen")
      Util.displayEndScreen("computer");
      return;
    };
    this.ai.emptyUnits();
    this.grid.swapTurn();
    Util.showPlayersTurn("human")
    this.grid.draw();
    this.bindFirstClick(); 
    canvas.style.cursor = "pointer";
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
      // Determine if unit not cover 
        if (!(unit instanceof Cover)){ 
          this.selectUnit(unit);
          this.populateStats()
          // Add event listeners if unit is an ally and remove eventlistneers if unit is an enemy
          unit.enemy === false ? this.addActionEventListeners() : this.removeActionEventListeners()
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
  addDeselectOption(){
    let deselectElement = document.getElementById("deselect-command");
    deselectElement.addEventListener("click", this.boundDeselectUnit)
  };

  // Adds a reset event listener on both the resert button in the top right corner
  // and the resert button that appears on the end game screen.
  addRestartOption(){
    let restartElementOne = document.getElementById("restart-command");
    restartElementOne.addEventListener("dblclick", this.restart);
    // Only add one click for the restart since it is the intended purpose to restart.
    let restartElementTwo= document.getElementById("end-game-restart-command");
    restartElementTwo.addEventListener("click", this.restart);
  }

  // Adds a end turn listener, so the player can end their turn prematurely
  // Activates Ai turn. Activated using a double click rather than a click 
  // to ensure a user does not acidently end their turn.
  addEndTurnOption(){
    let endTurnElement = document.getElementById("endturn-command");
    endTurnElement.addEventListener("dblclick", this.boundAiTurnEvent);
  }

  aiTurnEvent(e){
    e.preventDefault();
    e.stopPropagation();
    // remove event listener from end turn element so that
    // endturn command does not get spammed clicked.
    let endTurnElement = document.getElementById("endturn-command");
    endTurnElement.removeEventListener("dblclick", this.boundAiTurnEvent);
    Util.showPlayersTurn("computer");
    this.selectedUnit = undefined;
    this.populateStats();
    this.grid.draw();
    setTimeout(this.boundAiTurn, 3000);
    setTimeout(this.grid.boundDraw, 3001);
    // Put event listerner back on end turn element
    setTimeout(this.boundEndOption, 3001);
  }
  // Restarts the game by reloading the page.
  restart(e){
    e.preventDefault();
    e.stopPropagation();
    location.reload();
  }

  //Activates eventlistener for move and removes other eventlistenres for the board.
  selectMove(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.removeEventListener("click", this.boundFirstClick);
    canvas.addEventListener("click", this.boundMove);
    canvas.style.cursor = "alias";
  };

  // Activates eventlistener for shot and removes other eventlistenrs for the board.
  selectShot(e){
    e.preventDefault();
    e.stopPropagation();
    let canvas = (document.getElementsByClassName("game-board")[0]);
    this.removeMoveShootEvent();
    canvas.removeEventListener("click", this.boundFirstClick);
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
    // Redraw grid to get out of selected units highlight
    this.grid.draw();
  };


  // Helper method to populate the descrptive list with current unit stats
  populateStats(){
    // If no unit is selected, clear out Stats list
    if (this.selectedUnit === undefined){
      let statsArray = Array.from(document.getElementsByTagName("DD"));
      statsArray.forEach(value => {
        value.innerHTML= "";     
      });
      Util.showUnitSide("none");
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
      this.selectedUnit.actionLeft ? acted.innerHTML = "Has Action" : acted.innerHTML = "Acted";
      acted.innerHTML === "Has Action" ? acted.style.color = "black" : acted.style.color = "black";
      acted.innerHTML === "Has Action" ? acted.style.backgroundColor = "green" : acted.style.backgroundColor = "red";
      // clear grid and then highlight selected unit's grid spot
      Util.showUnitSide(this.selectedUnit.enemy);
      this.grid.draw()
      this.highlightUnit();
    }
  };

  //Highlights selected unit
  highlightUnit(){
    let canvas = (document.getElementsByClassName("game-board")[0]);
    let ctx = canvas.getContext('2d');
    let rightX = this.selectedUnit.pos[0] * 80;
    let leftX = this.selectedUnit.pos[1] * 80;
    // different colors for enemy and friendlys
    this.selectedUnit.enemy ? ctx.fillStyle ="red" : ctx.fillStyle = '#39FF14';
    ctx.fillRect(rightX, leftX, 80, 80);
    this.selectedUnit.draw();
  };

  // Allow for instructions to be taken off and the grid to be shown
  selectGrid(){
    let instructionsElement = document.getElementById("show-grid");
    instructionsElement.addEventListener("click", this.boundShowGrid);
  }

  // Function for hiding instructions and showing the grid
  showGrid(e){
    e.preventDefault();
    e.stopPropagation();
    let playArea = document.getElementById("play-area");
    let instructionsElement = document.getElementById("instructions");
    instructionsElement.style.display = "none";
    playArea.style.display = "flex";
    let title = document.getElementById("title");
    this.selectInstructions();
    Util.showPlayersTurn("human")
  }

  // Allow for instructions to be hidden and the grid to be shown
  selectInstructions(){
    let showInstructionsElement = document.getElementById("instructions-command");
    showInstructionsElement.addEventListener("click", this.boundShowInstructions);
  }

  // Function for showing instructions and hiding grid;
  showInstructions(e){
    e.preventDefault();
    e.stopPropagation();
    let playArea = document.getElementById("play-area");
    let instructionsElement = document.getElementById("instructions");
    instructionsElement.style.display = "";
    playArea.style.display = "none";
    this.selectGrid();
    Util.showPlayersTurn("instructions")
  }

  // Sets up event listener for muting sound
  muteSounds(){
    let muteElement = document.getElementById("sound-command");
    muteElement.addEventListener("click", this.boundMute);
    muteElement.style.textDecoration = "none";
  }

  // Mutes all unit sounds
  mute(e){
    e.preventDefault();
    e.stopPropagation();
    this.grid.muteSound();
    let muteElement = document.getElementById("sound-command");
    muteElement.removeEventListener("click", this.boundMute);
    this.unMuteSounds();
  }

  // Sets up event listener for unMuting sounds
  unMuteSounds() {
    let muteElement = document.getElementById("sound-command");
    muteElement.addEventListener("click", this.boundunMute);
    muteElement.style.textDecoration = "line-through";
  }

  // Unmutes all unit sounds
  unMute(e){
    e.preventDefault();
    e.stopPropagation();
    this.grid.unMuteSounds();
    let muteElement = document.getElementById("sound-command");
    muteElement.removeEventListener("click", this.boundunMute);
    this.muteSounds();
  }
  
}


export default GridView;