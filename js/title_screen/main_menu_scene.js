function MainMenuScene() {
  this.options = [
    "Start Battle",
    "Instructions",
    "Credits",
  ];
  this.selectedIndex = 0;
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (upPressed) {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = this.options.length - 1;
        }
        didPressButton = true;
      }
      else if (downPressed) {
        this.selectedIndex++;
        if (this.selectedIndex > this.options.length - 1) {
          this.selectedIndex = 0;
        }
        didPressButton = true;
      }
      else if (enterPressed) {
        var selectedOption = this.options[this.selectedIndex];
        if (selectedOption === "Start Battle") {
          nextScene = new RPGBattleScene();
        }
        else if (selectedOption === "Instructions") {
          nextScene = new InstructionsScene();
        }
        else if (selectedOption === "Credits") {
          nextScene = new CreditsScene();
        }
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = this.inputDelay;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    canvasContext.font = '48px Times';
    drawText('Dexternites', GAME_WIDTH/2, 40, 'black', 'center', 'middle');
    canvasContext.font = '30px Times';
    drawText('The First Prototype', GAME_WIDTH/2, 80, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';

    var menuOptionX = 10;
    var menuOptionY = 150;
    for (var i = 0; i < this.options.length; i++) {
      var option = this.options[i];
      var optionText, optionColor;
      if (i === this.selectedIndex) {
        optionText = "> " + option;
        optionColor = "#777777";
      }
      else {
        optionText = "  " + option;
        optionColor = "black";
      }

      drawText(optionText, menuOptionX, menuOptionY, optionColor, 'left', 'top');

      menuOptionY += 40;
    }
  }
}
