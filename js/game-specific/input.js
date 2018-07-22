/**
 * Determines whether the confirmation button is pressed.
 */
function confirmPressed() {
  return enterPressed || zPressed;
}

function cancelPressed() {
  return escapePressed || xPressed;
}
