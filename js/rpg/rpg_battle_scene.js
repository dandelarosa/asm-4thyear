function RPGBattleScene() {
  this.init = function() {
  };
  this.init();

  this.update = function() {
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');
    drawText("BATTLE SHOULD HAPPEN HERE", GAME_WIDTH/2, GAME_HEIGHT/2, 'black', 'center', 'middle');
  };
}
