import { Colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={(pressed) => ({
        ...globalStyles.button,
        backgroundColor: color,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
