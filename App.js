import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Login from "./src/paginas/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
