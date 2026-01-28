import { GameState } from "./state.js";

export function goToPhase(nextPhase) {
  if (nextPhase !== GameState.phase + 1) return;

  GameState.phase = nextPhase;

  switch (GameState.phase) {
    case 0: loadBoot(); break;
    case 0.5: loadLogin(); break;
    case 1: loadAuthLoading(); break;
    case 1.5: loadLevelUp(); break;
    case 2: startTutorial(); break;
    case 3: showHome(); break;
    case 8: startEnding(); break;
  }
}
