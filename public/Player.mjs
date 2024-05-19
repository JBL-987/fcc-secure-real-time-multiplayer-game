class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id; 
  }

  movePlayer(dir, speed) {
   switch (dir) {
      case "left":
        this.x -= speed;
        break;
      case "right":
        this.x += speed;
        break;
      case "up":
        this.y -= speed;
        break;
      case "down":
        this.y += speed;
        break;
    }
  }

  collision(item) {
   if (this.x === item.x && this.y === item.y) {
     return true;
   }
  }

  calculateRank(players) {
   const numOfPlayers = players.length;
    let rank;

    if (this.score === 0) {
      rank = numOfPlayers;
    } else {
      const sortedPlayers = players.sort(
        (playerA, playerB) => playerB.score - playerA.score
      );
      rank = sortedPlayers.findIndex((player) => player.id === this.id) + 1;
    }
    return `Rank: ${rank} / ${numOfPlayers}`;
  }
}


export default Player;
