import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Tarefa } from "./src/components/Tarefa";
import { MenuPrincipal } from "./src/components/MenuPrincipal";
import { LogoBar } from "./src/components/LogoBar";

export default function App() {
  return (
    <View style={styles.container}>
      <LogoBar />
      <MenuPrincipal />
      <Tarefa />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
