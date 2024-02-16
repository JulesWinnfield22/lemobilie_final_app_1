import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../assets/style/colors";

export default function ErrorMessage({ error }) {
  return (
    <>
      {error ? (
        <Text
          style={{
            paddingHorizontal: 2,
            fontSize: 10,
            fontFamily: "InterRegular",
            textTransform: "capitalize",
            color: colors.red,
          }}
        >
          {error}
        </Text>
      ) : (
        ""
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
