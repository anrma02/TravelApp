import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const setData = async () => {
    if (email.length == 0 || name.length == 0 || password.length == 0) {
      Alert.alert("Warning !", "Please write your data");
    } else {
      try {
        await AsyncStorage.setItem("Email", email, "UserName", name);

        navigation.navigate("Login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <ImageBackground
          source={require("../../assets//images/1.png")}
          resizeMode="cover"
          style={{ flex: 1, height: "75%" }}
        >
          {/* <Text style={styles.loginText}>Register</Text> */}
          <View style={styles.formInputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="rgba(0,0,0,0.5)"
              style={styles.Textinput}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              placeholder="User Name"
              placeholderTextColor="rgba(0,0,0,0.5)"
              style={styles.Textinput}
              onChangeText={(value) => setName(value)}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(0,0,0,0.5)"
              style={styles.Textinput}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
            <View style={styles.formButton}>
              <Pressable onPress={() => setData()}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
            </View>

            <View style={styles.account}>
              <Text
                style={styles.acc}
                onPress={() => navigation.navigate("Login")}
              >
                You have account
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  account: {},
  acc: {
    top: 5,
    fontWeight: "700",
    // lineHeight:"10",
    color: " rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  loginText: {
    color: " rgba(214,228,229,0.9)",
    fontWeight: "700",
    fontSize: 45,
    textAlign: "center",
    top: 80,
    zIndex: 111,
  },
  Textinput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "  rgba(255,255,255,0.8)",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    paddingLeft: 15,
  },
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    justifyContent: "flex-end",
  },
  formButton: {
    backgroundColor: " rgba(110,204,175,0.7)",
    height: 55,

    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.5,
  },
});
