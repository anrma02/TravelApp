// import { View, Text, StyleSheet, Pressable } from "react-native";
// import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function home(navigation) {
//   const [name, setName] = useState("");
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = () => {
//     try {
//       AsyncStorage.getItem("UserName").then((value) => {
//         if (value != null) {
//           setName(value);
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>Wellcome {name}</Text>
//       </View>
//       <View style={styles.formButton}>
//         <Pressable onPress={() => navigation.navigate("Root")}>
//           <Text style={styles.buttonText}>Home</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   formButton: {
//     backgroundColor: " rgba(133,123,225,0.8)",
//     height: 60,
//     width: 200,
//     justifyContent: "center",
//     //     alignItems: "center",
//     left: 75,
//     //     textAlign: "center",
//     borderRadius: 30,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: "white",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "700",
//     color: "white",
//     letterSpacing: 0.5,
//   },
// });
import { View, Text } from "react-native";
import React from "react";

export default function home() {
  return (
    <View>
      <Text>home</Text>
    </View>
  );
}
