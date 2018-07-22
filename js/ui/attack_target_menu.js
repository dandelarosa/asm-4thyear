const ATTACK_TARGET_MENU_X = 150;
const ATTACK_TARGET_MENU_Y = 0;
const ATTACK_TARGET_MENU_WIDTH = 130;
const ATTACK_TARGET_MENU_HEIGHT = 200;

function AttackTargetMenu(character, enemies) {
  this.init = function() {
    this.character = character;
    this.enemies = enemies;
    this.x = ATTACK_TARGET_MENU_X;
    this.y = ATTACK_TARGET_MENU_Y;
    this.width = ATTACK_TARGET_MENU_WIDTH;
    this.height = ATTACK_TARGET_MENU_HEIGHT;

    this.canceled = false;
    this.done = false;
    this.selectedIndex = 0;
    this.selectedAction = null;

    this.inputDelay = 5;
    this.inputDelayTimer = this.inputDelay;
  };
  this.init();

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (cancelPressed()) {
        this.canceled = true;
        didPressButton = true;
      }
      else if (upPressed) {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = this.enemies.length - 1;
        }
        didPressButton = true;
      }
      else if (downPressed) {
        this.selectedIndex++;
        if (this.selectedIndex > this.enemies.length - 1) {
          this.selectedIndex = 0;
        }
        didPressButton = true;
      }
      else if (confirmPressed()) {
        var selectedEnemy = this.enemies[this.selectedIndex]
        this.selectedAction = new AttackAction(this.character, selectedEnemy);
        this.done = true;
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = this.inputDelay;
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

    canvasContext.font = '20px Times';
    var textX = 10;
    var textY = 10;
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      var enemyName = enemy.name;
      var finalText;
      var fillStyle;
      if (i === this.selectedIndex) {
        finalText = "> " + enemyName;
        fillStyle = 'yellow';
      }
      else {
        finalText = enemyName;
        fillStyle = 'white';
      }
      drawText(finalText, textX, textY, fillStyle, 'left', 'top');
      textY += 50;
    }

    canvasContext.restore();
  };
}
