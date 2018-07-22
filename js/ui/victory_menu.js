function VictoryMenu() {
  this.x = 20;
  this.y = 20;
  this.width = 600;
  this.height = 200;

  this.done = false;

  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (confirmPressed()) {
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

    canvasContext.font = '48px Times';
    drawText('You Won!', this.width/2, 40, 'black', 'center', 'middle');

    canvasContext.font = '30px Times';

    drawText('Press Enter to continue', this.width/2, 140, 'black', 'center', 'middle');

    canvasContext.restore();
  };
}
