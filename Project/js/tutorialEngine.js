export function nextTutorialStep() {
  GameState.tutorialStep++;

  lockAllUI();
  highlightOnly(GameState.tutorialStep);
}
