import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Tarefa } from "./src/components/Tarefa";
import { MenuPrincipal } from "./src/components/MenuPrincipal";
import { LogoBar } from "./src/components/LogoBar";
import { InputTarefa } from "./src/components/InputTarefa";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <LogoBar />
        <MenuPrincipal />
        <Tarefa />
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <InputTarefa />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerMain: {
    flex: 1,
    alignItems: "center",
  },
  footer: {
    marginBottom: 40,
  },
});
