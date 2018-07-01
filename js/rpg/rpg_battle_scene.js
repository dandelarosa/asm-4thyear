function RPGBattleScene() {
  this.init = function() {
    var turnManager = new TurnManager();
    turnManager.addCombatantsToQueue(partyMembers);
    turnManager.addCombatantsToQueue(enemies);
    this.turnManager = turnManager;
  };
  this.init();

  this.update = function() {
    var currentTurnCombatant = this.turnManager.popCombatant();
    if (currentTurnCombatant) {
      console.log(this.turnManager.battleTimer);
      console.log(currentTurnCombatant);
      // Do nothing for now; put back in the queue
      this.turnManager.addCombatantToQueue(currentTurnCombatant);
    }
    this.turnManager.tick();
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    var textX = 20;
    var textY = 20;
    for (var i = 0; i < partyMembers.length; i++) {
      var partyMember = partyMembers[i];
      canvasContext.font = '20px Times';
      drawText(partyMember.name, textX, textY, 'black', 'left', 'top');
      var HPText = 'HP: ' + partyMember.currentHP + ' / ' + partyMember.maxHP;
      drawText(HPText, textX + 180, textY, 'black', 'right', 'top');
      textY += 30;
    }

    textX = 400;
    textY = 20;
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      canvasContext.font = '20px Times';
      drawText(enemy.name, textX, textY, 'black', 'left', 'top');
      var HPText = 'HP: ' + enemy.currentHP + ' / ' + enemy.maxHP;
      drawText(HPText, textX + 220, textY, 'black', 'right', 'top');
      textY += 30;
    }

    drawText(this.turnManager.battleTimer, GAME_WIDTH/2, 450, 'black', 'center', 'top');
  };
}
