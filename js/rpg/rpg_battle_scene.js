function RPGBattleScene() {
  this.init = function() {
    var turnManager = new TurnManager();
    turnManager.addCombatantsToQueue(partyMembers);
    turnManager.addCombatantsToQueue(enemies);
    this.turnManager = turnManager;

    this.currentTurnCombatant = null;
    this.currentMenu = null;
    this.currentAnimation = null;

    this.currentDescription = "";
  };
  this.init();

  this.update = function() {
    if (this.currentTurnCombatant) {
      if (this.currentMenu) {
        if (this.currentMenu.done) {
          this.currentMenu = null;
        }
      }
      else if (this.currentAnimation) {
        if (this.currentAnimation.done) {
          this.currentAnimation = null;
        }
      }
      else {
        this.turnManager.addCombatantToQueue(this.currentTurnCombatant);
        this.currentTurnCombatant = null;
      }
    }
    else {
      // Wait for the next character to make a move
      var currentTurnCombatant = this.turnManager.popCombatant();
      if (currentTurnCombatant) {
        this.currentTurnCombatant = currentTurnCombatant;
        var currentTurnCombatantName = currentTurnCombatant.name;
        this.currentDescription = currentTurnCombatantName + "'s Turn";
        // TODO: skip menu if character is controlled by AI
        this.currentMenu = new MainBattleMenu(100, 100);
      }
      else {
        this.turnManager.tick();
      }
    }
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

    drawText(this.currentDescription, GAME_WIDTH/2, 420, 'black', 'center', 'top');

    drawText(this.turnManager.battleTimer, GAME_WIDTH/2, 450, 'black', 'center', 'top');

    this.currentMenu && this.currentMenu.draw();
  };
}
