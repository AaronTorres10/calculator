import { Colors } from "@/constants/theme";
import { View } from "react-native";
import CalculatorButton from "../../components/CalculatorButton";
import ThemeText from "../../components/ThemeText";
import { globalStyles } from "../../styles/global-styles";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">50 X 500000000000</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="Del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("Del")}
        />
        <CalculatorButton label="÷" onPress={() => console.log("÷")} />
      </View>
    </View>
  );
};

export default CalculatorApp;
