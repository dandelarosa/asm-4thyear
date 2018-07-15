function LoadingScene() {
  this.init = function() {
    this.loaded = false;
    // In actuality we would load the rest of the game assets, but for now just make sure this thing even renders
    this.loadTimer = 15;
  };
  this.init();

  this.update = function() {
    if (this.loaded) {
      if (leftClicked) {
        nextScene = new MainMenuScene();
      }
    }

    if (this.loadTimer === 0) {
      this.loaded = true;
    }
    else {
      this.loadTimer--;
    }
  };

  this.draw = function() {
    canvasContext.drawImage(splashScreenImage, 0, 0);

    if (this.loaded) {
      canvasContext.font = '24px Times';
      drawText('Click here to start', GAME_WIDTH/2, 400, 'black', 'center', 'middle');
    }
  };
}
