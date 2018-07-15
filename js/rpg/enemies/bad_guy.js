function BadGuy() {
  Enemy.call(this);

  this.name = "Bad Guy";
  this.currentHP = 100;
  this.maxHP = 100;
  this.ticksToNextTurn = 100;
}

BadGuy.prototype = Object.create(Enemy.prototype);
BadGuy.prototype.constructor = BadGuy;
