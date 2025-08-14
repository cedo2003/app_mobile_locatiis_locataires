import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";

import {
  Alert,
  Animated,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "./footer";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const bannerOpacity = useRef(new Animated.Value(0)).current;
  const bannerTranslateY = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bannerOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(bannerTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const faq = [
    {
      question: "Comment fonctionne Locatiis ?",
      answer:
        "Locatiis est une plateforme de gestion locative qui vous permet de trouver, gérer et louer des biens immobiliers facilement.",
    },
    {
      question: "Quels sont les frais d'utilisation ?",
      answer:
        "L'utilisation de Locatiis est gratuite pour les locataires. Les propriétaires peuvent souscrire à un abonnement premium pour accéder à des fonctionnalités avancées.",
    },
    {
      question: "Comment contacter le support ?",
      answer: (
        <Text>
          Vous pouvez nous contacter par e-mail à{" "}
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() => Linking.openURL("mailto:support@locatiis.com")}
          >
            support@locatiis.com
          </Text>{" "}
          ou via notre chat en ligne disponible 24/7.
        </Text>
      ),
    },
    {
      question: "Mes données sont-elles protégés ?",
      answer:
        "Oui, nous utilisons des technologies de cryptage avancées pour garantir la sécurité et la confidentialité de vos informations.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);
  const animatedHeights = useRef(faq.map(() => new Animated.Value(0))).current;

  const toggleExpand = (index: number) => {
    if (expanded === index) {
      Animated.timing(animatedHeights[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(null));
    } else {
      if (expanded !== null) {
        Animated.timing(animatedHeights[expanded], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
      setExpanded(index);
      Animated.timing(animatedHeights[index], {
        toValue: 60,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !subject || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs !");
      return;
    }
    Alert.alert("Merci !", "Votre message a été envoyé.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: bannerOpacity,
            transform: [{ translateY: bannerTranslateY }],
          }}
        >
          <LinearGradient
            colors={["#9DE09FFF", "#B5DFB7FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.banner}
          >
            <Text style={styles.bannerText}>📞 Contactez-nous facilement</Text>
          </LinearGradient>
        </Animated.View>

        <Text style={styles.title}>
          Besoin d'aide ou d'informations supplémentaires ? Remplissez le
          formulaire ci-dessous.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Sujet"
          placeholderTextColor="#888"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Message"
          placeholderTextColor="#888"
          multiline
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>

        <View style={styles.faqContainer}>
          <Text style={[styles.title, { marginTop: 0 }]}>
            FOIRE AUX QUESTIONS
          </Text>

          {faq.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                style={styles.faqQuestionContainer}
                onPress={() => toggleExpand(index)}
              >
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <Text style={styles.faqToggle}>
                  {expanded === index ? "-" : "+"}
                </Text>
              </TouchableOpacity>
              <Animated.View
                style={{ overflow: "hidden", height: animatedHeights[index] }}
              >
                {typeof item.answer === "string" ? (
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                ) : (
                  item.answer
                )}
              </Animated.View>
            </View>
          ))}
        </View>

        <View style={styles.newsletterContainer}>
          <LinearGradient
            colors={["green", "#000000FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.newsletterGradient}
          >
            <Text style={styles.newsletterTitle}>
              📩 Abonnez-vous à notre newsletter
            </Text>
            <Text style={styles.newsletterSubtitle}>
              Recevez les dernières maisons disponibles dans votre boîte mail.
            </Text>
            <View style={styles.newsletterInputRow}>
              <TextInput
                style={styles.newsletterInput}
                placeholder="Votre email"
                placeholderTextColor="#888"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.newsletterButton}>
                <Text style={styles.newsletterButtonText}>S'abonner</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#f5f5f5" },
  banner: {
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bannerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  faqContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
  },
  faqToggle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  faqAnswer: {
    paddingVertical: 10,
    fontSize: 15,
    color: "#333",
  },
  newsletterContainer: {
    marginBottom: 20,
  },
  newsletterGradient: {
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  newsletterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  newsletterSubtitle: {
    fontSize: 14,
    color: "#f0f0f0",
    textAlign: "center",
    marginBottom: 15,
  },
  newsletterInputRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  newsletterInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: "bkack",
  },
  newsletterButton: {
    backgroundColor: "green",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  newsletterButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
