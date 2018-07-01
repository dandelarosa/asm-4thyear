// These variables should be saved
var partyMembers;

// These variables shouldn't be saved
var enemies;

// Needs to wait until all scripts are loaded before calling this
function initGameState() {
  partyMembers = [
    {
      name: "David",
      currentHP: 100,
      maxHP: 100,
    },
    {
      name: "Shane",
      currentHP: 100,
      maxHP: 100,
    },
    {
      name: "Luke",
      currentHP: 100,
      maxHP: 100,
    }
  ];

  enemies = [
    new BadGuy(),
    new BadGuy(),
    new BadGuy(),
    new BadGuy()
  ];
}
