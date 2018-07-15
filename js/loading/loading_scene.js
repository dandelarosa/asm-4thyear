function LoadingScene() {
  this.init = function() {
    // In actuality we would load the rest of the game assets, but for now just make sure this thing even renders
    this.loadTimer = 15;
  };
  this.init();

  this.update = function() {
    if (this.loadTimer === 0) {
      nextScene = new MainMenuScene();
    }
    else {
      this.loadTimer--;
    }
  };

  this.draw = function() {
    canvasContext.drawImage(splashScreenImage, 0, 0);
  };
}
