import Equation from "../../../../cards/equation";
import { View, Text } from "react-native";

interface Props {
  card: Equation;
}

const EquationCard = ({ card }: Props) => {
  return (
    <View>
      <Text>{card.val}</Text>
    </View>
  );
};

export default EquationCard;
