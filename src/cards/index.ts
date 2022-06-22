import Equation from "./equation";
import Solution from "./solutions";
import { MathBranches } from "../../types";

export default class MatchBoard {
  types: Array<MathBranches>;
  equationCards: Equation[];
  solutionCards: Solution[];

  constructor(types: Array<MathBranches>) {
    this.types = types;
    this.equationCards = this.make();
    this.solutionCards = this.getSolutions();
  }
  make(): Equation[] {
    const cards: Equation[] = [];
    for (let i = 0; i < 15; i++) {
      const randIdx = Math.floor(Math.random() * this.types.length);
      const randType = this.types[randIdx];
      cards.push(new Equation(randType));
    }
    return cards;
  }

  getSolutions(): Solution[] {
    const cardSolution: Solution[] = [];
    for (let card of this.equationCards) {
      cardSolution.push(card.solution);
    }
    return cardSolution;
  }
}
