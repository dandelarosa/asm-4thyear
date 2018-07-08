const MAIN_BATTLE_MENU_X = 20;
const MAIN_BATTLE_MENU_Y = 180;
const MAIN_BATTLE_MENU_WIDTH = 130;
const MAIN_BATTLE_MENU_HEIGHT = 150;

const MAIN_BATTLE_MENU_INDEX_ATTACK = 0;
const MAIN_BATTLE_MENU_INDEX_TECH = 1;
const MAIN_BATTLE_MENU_INDEX_ITEM = 2;
const MAIN_BATTLE_MENU_INDEX_COUNT = 3;
const MAIN_BATTLE_MENU_INDEX_LAST = MAIN_BATTLE_MENU_INDEX_COUNT - 1;

const MAIN_BATTLE_MENU_INPUT_DELAY = 5;

function MainBattleMenu() {
  this.init = function() {
    this.x = MAIN_BATTLE_MENU_X;
    this.y = MAIN_BATTLE_MENU_Y;
    this.width = MAIN_BATTLE_MENU_WIDTH;
    this.height = MAIN_BATTLE_MENU_HEIGHT;
    
    this.done = false;
    this.selectedIndex = MAIN_BATTLE_MENU_INDEX_ATTACK;
    this.subMenu = null;

    this.inputDelayTimer = MAIN_BATTLE_MENU_INPUT_DELAY;
  };
  this.init();

  this.update = function() {
    if (this.subMenu) {
      this.subMenu.update();
      if (this.subMenu.canceled) {
        this.subMenu = null;
      }
      else if (this.subMenu.done) {
        this.done = true;
      }
      return;
    }

    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (upPressed) {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = MAIN_BATTLE_MENU_INDEX_LAST;
        }
        didPressButton = true;
      }
      else if (downPressed) {
        this.selectedIndex++;
        if (this.selectedIndex > MAIN_BATTLE_MENU_INDEX_LAST) {
          this.selectedIndex = 0;
        }
        didPressButton = true;
      }
      else if (enterPressed) {
        this.subMenu = new AttackTargetMenu();
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = MAIN_BATTLE_MENU_INPUT_DELAY;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  }

  this.draw = function() {
    // Draw menus relative to its parent so that it doesn't have to keep track of its absolute coordinates
    canvasContext.save();
    canvasContext.translate(this.x, this.y);
    drawRect(0, 0, this.width, this.height, '#0066cc');

    canvasContext.font = '20px Times';
    var textX = 10;
    var textY = 10;
    for (var i = 0; i < MAIN_BATTLE_MENU_INDEX_COUNT; i++) {
      var menuOptionText;
      switch (i) {
        case MAIN_BATTLE_MENU_INDEX_ATTACK:
          menuOptionText = "ATTACK";
          break;
        case MAIN_BATTLE_MENU_INDEX_TECH:
          menuOptionText = "TECH";
          break;
        case MAIN_BATTLE_MENU_INDEX_ITEM:
          menuOptionText = "ITEM";
          break;
        default:
          menuOptionText = "";
          break;
      }

      var finalText;
      var fillStyle;
      if (i === this.selectedIndex) {
        finalText = "> " + menuOptionText;
        fillStyle = 'yellow';
      }
      else {
        finalText = menuOptionText;
        fillStyle = 'white';
      }
      drawText(finalText, textX, textY, fillStyle, 'left', 'top');
      textY += 50;
    }

    this.subMenu && this.subMenu.draw();

    canvasContext.restore();
  }
}