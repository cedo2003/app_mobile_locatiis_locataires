import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import SplashLoader from "./(tabs)/SplashLoader";

import Biens from "./(tabs)/biens";
import HomeScreen from "./(tabs)/index";
import Settings from "./(tabs)/parametres";
import AuthStack from "./AuthStack";
import Header from "./components/Header.jsx";

const Tab = createBottomTabNavigator();

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <StatusBar hidden={true} />
        <SplashLoader logo={require("../assets/images/Locatiis-Logo-1.png")} />
      </>
    );
  }

  return (
    <>
      <StatusBar hidden={false} />
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={({ route }) => ({
          header: () => {
            let title = "";
            switch (route.name) {
              case "Accueil":
                title = "Accueil";
                break;
              case "Biens":
                title = "Nos Biens";
                break;
              case "Connexion":
                title = "Connexion";
                break;
              case "Paramètres":
                title = "Paramètres";
                break;
            }
            return <Header title={title} />;
          },
          tabBarActiveTintColor: "#27ae60",
          tabBarInactiveTintColor: "#95a5a6",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 5,
            backgroundColor: "#fff",
            borderTopWidth: 0,
            height: 70,
            paddingBottom: Platform.OS === "ios" ? 15 : 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
          },
          headerShown: true,
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size + 5} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Biens"
          component={Biens}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="business" size={size + 5} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Connexion"
          component={AuthStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="login" size={size + 5} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Paramètres"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" size={size + 5} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
