import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });
  return (
    <View>
      <Text>RootLayout</Text>
      <Slot />
    </View>
  );
};

export default RootLayout;
