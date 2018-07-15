function InstructionsScene() {
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (escapePressed) {
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
    drawText('How to Play', GAME_WIDTH/2, 40, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';
    drawText('arrow keys: move character / change options', GAME_WIDTH/2, 230, 'black', 'center', 'middle');
    drawText('enter key: perform action / confirm option', GAME_WIDTH/2, 280, 'black', 'center', 'middle');
    drawText('escape key: cancel action / go back', GAME_WIDTH/2, 330, 'black', 'center', 'middle');

    drawText('Press Escape to go back', GAME_WIDTH/2, 450, 'black', 'center', 'middle');
  }
}
