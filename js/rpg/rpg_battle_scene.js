function RPGBattleScene() {
  this.init = function() {
  };
  this.init();

  this.update = function() {
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
    drawText("BATTLE SHOULD HAPPEN HERE", GAME_WIDTH/2, GAME_HEIGHT/2, 'white', 'center', 'middle');
  };
}
