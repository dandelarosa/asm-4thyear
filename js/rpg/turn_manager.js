function TurnManager() {
  this.init = function() {
    this.battleTimer = 0;
    this.turnQueue = {};
  };
  this.init();

  this.addCombatantsToQueue = function(combatants) {
    for (var i = 0; i < combatants.length; i++) {
      var combatant = combatants[i];
      this.addCombatantToQueue(combatant);
    }
  }

  this.addCombatantToQueue = function (combatant) {
    var turnTime = this.battleTimer + combatant.ticksToNextTurn;
      // Make sure you don't accidentally override anyone who's already in the queue
      var possibleConflict = this.turnQueue[turnTime];
      while (this.turnQueue[turnTime]) {
        turnTime++;
        possibleConflict = this.turnQueue[turnTime];
      }
      this.turnQueue[turnTime] = combatant;
  }

  this.popCombatant = function() {
    var combatant = this.turnQueue[this.battleTimer];
    delete this.turnQueue[this.battleTimer];
    return combatant;
  }

  this.tick = function() {
    this.battleTimer++;

    var nextCombatant = this.turnQueue[this.battleTimer];
    while (!nextCombatant) {
      this.battleTimer++;
      nextCombatant = this.turnQueue[this.battleTimer];
    }
  }
}
