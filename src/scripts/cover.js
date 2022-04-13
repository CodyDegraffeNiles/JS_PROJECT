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
    this.coverImage = new Image()
    this.coverImage.src = "images/cover.svg"
  }

  draw(){
    const canvas = (document.getElementsByClassName('game-board'))[0];
    const ctx = canvas.getContext('2d');
    let startX = this.pos[0] * 80;
    let startY = this.pos[1] * 80;
    ctx.drawImage(this.coverImage, startX, startY);
  }

}

export default Cover;