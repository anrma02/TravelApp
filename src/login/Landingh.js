import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
export default function Landingh() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Text style={styles.trap}>Wellcome to </Text>
        <Text style={styles.trap}> Travel App</Text>
        <ImageBackground
          source={require("../../assets/2.png")}
          resizeMode="cover"
          style={{ flex: 1, height: "73%" }}
        />
      </View>

      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}> Login</Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  trap: {
    color: " rgba(142,195,176,0.9)",
    fontWeight: "700",
    fontSize: 40,
    textAlign: "center",
    top: 100,
    zIndex: 111,
  },
  button: {
    backgroundColor: "#857BE1",
    height: 55,
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    marginBottom: 90,
  },
});
