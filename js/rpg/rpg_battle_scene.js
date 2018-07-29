function RPGBattleScene() {
  this.init = function() {
    var turnManager = new TurnManager();
    turnManager.addCombatantsToQueue(partyMembers);
    turnManager.addCombatantsToQueue(enemies);
    this.turnManager = turnManager;

    this.currentTurnCombatant = null;
    this.currentMenu = null;
    this.currentAI = null;
    this.currentAnimation = null;

    this.currentDescription = "";
  };
  this.init();

  this.victoryMenu = null;
  this.defeatMenu = null;

  this.update = function() {
    if (this.victoryMenu) {
      this.victoryMenu.update();
      if (this.victoryMenu.done) {
        nextScene = new MainMenuScene();
      }
      return;
    }
    else if (this.defeatMenu) {
      this.defeatMenu.update();
      if (this.defeatMenu.done) {
        makeSureOnePartyMemberIsAlive();
        nextScene = new MainMenuScene();
      }
      return;
    }

    if (this.currentTurnCombatant) {
      if (this.currentMenu) {
        this.currentMenu.update();
        if (this.currentMenu.done) {
          var currentAction = this.currentMenu.selectedAction;
          currentAction.applyEffects();
          this.currentMenu = null;
        }
      }
      else if (this.currentAI) {
        var currentAction = this.currentAI.getSelectedAction();
        currentAction.applyEffects();
        this.currentAI = null;
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
    else if (youWonTheBattle()) {
      this.victoryMenu = new VictoryMenu();
    }
    else if (youLostTheBattle()) {
      this.defeatMenu = new DefeatMenu();
    }
    else {
      // Wait for the next character to make a move
      var currentTurnCombatant = this.turnManager.popCombatant();
      if (currentTurnCombatant) {
        this.currentTurnCombatant = currentTurnCombatant;
        var currentTurnCombatantName = currentTurnCombatant.name;
        this.currentDescription = currentTurnCombatantName + "'s Turn";

        if (currentTurnCombatant.canControl) {
          this.currentMenu = new MainBattleMenu(currentTurnCombatant);
        }
        else {
          this.currentAI = new EnemyAI(currentTurnCombatant);
        }
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

    textX = 350;
    textY = 20;
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      canvasContext.font = '20px Times';
      var enemyText = enemy.name + " Lv. " + enemy.level;
      drawText(enemyText, textX, textY, 'black', 'left', 'top');
      var HPText = 'HP: ' + enemy.currentHP + ' / ' + enemy.maxHP;
      drawText(HPText, textX + 250, textY, 'black', 'right', 'top');
      textY += 30;
    }

    drawText(this.currentDescription, GAME_WIDTH/2, 420, 'black', 'center', 'top');

    drawText(this.turnManager.battleTimer, GAME_WIDTH/2, 450, 'black', 'center', 'top');

    this.currentMenu && this.currentMenu.draw();

    this.victoryMenu && this.victoryMenu.draw();
    this.defeatMenu && this.defeatMenu.draw();
  };
}
