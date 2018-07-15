const MOUSE_LEFT_BUTTON = 1;
const MOUSE_RIGHT_BUTTON = 3;

// Mouse position relative to the canvas
var mouseX = 0;
var mouseY = 0;

var leftClicked = false;
var rightClicked = false;

function setupMouse() {
  canvas.addEventListener('mousemove', onMousemove);
  canvas.addEventListener('mousedown', onMousedown);
  canvas.addEventListener('mouseup', onMouseup);
}

function onMousemove(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
}

function onMousedown(evt) {
  if (evt.which === MOUSE_LEFT_BUTTON) {
    leftClicked = true;
  }
  else if (evt.which === MOUSE_RIGHT_BUTTON) {
    rightClicked = true;
  }
}

function onMouseup(evt) {
  if (evt.which === MOUSE_LEFT_BUTTON) {
    leftClicked = false;
  }
  else if (evt.which === MOUSE_RIGHT_BUTTON) {
    rightClicked = false;
  }
}
