// These variables should be saved

/**
 The heroes who are currently in the party.
 */
var partyMembers;

// Needs to wait until all scripts are loaded before calling this
function initGameState() {
  partyMembers = [
    new David(),
    new Shane(),
    new Luke(),
  ];

}

function makeSureOnePartyMemberIsAlive() {
  partyMembers[0].currentHP = 1;
}
