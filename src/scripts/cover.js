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
    let img = document.createElement("IMG");
    let startX = this.pos[0] * 80;
    let startY = this.pos[1] * 80;
    img.onload = function () { ctx.drawImage(img, startX, startY) };
    img.src = "images/cover.svg";
  }

}

export default Cover;