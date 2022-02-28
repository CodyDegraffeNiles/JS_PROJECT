import Unit from "./unit.js";

class Cover extends Unit{
  constructor(pos){
    super({
      name: "Indomitable Cover",
      health: 9001,
      movementRange: 0,
      shootingRange: 0,
      pos: pos,
      enemy: true
    });
  }

  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.beginPath();
    let top_x = this.pos[0] * 80;
    let top_y = this.pos[1] * 80 + 20
    ctx.fillRect(top_x, top_y, 80, 40)
    ctx.stroke();
  }

  // Hijacks gain action method so that grid does not gain actions. Also makes 
  // walls indestructible as their health is reset ever enemy turn.
  gainAction(){
    this.health = 9001;
  }
}

export default Cover;