import {
  MathBranches,
  Equation,
  Solution,
  MatchBoard,
} from "../../../../../types";

const shuffleDeck = (cards: Array<Equation | Solution>): void => {
  const getRandIdx = () => Math.floor(Math.random() * cards.length);

  for (let i = 0; i < 30; i++) {
    const idx1 = getRandIdx();
    const idx2 = getRandIdx();

    const temp = cards[idx1];
    cards[idx1] = cards[idx2];
    cards[idx2] = temp;
  }
};

const makeDeck = (types: MathBranches[]): Array<Equation | Solution> => {
  const deck = new MatchBoard(types);
  const combinedDeck = [...deck.equationCards, ...deck.solutionCards];
  shuffleDeck(combinedDeck);

  return combinedDeck;
};

export { makeDeck };
