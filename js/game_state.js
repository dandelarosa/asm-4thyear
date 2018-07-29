// These variables should be saved

/**
 The heroes who are currently in the party.
 */
var partyMembers;

// Needs to wait until all scripts are loaded before calling this
function initGameState() {
  partyMembers = [
    new David(1),
    new Shane(1),
    new Luke(1),
  ];

}

function getPartyMembersSaveState() {
  var saveState = [];
  for (var i = 0; i < partyMembers.length; i++) {
    var partyMember = partyMembers[i];
    var partyMemeberSaveState = partyMember.getSaveState();
    saveState.push(partyMemeberSaveState);
  }
  return saveState;
}

function loadPartyMembersSaveState(saveState) {
  partyMembers = [];
  for (var i = 0; i < saveState.length; i++) {
    var partyMemeberSaveState = saveState[i];
    var partyMember = heroFromSaveState(partyMemeberSaveState);
    partyMembers.push(partyMember);
  }
}

function makeSureOnePartyMemberIsAlive() {
  partyMembers[0].currentHP = 1;
}
