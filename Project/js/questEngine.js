export function completeQuest(id) {
  if (GameState.quests[id] !== "NEW") return;

  GameState.quests[id] = "COMPLETED";
  checkContinueButton();
}
