import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../../assets/style/colors'
import InputParent from '../form/InputParent'
import ErrorMessage from '../ErrorMessage'

export default function Checkbox(props) {
  const [checked, setChecked] = useState(false)

  function handle(change) {
    setChecked(!checked)
    change(!checked)
  }

  return (
    <InputParent
      props={props}
      builder={({ changeValue, error }) => {
        return (
          <View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity onPress={() => handle(changeValue)}>
                <View style={styles.container}>
                  { checked ? <Text style={{color: '#000'}}>C</Text> :  ''}
                </View>
              </TouchableOpacity>
              {props?.children}
            </View>
            <ErrorMessage error={error} />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: .5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors['gray-300'],
  }
})