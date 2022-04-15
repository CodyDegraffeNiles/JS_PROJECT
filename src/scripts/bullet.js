
class Bullet{
  constructor(options){
    this.pos = options.pos
    this.startPos = options.startPos
    this.endPos = options.endPos;
    this.grid = options.grid
    this.target = options.target
    this.shootingPower = options.shootingPower
    this.animate = this.animate.bind(this);
    this.incrementX = (this.endPos[0] - this.startPos[0])/30
    this.incrementY = (this.endPos[1] - this.startPos[1])/30
    this.count = 0;
    this.enemy = false;
    this.actionLeft = false;
    this.health = 0;
  }

// Draw bullet
  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    let startX = this.pos[0] * 80 + 40;
    let startY = this.pos[1] * 80 + 40;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(startX, startY, 10, 0, 2*Math.PI, false);
    ctx.fill()
  }

   //
  animate(){
    this.grid.addNewUnit(this)
    this.grid.erase();
    this.pos[0] = this.pos[0] + this.incrementX
    this.pos[1] = this.pos[1] + this.incrementY
    this.count += 1
    this.grid.draw();
    if(this.count < 30){
      this.grid.destroy(this)
      window.requestAnimationFrame(this.animate)
    } else {
      this.target.takeDamage(this.shootingPower);
      this.grid.destroy(this)
      this.grid.destroy(this.target)
      this.grid.erase();
      this.grid.draw();
    }
  }
  // Sets this.grid equal to a specific grid.
  joinGrid(newGrid){
    this.grid = newGrid;
  };

    // Allows for a unit to take an action.
  gainAction(){
    this.actionLeft = true;
    this.grid.actionableUnits.push(this);
  };

  // Disables unit action.
  takeAction() {
    this.actionLeft = false;
    if(this.grid.actionableUnits.includes(this)){
      this.grid.removeFromActionableUnits(this);
    }
  };


  // Checks side of unit.
  isEnemy(){
    return true;
  }


}

export default Bullet