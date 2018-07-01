function LoadingLoadingScene() {
  this.init = function() {
    // In actuality we would load something like a splash screen, but for now just make sure this thing even renders
    this.loadTimer = 60;
  };
  this.init();

  this.update = function() {
    if (this.loadTimer === 0) {
      nextScene = new LoadingScene();
    }
    else {
      this.loadTimer--;
    }
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
    drawText("LOADING ASSETS", GAME_WIDTH/2, GAME_HEIGHT/2, 'white', 'center', 'middle');
  };
}
