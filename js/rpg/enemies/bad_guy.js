function BadGuy(level) {
  Enemy.call(this, level);

  this.name = "Bad Guy";
  this.level1HP = 100;
  this.perLevelHP = 10;
  this.ticksToNextTurn = 100;

  // HACK: force recalculate stats
  this.setLevel(level);
  this.currentHP = this.maxHP;
}

BadGuy.prototype = Object.create(Enemy.prototype);
BadGuy.prototype.constructor = BadGuy;
