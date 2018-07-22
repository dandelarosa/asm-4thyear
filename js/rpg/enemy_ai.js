function EnemyAI(enemy) {
  this.enemy = enemy;

  this.getSelectedAction = function() {
    var selectedIndex = Math.floor(Math.random() * partyMembers.length);
    var selectedHero = partyMembers[selectedIndex];
    var selectedAction = new AttackAction(this.enemy, selectedHero);
    return selectedAction;
  }
}
