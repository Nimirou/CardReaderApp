import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";
import { Rows, Table } from "react-native-table-component";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SelectFileScreen from "./screens/SelectFileScreen";
import ShootCardScreen from "./screens/ShootCardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: { height: 55 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Domů",
            tabBarLabelStyle: { color: "black" }, // Set the text color to black
            tabBarActiveTintColor: "black", //
          }}
        />
        <Stack.Screen
          name="SelectFile"
          component={SelectFileScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Zvol",
            tabBarLabelStyle: { color: "black" }, // Set the text color to black
            tabBarActiveTintColor: "black", //
          }}
        />
        <Stack.Screen
          name="ShootCardScreen"
          component={ShootCardScreen}
          style={{
            headerShown: false,
            tabBarLabel: "Zvol",
            tabBarLabelStyle: { color: "black" }, // Set the text color to black
            tabBarActiveTintColor: "black", //
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
