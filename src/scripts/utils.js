
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
  },

  // Change title to reflect whose turn it is.
  showPlayersTurn(player){
    let titleElement = document.getElementById("title");
    if (player === "human"){
      titleElement.innerHTML = "Your Turn";
      titleElement.style.color = "#39FF14";
    }
    else if (player === "computer") {
      titleElement.innerHTML = "Enemy Turn";
      titleElement.style.color = "red";
    }
    //Show title if on end screen.
    else{
      titleElement.innerHTML = "MINI-XCOM";
      titleElement.style.color = "rgb(199, 131, 4)";
    };
  },
  // Modify the Unit stats Bar based on if friendly unit is clicked or not;
  // Side is a boolean. True if enemy, false if ally.
  showUnitSide(side){
    let statsTitle = document.getElementById("stats-title");
    if (side === true){
      statsTitle.innerHTML = "Enemy"
      statsTitle.style.color ="red";
    }
    else if (side === false){
      statsTitle.innerHTML = "Ally"
      statsTitle.style.color = "#39FF14";
    }
    else{
      statsTitle.innerHTML = "Unit Stats"
      statsTitle.style.color = "black";
    }
  }
}

export default Util;