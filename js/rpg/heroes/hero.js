function Hero() {
  this.canControl = true;

  // These properties should be customized per hero
  this.name = "Hero";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 40;
}

function David() {
  Hero.call(this);

  this.name = "David";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 40;
}

David.prototype = Object.create(Hero.prototype);
David.prototype.constructor = David;

function Shane() {
  Hero.call(this);

  this.name = "Shane";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 50;
}

Shane.prototype = Object.create(Hero.prototype);
Shane.prototype.constructor = Shane;

function Luke() {
  Hero.call(this);

  this.name = "Luke";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 60;
}
