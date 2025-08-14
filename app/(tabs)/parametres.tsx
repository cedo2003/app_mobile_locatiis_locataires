import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Parametres() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur la page des parametres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
  },
});
