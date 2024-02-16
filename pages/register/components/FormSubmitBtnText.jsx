import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FormSubmitButton from "../../../components/FormSubmitButton";
import colors from "../../../assets/style/colors";

export default function FormSubmitBtnText({style, onPress, text}) {
  return (
    <FormSubmitButton
      style={style}
      onPress={onPress}
    >
      <Text style={[{ color: colors.baseClr, fontSize: 20 }]}>{text ? text : 'Continue'}</Text>
    </FormSubmitButton>
  );
}

const styles = StyleSheet.create({
  container: {},
});
