// Footer.tsx
import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require("../../assets/images/Locatiis-Logo-Blanc-.png")}
          style={styles.logo}
        />
        <Text style={styles.description}>
          Une solution moderne pour la location de biens immobiliers.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Liens Rapides</Text>
        <TouchableOpacity>
          <Text style={styles.link}>À Propos de Nous</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Nos Services</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Politique de Confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Conditions d'Utilisation</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Aide & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Inscrivez votre agence</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suivez-nous</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.facebook.com")}
          >
            <FontAwesome
              name="facebook"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.instagram.com")}
          >
            <AntDesign
              name="instagram"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.linkedin.com")}
          >
            <Entypo
              name="linkedin"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.twitter.com")}
          >
            <Ionicons
              name="logo-twitter"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:contact@ncbenin.com")}
        >
          <Text style={styles.link}>contact@ncbenin.com</Text>
        </TouchableOpacity>
        <Text style={styles.link}>+229 00 00 00 00</Text>
        <Text style={styles.link}>123 Rue de l'Innovation, Cotonou, Bénin</Text>
      </View>

      <Text style={styles.copyright}>
        © 2024 NetPro Consulting. Tous droits réservés. Locatiis est une marque
        déposée de NetPro Consulting.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1B2A",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  section: {
    width: "45%",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  description: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    paddingBottom: 4,
  },
  link: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 6,
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
    backgroundColor: "#1B263B",
    padding: 8,
    borderRadius: 6,
  },
  copyright: {
    width: "100%",
    textAlign: "center",
    color: "#888",
    fontSize: 12,
    marginTop: 10,
  },
});
