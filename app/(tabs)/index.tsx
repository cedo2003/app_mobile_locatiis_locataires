import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur l'accueil</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: { fontSize: 20 },
});
