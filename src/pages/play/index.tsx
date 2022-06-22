import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import Game from "./game";

const Play = () => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return <Game />;
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setPlaying(true)}>
        <Text>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Play;
