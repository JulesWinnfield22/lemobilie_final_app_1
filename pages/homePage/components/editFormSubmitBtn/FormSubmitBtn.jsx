import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import FormSubmitButton from "../../../../components/FormSubmitButton";
import colors from "../../../../assets/style/colors";
import Icon from 'react-native-vector-icons/FontAwesome6'

export default function FormSubmitBtn({style, onPress, textColor, text, pending}) {
  const [spinValue] = useState(new Animated.Value(0))

  useEffect(() => {
    if(pending) {
      startAnimation()
    } else {
      spinValue.setValue(0)
    }
  }, [pending])

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <FormSubmitButton
      style={style}
      onPress={onPress}
    >
      {
        pending ?
        <Animated.View style={{transform: [{ rotate: spin }]}}>
          <Icon name='spinner' color='white' size={22} />
        </Animated.View>
        :
        <Text style={[{ color: textColor || colors.baseClr, fontSize: 20 }]}>{text ? text : 'Submit'}</Text>
      }
    </FormSubmitButton>
  );
}

const styles = StyleSheet.create({
  container: {},
});
