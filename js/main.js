const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

var currentScene;
var nextScene;

window.addEventListener("load", function(event) {
  // setupGraphics must be called first
  setupGraphics(GAME_WIDTH, GAME_HEIGHT);
  
  initGameState();
  // This should only be called when you actually enter a battle, but we can put this here for now
  initBattleState();
  currentScene = new LoadingLoadingScene();
  setupKeyboard();
  setupMouse();
  setInterval(eachFrame, 1000/FPS);
});

function eachFrame() {
  updateGame();
  drawGame();
  if (nextScene) {
    currentScene = nextScene;
    nextScene = null;
  }
}

function updateGame() {
  currentScene.update();
}

function drawGame() {
  currentScene.draw();
}
