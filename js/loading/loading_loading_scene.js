function LoadingLoadingScene() {
  this.init = function() {
    loadLoadingScreenImages();
  };
  this.init();

  this.update = function() {
    if (loadingScreenImagesLoaded === loadingScreenImagesToLoad.length) {
      nextScene = new LoadingScene();
    }
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white');
    drawText("LOADING ASSETS", GAME_WIDTH/2, GAME_HEIGHT/2, 'black', 'center', 'middle');
  };
}
