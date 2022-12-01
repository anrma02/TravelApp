import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { StatusBar } from "react-native";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Login from "../login/Login";
import home from "../login/home";
import Landingh from "../login/Landingh";
import Register from "../login/Register";
const Stack = createSharedElementStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName="Landingh">
        <Stack.Screen
          name="Landingh"
          component={Landingh}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />

        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="home"
          component={home}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />

        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
