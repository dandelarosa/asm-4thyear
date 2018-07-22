function InnScene() {
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.didHeal = false;

  this.update = function() {
    if (!this.didHeal) {
      for (var i = 0; i < partyMembers.length; i++) {
        var hero = partyMembers[i];
        hero.currentHP = hero.maxHP;
      }
      this.didHeal = true;
    }

    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (confirmPressed() || cancelPressed()) {
        nextScene = new MainMenuScene();
        didPressButton = true;
      }
      
      if (didPressButton) {
        this.inputDelayTimer = this.inputDelay;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    canvasContext.font = '48px Times';
    drawText('Inn', GAME_WIDTH/2, 40, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';

    drawText('All heroes have been healed', GAME_WIDTH/2, 150, 'black', 'center', 'middle');
  }
}
