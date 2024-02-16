import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import First from "./pages/First";
import Second from "./pages/Second";

const Stack = createNativeStackNavigator();

export default function Register(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
