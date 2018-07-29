function Enemy(level) {
  this.canControl = false;

  // These properties should be customized per enemy
  this.name = "Enemy";
  this.level1HP = 100;
  this.perLevelHP = 10;
  this.ticksToNextTurn = 100;

  // These properties are calculated using the enemy's level
  this.maxHP = 0;

  // Transient stats
  this.currentHP = 0;

  this.setLevel = function(level) {
    this.level = level;
    this.maxHP = this.level1HP + this.perLevelHP * (level - 1);
  }
  this.setLevel(level);

  // Don't heal on level up (for now)
  this.currentHP = this.maxHP;
}
