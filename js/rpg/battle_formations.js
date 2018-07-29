function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadGuy(1),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadGuy(2),
      new BadGuy(2),
      new BadGuy(2),
      new BadGuy(2)
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new BadGuy(10),
      new BadGuy(10),
      new BadGuy(10),
    ];
  }
}
