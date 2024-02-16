import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/style/colors'

export default function FormSubmitButton({children, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    color: colors.baseClr,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.primary
  }
})