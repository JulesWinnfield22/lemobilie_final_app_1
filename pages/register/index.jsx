import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Register(props) {
  const route = useRoute()
  const data = route.params

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="First" initialParams={data} component={First} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Third" component={Third} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
