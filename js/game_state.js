// These variables should be saved
var partyMembers;

// Needs to wait until all scripts are loaded before calling this
function initGameState() {
  partyMembers = [
    {
      name: "David",
      currentHP: 100,
      maxHP: 100,
      ticksToNextTurn: 40,
    },
    {
      name: "Shane",
      currentHP: 100,
      maxHP: 100,
      ticksToNextTurn: 50,
    },
    {
      name: "Luke",
      currentHP: 100,
      maxHP: 100,
      ticksToNextTurn: 60,
    }
  ];

}
