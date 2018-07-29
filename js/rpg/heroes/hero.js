function Hero() {
  this.canControl = true;

  // These properties should be customized per hero
  this.name = "Hero";
  this.maxHP = 100;
  this.currentHP = this.maxHP;
  this.ticksToNextTurn = 40;

  this.getSaveState = function() {
    var saveState = {
      // Name is used to determine which hero class to load
      name: this.name,
      maxHP: this.maxHP,
      currentHP: this.currentHP,
      // Don't save ticksToNextTurn since it's tied to the hero subclass
    };
    return saveState;
  }

  this.loadSaveState = function(saveState) {
    // Don't load since it's tied to the hero subclass
    this.maxHP = saveState.maxHP;
    this.currentHP = saveState.currentHP;
  }
}

/**
 * Call this instead of Hero.loadSaveState to ensure that the correct hero subclass gets loaded.
 */
function heroFromSaveState(saveState) {
  var heroClasses = {
    "David": David,
    "Shane": Shane,
    "Luke": Luke,
  }
  var heroName = saveState.name;
  var heroClass = heroClasses[heroName];
  if (!heroClass) {
    return null;
  }
  var hero = new heroClass();
  if (hero) {
    hero.loadSaveState(saveState);
  }

  return hero;
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
