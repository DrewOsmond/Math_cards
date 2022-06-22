import Solution from "../solutions";

export default class Equation {
  val: string;
  solution: Solution;

  constructor(type: string = "addition", range: number = 1001) {
    const [val, solution] = this.make(type, range);
    this.val = val;
    this.solution = new Solution(solution, this);
  }

  addition(range: number): [string, number] {
    const num1 = Math.floor(Math.random() * range);
    const num2 = Math.floor(Math.random() * range);

    return [`${num1} + ${num2}`, num1 + num2];
  }

  make(type: string, range: number): [string, number] {
    switch (type) {
      case "addition":
        return this.addition(range);
      default:
        return ["1 + 1", 2];
    }
  }
}
