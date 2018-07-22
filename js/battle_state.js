// These variables shouldn't be saved
var enemies;

function initBattleState() {
  enemies = [
    new BadGuy(),
    new BadGuy(),
    new BadGuy(),
    new BadGuy()
  ];
}

function getAvailableTargets() {
  var result = [];
  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    if (enemy.currentHP > 0) {
      result.push(enemy);
    }
  }
  return result;
}

function youWonTheBattle() {
  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    if (enemy.currentHP > 0) {
      return false;
    }
  }
  return true;
}

function youLostTheBattle() {
  for (var i = 0; i < partyMembers.length; i++) {
    var hero = partyMembers[i];
    if (hero.currentHP > 0) {
      return false;
    }
  }
  return true;
}
