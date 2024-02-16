import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../../../components/Screen";

export default function Footer() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>footer</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
