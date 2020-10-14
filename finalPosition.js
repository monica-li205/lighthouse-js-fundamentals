const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(moves) {
  let positionCord = [0, 0];
    for (let position of moves) {
      if (position === 'north') {
        positionCord[1] += 1;
      } else if (position === 'south') {
        positionCord[1] -= 1;
      } else if (position === 'east') {
        positionCord[0] += 1;
      } else if (position === 'west') {
        positionCord[0] -= 1;
      } 
    } 
    return console.log(positionCord);
  }

finalPosition(moves);