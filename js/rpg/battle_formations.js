function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadGuy(),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadGuy(),
      new BadGuy(),
      new BadGuy(),
      new BadGuy()
    ];
  }
}
