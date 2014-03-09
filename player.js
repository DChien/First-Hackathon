
allPowerups = {
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


function Player(name) {
  this.name = name;
  this.x = 0;
  this.y = 0;
  this.money = 0;
  this.stamps = 0;
  this.itemToUse = null;
  this.paralyzeCounter = 0;
}

Player.population = 0

Player.prototype.animateMovement = function(currX, currY, newX, newY) {
  // TODO
}


Player.prototype.usePowerup = function(powerup) {
  if (!allPowerups.hasOwnProperty(powerup)) {
    // TODO
    console.log('no such powerup ' + powerup);
  this.itemToUse = allPowerups.powerup;
}

Player.prototype.setPosition = function(x, y) {
  this.x = x;
  this.y = y;
}

Player.prototype.move = function(x, y, tickets) {
  this.x = x;
  this.y = y;
  if (tickets) {
    this.stamps++;
  }
}


