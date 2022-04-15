class Bullet{
  constructor(options){
    this.pos = options.pos;
    this.startPos = options.pos
    this.endPos = options.endPos;
    this.grid = options.grid;
    this.target = options.target
    this.shootingPower = options.shootingPower
    this.animate = this.animate.bind(this);
    this.incrementX = (this.endPos[0] - this.startPos[0])/50
    this.incrementY = (this.endPos[1] - this.startPos[0])/50
    this.count = 0;
  }

// Draw bullet
  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    let startX = this.pos[0] * 80 + 40;
    let startY = this.pos[0] * 80 + 40;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(startX,startY, 20, 0, 2*Math.PI, false);
    ctx.fill()
  }

   //
  animate(){
    this.grid.erase();
    this.pos[0] = this.pos[0] + this.incrementX
    this.pos[1] = this.pos[1] + this.incrementY
    this.count += 1
    this.grid.draw();
    if(this.count < 50){
      window.requestAnimationFrame(this.animate)
    } else {
      this.target.takeDamage(this.shootingPower);
      this.grid.destroy(this)
      this.grid.erase();
      this.grid.draw();
    }
  }
}

export default Bullet