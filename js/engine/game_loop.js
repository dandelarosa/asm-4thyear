var currentScene;
var nextScene;

function setupGameLoop(fps, firstScene) {
  currentScene = firstScene;
  setInterval(eachFrame, 1000/fps);
}

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
