/**
 * IMPORTANT: This prefix must be unique to each game.
 */
const SAVE_STATE_SLOT_PREFIX = "dexternites_1_prototype_slot_";

function saveGameToSlot(slotNumber) {
  var slotName = SAVE_STATE_SLOT_PREFIX + slotNumber;
  var saveState = getSaveState();
  localStorageHelper.setObject(slotName, saveState);
}

function loadGameFromSlot(slotNumber) {
  var slotName = SAVE_STATE_SLOT_PREFIX + slotNumber;
  var saveState = localStorageHelper.getObject(slotName);
  if (!saveState) {
    console.log("Error: save state not found.");
    return;
  }
  loadSaveState(saveState);
}

function getSaveState() {
  var saveState = {
    partyMembers: getPartyMembersSaveState(),
  };
  return saveState;
}

function loadSaveState(saveState) {
  var partyMembersSaveState = saveState.partyMembers;
  loadPartyMembersSaveState(partyMembersSaveState);
}
