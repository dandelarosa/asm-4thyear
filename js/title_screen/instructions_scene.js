function InstructionsScene() {
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (cancelPressed()) {
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

    var textY = 150;

    canvasContext.font = 'bold 20px Times';
    drawText('arrow keys', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 30;

    canvasContext.font = '20px Times';
    drawText('move character / change options', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 40;

    canvasContext.font = 'bold 20px Times';
    drawText('enter / z', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 30;

    canvasContext.font = '20px Times';
    drawText('perform action / confirm option', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 40;

    canvasContext.font = 'bold 20px Times';
    drawText('escape / x', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 30;

    canvasContext.font = '20px Times';
    drawText('cancel action / go back', GAME_WIDTH/2, textY, 'black', 'center', 'middle');
    textY += 40;

    drawText('Escape to go back', GAME_WIDTH/2, 450, 'black', 'center', 'middle');
  }
}
