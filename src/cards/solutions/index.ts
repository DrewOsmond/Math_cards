import Equation from "../equation";

export default class Solution {
  answer: number;
  equation: Equation;

  constructor(solution: number, equation: Equation) {
    this.answer = solution;
    this.equation = equation;
  }
}
