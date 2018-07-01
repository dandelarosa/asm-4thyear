const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

var canvas, canvasContext;

window.addEventListener("load", function(event) {
  canvas = document.createElement('canvas');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  document.body.appendChild(canvas);
  canvasContext = canvas.getContext('2d');

  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
  drawText("LOADING ASSETS", GAME_WIDTH/2, GAME_HEIGHT/2, 'white', 'center', 'middle');

  // TODO: implement a LoadingScene
});
