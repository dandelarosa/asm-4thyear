function EnemyAI(enemy) {
  this.enemy = enemy;

  this.getSelectedAction = function() {
    var heroes = this.getHeroesToTarget();
    var selectedIndex = Math.floor(Math.random() * heroes.length);
    var selectedHero = heroes[selectedIndex];
    var selectedAction = new AttackAction(this.enemy, selectedHero);
    return selectedAction;
  }

  this.getHeroesToTarget = function() {
    var heroes = [];
    for (var i = 0; i < partyMembers.length; i++) {
      var hero = partyMembers[i];
      if (hero.currentHP > 0) {
        heroes.push(hero);
      }
    }
    return heroes;
  }
}
