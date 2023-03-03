import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RobotoBold from "./components/RobotoBold";
import { useLoadAssets } from "./hooks/useLoadAssets";

export default function App() {
  const assetsLoaded = useLoadAssets();
  if (!assetsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text>Normal system default font</Text>
      <RobotoBold>Roboto Bold Font</RobotoBold>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
