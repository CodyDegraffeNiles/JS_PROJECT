

const Util = {
  // checks if a position is an array of positions
  inArray(pos, array){
    let check = false;
    array.forEach( move =>{
      if(move[0] === pos[0] && move[1] === pos[1])
      check = true
    })

    return check
  }
}

export default Util;