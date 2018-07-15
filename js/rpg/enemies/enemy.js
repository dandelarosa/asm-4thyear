function Enemy() {
  this.canControl = false;

  // These properties should be customized per enemy
  this.name = "Enemy";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 100;
}
