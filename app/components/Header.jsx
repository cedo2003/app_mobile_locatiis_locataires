// components/Header.js
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
