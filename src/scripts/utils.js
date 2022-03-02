
// File handles several miscellaneous functions to clean up the code.



const Util = {
  // checks if a position is an array of positions
  inArray(pos, array){
    let check = false;
    array.forEach( move =>{
      if(move[0] === pos[0] && move[1] === pos[1])
      check = true
    })

    return check
  },

  // Handles the logic of ending the game and showing an end screen.
  displayEndScreen(player){
    let playArea = document.getElementById("play-area");
    let endScreen = document.getElementById("end-screen");
    playArea.style.display = "none";
    endScreen.style.display = "block";
    let gameOverMessage = document.createElement("P")
    gameOverMessage.style.textAlign = "center"
    gameOverMessage.style.fontSize = "35px"
    if (player === "human"){
      gameOverMessage.innerHTML = "VICTORY! The heretics have been purged!"
      gameOverMessage.style.color = "green";
      endScreen.prepend(gameOverMessage);
    }
    else {
      gameOverMessage.innerHTML = "DEFEAT! The emperor is displeased."
      gameOverMessage.style.color = "red";
      endScreen.prepend(gameOverMessage);
    }
  }
}

export default Util;