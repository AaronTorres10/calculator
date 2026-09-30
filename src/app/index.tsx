import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50 X 500000000000
      </Text>
      <Text style={globalStyles.subResult}>2500</Text>
    </View>
  );
};

export default CalculatorApp;
