const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

var canvas, canvasContext;
var currentScene;
var nextScene;

window.addEventListener("load", function(event) {
  canvas = document.createElement('canvas');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  document.body.appendChild(canvas);
  canvasContext = canvas.getContext('2d');

  initGameState();
  currentScene = new LoadingLoadingScene();
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
