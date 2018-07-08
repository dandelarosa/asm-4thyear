const ATTACK_TARGET_MENU_X = 150;
const ATTACK_TARGET_MENU_Y = 0;
const ATTACK_TARGET_MENU_WIDTH = 130;
const ATTACK_TARGET_MENU_HEIGHT = 150;

const ATTACK_TARGET_MENU_INPUT_DELAY = 5;

function AttackTargetMenu() {
  this.init = function() {
    this.x = ATTACK_TARGET_MENU_X;
    this.y = ATTACK_TARGET_MENU_Y;
    this.width = ATTACK_TARGET_MENU_WIDTH;
    this.height = ATTACK_TARGET_MENU_HEIGHT;

    this.canceled = false;
    this.done = false;
    this.selectedIndex = 0;

    this.inputDelayTimer = ATTACK_TARGET_MENU_INPUT_DELAY;
  };
  this.init();

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (escapePressed) {
        this.canceled = true;
        didPressButton = true;
      }
      else if (upPressed) {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = enemies.length - 1;
        }
        didPressButton = true;
      }
      else if (downPressed) {
        this.selectedIndex++;
        if (this.selectedIndex > enemies.length - 1) {
          this.selectedIndex = 0;
        }
        didPressButton = true;
      }
      else if (enterPressed) {
        // TODO: ATTACK!!!
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = MAIN_BATTLE_MENU_INPUT_DELAY;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  };

  this.draw = function() {
    // Draw menus relative to its parent so that it doesn't have to keep track of its absolute coordinates
    canvasContext.save();
    canvasContext.translate(this.x, this.y);
    drawRect(0, 0, this.width, this.height, '#0066cc');

    // TODO: implement

    canvasContext.restore();
  };
}
