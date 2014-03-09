
powerups = {
  'example': {
    'cost': 4,
  },
}

function randrange(end) {
  return Math.floor((Math.random() * 100)) % end;
}

/*
 * Player class
 */


function Player(name, width, height) {
  this.name = name;
  this.x = randrange(width);
  this.y = randrange(height);
  this.money = 0;
  this.stamps = 0;
  this.powerups = {};
}

Player.population = 0
Player.prototype.updateState = function(newX, newY, moneyAmount, stampsAmount) {
  this.animateMovement(this.x, this.y, newX, newY);
  this.x = newX;
  this.y = newY;
  this.money += moneyAmount;
  this.stamps += stampsAmount;
  this.id = Player.population++;
}

Player.prototype.animateMovement = function(currX, currY, newX, newY) {
  // TODO
}

Player.prototype.buyPowerup = function(powerup, amount, cost) {
  this.money -= cost;
  if (!this.powerups.hasOwnProperty(powerup)) {
    this.powerups.powerup = 0;
  }
  this.powerups.powerup += amount;
}

Player.prototype.usePowerup = function(powerup) {
  if (!this.powerups.hasOwnProperty(powerup)) {
    // TODO
    console.log('no such powerup ' + powerup);
  }
  this.powerups.powerup--;
}


