import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    Alert.alert(
      "Connexion",
      `Email: ${email}\nMot de passe: ${password}\nSe souvenir: ${rememberMe}`
    );
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Connexion avec Google !");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fond.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            source={require("../../assets/images/Locatiis-Logo-Blanc-.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>
            Connectez-vous pour découvrir votre futur logement
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Mot de passe"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="green"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={styles.checkbox}
            >
              {rememberMe && <View style={styles.checked} />}
            </TouchableOpacity>
            <Text style={styles.label}>Se souvenir de moi</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Mot de passe oublié ?",
                "Redirection vers la page de récupération."
              )
            }
          >
            <Text style={styles.forgot}>Mot de passe oublié ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.googleButton]}
            onPress={handleGoogleLogin}
          >
            <AntDesign
              name="google"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Continuer avec Google</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.ins}>
              Pas encore de compte ? Inscrivez-Vous !
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  container: { flex: 1, padding: 15, paddingBottom: 50 },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  passwordContainer: { marginBottom: 15, position: "relative" },
  passwordInput: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingRight: 45,
  },
  eyeButton: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  checked: { width: 14, height: 14, backgroundColor: "green", borderRadius: 2 },
  label: { fontSize: 16, color: "white" },
  forgot: {
    color: "lightgreen",
    textAlign: "right",
    marginBottom: 25,
    fontWeight: "500",
  },
  ins: {
    color: "lightgreen",
    textAlign: "right",
    marginBottom: 25,
    marginTop: 30,
    fontWeight: "500",
    fontSize: 18,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "green",
    marginBottom: 15,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  googleButton: { backgroundColor: "#E63913" },
});
