function CreditsScene() {
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
    drawText('Credits', GAME_WIDTH/2, 40, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';

    drawText('Annual Saga Monthly Game 4 (July 2018)', GAME_WIDTH/2, 150, 'black', 'center', 'middle');
    drawText('Dexternites 1 Prototype', GAME_WIDTH/2, 200, 'black', 'center', 'middle');

    drawText('All Programming: Dan Dela Rosa', GAME_WIDTH/2, 300, 'black', 'center', 'middle');
    drawText('All Art: Dan Dela Rosa', GAME_WIDTH/2, 350, 'black', 'center', 'middle');

    drawText('Press Escape to go back', GAME_WIDTH/2, 450, 'black', 'center', 'middle');
  }
}
