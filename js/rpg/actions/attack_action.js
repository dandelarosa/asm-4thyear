function AttackAction(user, target) {
  this.init = function() {
    this.user = user;
    this.target = target;
  };
  this.init();

  this.applyEffects = function() {
    // TODO: take attack, defense, and other factors into account
    var damageDealt = 10;
    this.target.currentHP -= damageDealt;
    // TODO: delete debugging log
    var debugText = this.user.name + " attacks " + this.target.name + " for " + damageDealt + " damage.";
    console.log(debugText);
  }
}
