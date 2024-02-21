import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../assets/style/colors'

export default function Select() {
  return (
    <View style={{borderRadius: 5, width: '100%', borderWidth: 1, borderColor: colors['gray-300'], height: 25}}>
      <Text>Select</Text>
    </View>
  )
}