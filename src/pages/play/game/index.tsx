import { View, Text } from "react-native";
import { useState } from "react";
import { makeDeck } from "./util/make";
import { MathBranches, Equation, Solution } from "../../../../types";

const Game = () => {
  const [gameBoard, setGameBoard] = useState(
    makeDeck([MathBranches["addition"]])
  );

  return (
    <View>
      {gameBoard.map((ele, i) => {
        if (ele instanceof Equation) {
          return <Text key={i}>{ele.val}</Text>;
        }

        if (ele instanceof Solution) {
          return <Text key={i}>{ele.answer}</Text>;
        }
      })}
    </View>
  );
};

export default Game;
