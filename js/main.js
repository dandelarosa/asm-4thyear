const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

window.addEventListener("load", function(event) {
  initGameState();
  // This should only be called when you actually enter a battle, but we can put this here for now
  initBattleState();
  var firstScene = new LoadingLoadingScene();

  // setupGraphics must be called before setting up input
  setupGraphics(GAME_WIDTH, GAME_HEIGHT);
  setupKeyboard();
  setupMouse();
  setupGameLoop(FPS, firstScene);
});
